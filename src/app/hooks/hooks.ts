import { useEffect, useRef, useState } from "react";

type RevealOptions = {
  staggerDelay?: number;
  threshold?: number;
  rootMargin?: string;
};

export function useScrollReveal({
  staggerDelay = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
}: RevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (staggerDelay > 0) {
          const timer = setTimeout(() => setIsRevealed(true), staggerDelay);
          return () => clearTimeout(timer);
        }
        setIsRevealed(true);
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [staggerDelay, threshold, rootMargin]);

  return { ref, isRevealed };
}
