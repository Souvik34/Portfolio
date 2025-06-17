/* eslint-disable no-unused-vars */
"use client";

import { cn } from "../../lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({ className, children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [25, -25]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-25, 25]), springConfig);
  const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]), springConfig);
  const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]), springConfig);

  useEffect(() => {
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = cardRef.current?.getBoundingClientRect() ?? { width: 0, height: 0, left: 0, top: 0 };
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => (document.body.style.cursor = "grabbing")}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";
        controls.start({ rotateX: 0, rotateY: 0, transition: { type: "spring", ...springConfig } });

        const vx = velocityX.get();
        const vy = velocityY.get();
        const magnitude = Math.sqrt(vx * vx + vy * vy);
        const bounce = Math.min(0.8, magnitude / 1000);

        animate(info.point.x, info.point.x + vx * 0.3, {
          duration: 0.8,
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + vy * 0.3, {
          duration: 0.8,
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, opacity, willChange: "transform" }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      className={cn("relative min-h-48 w-80 rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900", className)}
    >
      {children}
      <motion.div style={{ opacity: glareOpacity }} className="pointer-events-none absolute inset-0 bg-white select-none" />
    </motion.div>
  );
};

export const DraggableCardContainer = ({ className, children }) => {
  return <div className={cn("relative [perspective:3000px]", className)}>{children}</div>;
};

export function DraggableCard() {
  const items = [
    {
      title: "Tyler Durden",
      image: "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image: "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="min-h-screen w-full items-center justify-center overflow-clip">
    
      {items.map((item) => (
       <DraggableCardBody key={item.title} className={item.className}>
  <img
    src={item.image}
    alt={item.title}
    className="pointer-events-none relative z-10 h-48 w-[22rem] object-cover rounded-md"
  />
  <h3 className="mt-3 text-center text-xl font-semibold text-neutral-700 dark:text-neutral-300">
    {item.title}
  </h3>
</DraggableCardBody>

      ))}
    </DraggableCardContainer>
  );
}
