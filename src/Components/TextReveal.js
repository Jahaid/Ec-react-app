import { motion } from "framer-motion";
import React from "react";

const TextReveal = ({ text }) => {
  const letters = text.split("");

  return (
    <div className="animate">
      <h3 className="text-2xl font-semibold" key={text}>
        {letters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block"
            initial={{ y: 20, rotateX: 90, opacity: 0 }}
            animate={{ y: 0, rotateX: 0, opacity: 1 }}
            transition={{
              delay: index * 0.06,
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h3>
    </div>
  );
};

export default TextReveal;
