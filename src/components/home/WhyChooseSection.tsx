"use client";

import React from 'react';
import { motion } from 'framer-motion';

const advantages = [
  {
    title: 'Integração Universal',
    description: 'Conecte-se com mais de 200 plataformas e serviços sem codificação complexa.',
    icon: '/icons/integration.svg'
  },
  {
    title: 'Customização Total',
    description: 'Cada solução é adaptável ao seu processo, não o contrário.',
    icon: '/icons/customize.svg'
  },
  {
    title: 'Suporte Humanizado',
    description: 'Nosso time de especialistas está sempre disponível em português.',
    icon: '/icons/support.svg'
  },
  {
    title: 'Escalabilidade Garantida',
    description: 'Cresça sem preocupações, sem limites técnicos ou taxas ocultas.',
    icon: '/icons/scale.svg'
  }
];

// Animação para entrada sequencial
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-lilas-claro bg-opacity-5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-roxo-escuro dark:text-white mb-6">
            Por Que Escolher Specter
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma foi desenvolvida para eliminar complexidades técnicas, permitindo que você se concentre no crescimento do seu negócio.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.map((item, index) => (
            <motion.div 
              key={index}
              className="card p-8 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="mb-6 w-24 h-24 bg-roxo-medio bg-opacity-20 rounded-full flex items-center justify-center">
                {/* Placeholder para ícones SVG que seriam criados separadamente */}
                <div className="text-roxo-medio text-4xl font-bold">
                  {item.title.charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-roxo-medio mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection; 