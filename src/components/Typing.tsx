"use client";

import React, { useState, useEffect } from "react";

const Typing: React.FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "Hello, world!",
    "Welcome to my website.",
    "Enjoy your stay!",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
//   const [speed, setSpeed] = useState(100); // Typing speed
  const speed = 100;

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText((prev) => currentPhrase.slice(0, prev.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        // Deleting
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
        }
      }
    }, speed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [displayText, isDeleting, currentPhraseIndex, phrases, speed]);

  return (
    <div style={{ fontFamily: "monospace", fontSize: "1.5rem" }}>
      {displayText}
      <span style={{ opacity: 1 }}>|</span> {/* Blinking cursor */}
    </div>
  );
};

export default Typing;
