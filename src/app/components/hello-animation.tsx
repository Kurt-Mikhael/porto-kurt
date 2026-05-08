"use client";

import { useEffect, useState, useRef } from "react";

interface HelloAnimation {
  text: string;
  language: string;
}

const HELLO_LANGUAGES: HelloAnimation[] = [
  { text: "Hello", language: "English" },
  { text: "こんにちは", language: "Japanese" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Hola", language: "Spanish" },
  { text: "Bonjour", language: "French" },
  { text: "Ciao", language: "Italian" },
  { text: "Hallo", language: "German" },
  { text: "你好", language: "Mandarin" },
  { text: "Привет", language: "Russian" },
  { text: "مرحبا", language: "Arabic" },
];

export default function HelloAnimation() {
  const [displayedText, setDisplayedText] = useState("");
  
  const stateRef = useRef({
    currentIndex: 0,
    isDeleting: false,
  });

  const typingSpeed = 80;
  const deletingSpeed = 50;
  const delayBeforeDelete = 2000;
  const delayBeforeNextWord = 500;

  useEffect(() => {
    const animationLoop = () => {
      const state = stateRef.current;
      const currentWord = HELLO_LANGUAGES[state.currentIndex].text;

      if (!state.isDeleting) {
        if (displayedText.length < currentWord.length) {
          setTimeout(() => {
            setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          }, typingSpeed);
        } else {
          setTimeout(() => {
            state.isDeleting = true;
            animationLoop();
          }, delayBeforeDelete);
        }
      } else {
        if (displayedText.length > 0) {
          setTimeout(() => {
            setDisplayedText(displayedText.slice(0, -1));
          }, deletingSpeed);
        } else {
          state.isDeleting = false;
          state.currentIndex = (state.currentIndex + 1) % HELLO_LANGUAGES.length;
          setTimeout(() => {
            animationLoop();
          }, delayBeforeNextWord);
        }
      }
    };

    animationLoop();
  }, [displayedText]);

  return (
    <span
      className="inline-block"
      style={{
        background: "linear-gradient(to right, #ff5757, #a1131a)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {displayedText}
    </span>
  );
}
