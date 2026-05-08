"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";

export default function TypewriterText({
  text,
  speed = 35,
  className,
  style,
  fastSpeed = false,
  trigger = true,
}: {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  fastSpeed?: boolean;
  trigger?: boolean;
}) {
  const actualSpeed = fastSpeed ? 15 : speed;
  const [displayed, setDisplayed] = useState("");
  const [isVisible, setIsVisible] = useState(trigger);
  const elementRef = useRef<HTMLParagraphElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  const animateText = useCallback(() => {
    if (indexRef.current < text.length) {
      setDisplayed(text.slice(0, indexRef.current + 1));
      indexRef.current++;
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [text]);

  useEffect(() => {
    setIsVisible(trigger);
  }, [trigger]);

  useEffect(() => {
    if (!isVisible) return;

    indexRef.current = 0;
    setDisplayed("");

    intervalRef.current = setInterval(animateText, actualSpeed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, actualSpeed, isVisible, animateText]);

  return (
    <p ref={elementRef} className={className} style={style}>
      {isVisible ? displayed : ""}
      <span className="inline-block w-[3px] h-[1em] bg-[#f4f4f6] ml-1 align-middle animate-pulse" />
    </p>
  );
}