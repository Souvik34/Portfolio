/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TechStackBadge({ name, Icon, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
    >
      <motion.div
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-center cursor-default shadow-sm"
        style={{
          borderRadius: hovered ? "1.5rem" : "50%",
          backgroundColor: color,
          height: "34px",
          padding: "0 10px",
          gap: hovered ? "6px" : "0px",
          minWidth: hovered ? "auto" : "34px",
        }}
      >
        {Icon && <Icon size={16} className="text-white" />}
        <motion.span
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            width: hovered ? "auto" : 0,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden whitespace-nowrap text-xs text-white font-medium"
        >
          {name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
