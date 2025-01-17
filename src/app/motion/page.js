"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={container}>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={box}
            key="box"
          />
        ) : null}
      </AnimatePresence>
      <motion.button
        style={button}
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  width: 100,
  height: 160,
  position: "relative",
};

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
};

const button = {
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
  padding: "10px 20px",
  color: "#0f1115",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
};
