"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-roxo-escuro px-4">
      <div className="text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-roxo-medio">404</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-roxo-escuro dark:text-white mt-6 mb-4">
            Página não encontrada
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Ops! Parece que você tentou acessar uma página que não existe ou foi movida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-principal text-white font-bold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-shadow"
            >
              Voltar para o início
            </Link>
            
            <Link
              href="/marketplace"
              className="border border-roxo-medio text-roxo-medio px-6 py-3 rounded-md hover:bg-roxo-medio hover:text-white transition-all"
            >
              Explorar soluções
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12"
        >
          <div className="relative">
            <div className="h-32 w-32 mx-auto bg-lilas-claro rounded-full flex items-center justify-center">
              <div className="h-24 w-24 bg-roxo-medio rounded-full flex items-center justify-center text-white text-5xl">
                ?
              </div>
            </div>
            
            {/* Elementos decorativos */}
            {[45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <div 
                key={i}
                className="absolute w-3 h-3 rounded-full bg-roxo-medio"
                style={{
                  top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * 70}px)`,
                  left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * 70}px)`,
                  opacity: i % 2 === 0 ? 0.7 : 0.4,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 