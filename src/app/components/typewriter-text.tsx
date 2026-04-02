"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";

export default function TypewriterText({
  text,
  speed = 35,
  className,
  style,
}: {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [displayed, setDisplayed] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLParagraphElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  // Optimized animation frame using requestAnimationFrame for smoother animation
  const animateText = useCallback(() => {
    if (indexRef.current < text.length) {
      setDisplayed(text.slice(0, indexRef.current + 1));
      indexRef.current++;
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [text]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          // Use requestAnimationFrame for more efficient animation
          setTimeout(() => {
            setIsVisible(true);
          }, 900);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px"
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    indexRef.current = 0;
    setDisplayed("");

    // Use higher precision timing for smoother animation
    intervalRef.current = setInterval(animateText, speed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, speed, isVisible, animateText]);

  return (
    <p ref={elementRef} className={className} style={style}>
      {isVisible ? displayed : ""}
      <span 
        className="border-r-2 border-white animate-pulse ml-1 inline-block"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        &nbsp;
      </span>
    </p>
  );
}