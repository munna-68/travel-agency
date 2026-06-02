import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import ScrambleText from "./ScrambleText";
import styles from "./PageTransition.module.css";

const PageTransitionContext = createContext(null);

const premiumEase = [0.85, 0, 0.15, 1];

export function useTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error("useTransition must be used within PageTransitionProvider");
  }
  return ctx;
}

export default function PageTransitionProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isPreloading, setIsPreloading] = useState(true);
  const [preloaderState, setPreloaderState] = useState("scrambling");

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState("idle");
  const [pendingPath, setPendingPath] = useState(null);

  const handleScrambleComplete = useCallback(() => {
    setPreloaderState("textFade");
  }, []);

  useEffect(() => {
    if (preloaderState === "textFade") {
      const timer = setTimeout(() => {
        setPreloaderState("slideMeet");
      }, 350);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [preloaderState]);

  const handleSlideMeetComplete = useCallback(() => {
    if (preloaderState === "slideMeet") {
      setPreloaderState("hold");
      const timer = setTimeout(() => {
        setPreloaderState("splitOpen");
      }, 600);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [preloaderState]);

  const navigateWithTransition = useCallback(
    (to) => {
      if (isPreloading) return;
      if (isTransitioning) return;
      if (to === location.pathname) return;
      setPendingPath(to);
      setIsTransitioning(true);
      setTransitionPhase("closing");
    },
    [isPreloading, isTransitioning, location.pathname],
  );

  const handleClosingComplete = useCallback(() => {
    if (transitionPhase === "closing" && pendingPath) {
      navigate(pendingPath);
      setTransitionPhase("opening");
    }
  }, [transitionPhase, pendingPath, navigate]);

  const handleOpeningComplete = useCallback(() => {
    if (transitionPhase === "opening") {
      setIsTransitioning(false);
      setTransitionPhase("idle");
      setPendingPath(null);
    }
  }, [transitionPhase]);

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition }}>
      <AnimatePresence>
        {isPreloading && (
          <motion.div className={styles.preloaderContainer}>
            <motion.div
              initial={{ y: "-100%" }}
              animate={{
                y:
                  preloaderState === "splitOpen"
                    ? "-100%"
                    : preloaderState === "slideMeet" ||
                        preloaderState === "hold"
                      ? "0%"
                      : "-100%",
              }}
              onAnimationComplete={() => {
                if (preloaderState === "slideMeet") {
                  handleSlideMeetComplete();
                }
              }}
              transition={{ duration: 0.85, ease: premiumEase }}
              className={`${styles.pinkPanel} ${styles.noGapFix} ${styles.preloaderTopPanel}`}
            />

            <div className={styles.scrambleContainer}>
              <AnimatePresence>
                {preloaderState === "scrambling" && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.scrambleInner}
                  >
                    <ScrambleText
                      text="EXPLORE"
                      duration={1300}
                      onComplete={handleScrambleComplete}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ y: "0%" }}
              animate={{
                y:
                  preloaderState === "splitOpen"
                    ? "100%"
                    : preloaderState === "slideMeet" ||
                        preloaderState === "hold"
                      ? "50%"
                      : "0%",
              }}
              onAnimationComplete={() => {
                if (preloaderState === "splitOpen") {
                  setIsPreloading(false);
                }
              }}
              transition={{ duration: 0.85, ease: premiumEase }}
              className={`${styles.bluePanel} ${styles.noGapFix} ${styles.preloaderBottomPanel}`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTransitioning && (
          <div className={styles.transitionContainer}>
            <motion.div
              initial={{ y: "-100%" }}
              animate={{
                y: transitionPhase === "closing" ? "0%" : "-100%",
              }}
              exit={{ y: "-100%" }}
              onAnimationComplete={() => {
                if (transitionPhase === "closing") {
                  handleClosingComplete();
                }
              }}
              transition={{ duration: 0.75, ease: premiumEase }}
              className={`${styles.pinkPanel} ${styles.noGapFix} ${styles.transitionTopPanel}`}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{
                y: transitionPhase === "closing" ? "0%" : "100%",
              }}
              exit={{ y: "100%" }}
              onAnimationComplete={() => {
                if (transitionPhase === "opening") {
                  handleOpeningComplete();
                }
              }}
              transition={{ duration: 0.75, ease: premiumEase }}
              className={`${styles.bluePanel} ${styles.noGapFix} ${styles.transitionBottomPanel}`}
            />
          </div>
        )}
      </AnimatePresence>

      {children}
    </PageTransitionContext.Provider>
  );
}
