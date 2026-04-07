import { useEffect, useRef, useState, useMemo } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Memoize observer options to prevent unnecessary re-creation
  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '0px',
    ...options
  }), [options]);

  useEffect(() => {
    // Intersection handler - simple and efficient
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Direct state update tanpa setTimeout
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

// Hook untuk scroll-triggered animation dengan load out sesuai direction
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Default visible
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);
  const lastChangeTime = useRef<Record<string, number>>({});

  useEffect(() => {
    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    // Simple throttle dengan RAF
    let rafId: number | null = null;
    const handleScrollThrottled = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });

    // Intersection Observer - lebih menenang, less aggressive debounce
    const observer = new IntersectionObserver(
      ([entry]) => {
        const now = Date.now();
        const lastChange = lastChangeTime.current.visibility || 0;
        
        // Debounce hanya 150ms - lebih reasonable
        if (now - lastChange < 150) return;

        const shouldBeVisible = entry.isIntersecting;
        
        setIsVisible(shouldBeVisible);
        lastChangeTime.current.visibility = now;
      },
      { 
        threshold: 0.1, // 10% visible - more stable threshold
        rootMargin: '0px' // No buffer zone
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScrollThrottled);
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible, scrollDirection };
}