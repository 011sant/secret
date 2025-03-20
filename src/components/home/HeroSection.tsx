"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-principal py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tecnologia que transforma, integra e evolui seu negócio.
          </motion.h1>
          
          <motion.p 
            className="text-xl text-lilas-claro mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Todas as suas ferramentas em um hub central: chatbots inteligentes, 
            analytics robustos e gestão financeira simplificada.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button>Descubra Nossas Soluções</Button>
            <Button variant="secondary">Solicitar Demo</Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Elementos decorativos */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(50px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}