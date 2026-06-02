import { useEffect, useState } from "react";
import styles from "./PageTransition.module.css";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%-+123456789";

export default function ScrambleText({ text, duration = 1200, onComplete }) {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentIteration = 0;
    const maxFrames = Math.floor(duration / 30);

    const interval = setInterval(() => {
      currentIteration += 1;

      const scrambled = text
        .split("")
        .map((char) => {
          if (char === " ") return " ";
          const lockProbability = currentIteration / maxFrames;
          if (Math.random() < lockProbability) {
            return char;
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setCurrentText(scrambled);

      if (currentIteration >= maxFrames) {
        setCurrentText(text);
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, duration, onComplete]);

  return <span className={styles.scrambleText}>{currentText}</span>;
}
