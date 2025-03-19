"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-roxo-escuro">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-24 h-24 mx-auto mb-8"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border-4 border-t-roxo-medio border-r-lilas-claro border-b-roxo-escuro border-l-roxo-medio opacity-80"></div>
            <div className="absolute inset-2 rounded-full border-4 border-l-roxo-medio border-t-roxo-escuro border-r-lilas-claro border-b-roxo-medio opacity-60"></div>
            <div className="absolute inset-4 rounded-full border-4 border-b-roxo-medio border-l-roxo-escuro border-t-lilas-claro border-r-roxo-medio opacity-40"></div>
            <div className="absolute inset-6 rounded-full border-4 border-r-roxo-medio border-b-roxo-escuro border-l-lilas-claro border-t-roxo-medio opacity-20"></div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-roxo-escuro dark:text-white mb-2"
        >
          Carregando
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-1 bg-gradient-principal rounded-full max-w-xs mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-600 dark:text-gray-300 mt-4"
        >
          Preparando uma experiência incrível para você...
        </motion.p>
      </div>
    </div>
  );
} 