import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const TextReveal = () => {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetKey((prev) => prev + 1);
    }, 1000); // Rejoue toutes les 1000ms (1 seconde)

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.h3
      key={resetKey} // Ce changement de clé force la recréation du composant
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      SNEAKER COMPANY
    </motion.h3>
  );
};

export default TextReveal;
