"use client";

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

export function useColumnCount(
  breakpoints: { minWidth: number; cols: number }[] = [
    { minWidth: 640, cols: 2 },
    { minWidth: 1024, cols: 3 },
  ],
): number {
  const [cols, setCols] = useState(1);
  const bpsRef = useRef(breakpoints);
  bpsRef.current = breakpoints;

  useEffect(() => {
    const update = () => {
      let matched = 1;
      for (const bp of bpsRef.current) {
        if (window.matchMedia(`(min-width: ${bp.minWidth}px)`).matches) {
          matched = bp.cols;
        }
      }
      setCols(matched);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return cols;
}
