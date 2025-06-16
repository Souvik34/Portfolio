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
        className={`flex items-center justify-center px-2 py-1 cursor-default shadow-sm ${
          hovered ? "mr-6" : "mr-2"
        }`}
        style={{
          borderRadius: hovered ? "1.5rem" : "50%",
          backgroundColor: color,
          height: "34px",
          minWidth: hovered ? "auto" : "34px",
          paddingRight: hovered ? "10px" : "0px",
          paddingLeft: "10px",
        }}
      >
        <Icon size={16} className="text-white" />

        <motion.span
          initial={false}
          animate={{
            width: hovered ? "auto" : 0,
            opacity: hovered ? 1 : 0,
            marginLeft: hovered ? 6 : 0,
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
