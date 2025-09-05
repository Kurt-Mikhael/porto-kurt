"use client";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className={className} style={style}>
      {displayed}
      <span className="border-r-2 border-white animate-pulse">&nbsp;</span>
    </p>
  );
}