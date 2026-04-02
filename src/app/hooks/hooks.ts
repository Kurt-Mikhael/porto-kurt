import { useEffect, useRef, useState, useMemo } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Memoize observer options to prevent unnecessary re-creation
  const observerOptions = useMemo(() => ({
    threshold: 0.3,
    rootMargin: '50px',
    ...options
  }), [options]);

  useEffect(() => {
    // Debounced intersection handler to reduce state updates during scroll
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Clear any pending timeouts
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          
          // Use requestAnimationFrame for smoother updates
          timeoutRef.current = setTimeout(() => {
            setIsIntersecting(true);
            setHasAnimated(true);
          }, 0);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hasAnimated, observerOptions]);

  return { ref, isIntersecting };
}