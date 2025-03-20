import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function Card({ children, ...props }: CardProps) {
  console.log("Card component rendered");
  return (
    <motion.div
      {...props}
      className="bg-white dark:bg-roxo-escuro/30 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
