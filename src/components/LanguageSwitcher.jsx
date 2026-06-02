import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "../i18n";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const lang = i18n.language || "en";
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [i18n.language]);

  const current =
    supportedLanguages.find((l) => l.code === i18n.language) ||
    supportedLanguages[0];

  const choose = (code) => {
    i18n.changeLanguage(code);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", code);
    }
    setOpen(false);
  };

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        className={styles.trigger}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.label}
      </button>
      {open && (
        <ul className={styles.menu} role="listbox" aria-label="Language">
          {supportedLanguages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang.code === current.code}
                className={`${styles.option} ${
                  lang.code === current.code ? styles.active : ""
                }`}
                onClick={() => choose(lang.code)}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
