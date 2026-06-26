import { useEffect, useRef, useState, useMemo } from 'react';

/**
 * Simple intersection observer for section-level fade-in.
 * Animates once and stays visible.
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '0px',
    ...options
  }), [options]);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsIntersecting(true);
          setHasAnimated(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, observerOptions]);

  return { ref, isIntersecting };
}

/**
 * Smooth scroll-reveal hook for individual cards/items.
 * - Animates in once (no jarring fade-out)
 * - Triggers when element is 60px into viewport (feels more natural)
 * - Supports staggerDelay for cascading grid animations
 */
export function useScrollReveal(staggerDelay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply stagger delay for cascading effect
          if (staggerDelay > 0) {
            timer = setTimeout(() => {
              setIsRevealed(true);
            }, staggerDelay);
            return () => clearTimeout(timer);
          } else {
            setIsRevealed(true);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [staggerDelay]);

  return { ref, isRevealed };
}

// Kept for backward compatibility during transition — will be removed
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);
  const lastChangeTime = useRef<Record<string, number>>({});

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    let rafId: number | null = null;
    const handleScrollThrottled = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        const now = Date.now();
        const lastChange = lastChangeTime.current.visibility || 0;
        if (now - lastChange < 150) return;
        setIsVisible(entry.isIntersecting);
        lastChangeTime.current.visibility = now;
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScrollThrottled);
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible, scrollDirection };
}
