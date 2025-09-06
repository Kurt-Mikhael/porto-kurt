"use client";
import React, { useEffect, useState, useRef } from "react";

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
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          // Tambahkan delay 900ms sebelum mulai animasi typewriter
          setTimeout(() => {
            setIsVisible(true);
            setHasStarted(true);
          }, 900);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!isVisible) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, isVisible]);

  return (
    <p ref={elementRef} className={className} style={style}>
      {/* Tampilkan teks kosong sampai typewriter dimulai */}
      {isVisible ? displayed : ""}
      <span className={`border-r-2 border-white animate-pulse ml-1 inline-block ${!isVisible ? 'invisible' : ''}`}>&nbsp;</span>
    </p>
  );
}