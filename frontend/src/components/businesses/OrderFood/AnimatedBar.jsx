import React from "react";
import { motion } from "framer-motion";

const AnimatedBar = ({x}) => {
  return (
    <motion.div
      animate={{ x, scale: 1.25 }}
      className="bg-[#e00707] bottom-0 h-[4px] left-0 rounded mt-[3px] transition-all"
    ></motion.div>
  );
};

export default AnimatedBar;
