"use client";

import React from 'react';
import { motion } from 'framer-motion';

const featureData = [
  {
    icon: '🤖',
    title: 'IA Personalizada',
    description: 'IA treinada especificamente para seu negócio, disponível 24/7.',
    details: 'Nossa tecnologia de IA se adapta ao seu setor, aprendendo continuamente com as interações para oferecer respostas cada vez mais precisas. Integração com sistemas existentes em minutos.'
  },
  {
    icon: '📊',
    title: 'Analytics Intuitivos',
    description: 'Analytics intuitivos com insights acionáveis em tempo real.',
    details: 'Transforme dados em decisões com painéis personalizáveis, alertas inteligentes e previsões baseadas em ML. Visualize tendências e identifique oportunidades antes da concorrência.'
  },
  {
    icon: '🔒',
    title: 'Segurança Empresarial',
    description: 'Segurança de nível empresarial sem custos empresariais.',
    details: 'Criptografia de ponta a ponta, autenticação multi-fator, auditorias de segurança automatizadas e conformidade com LGPD/GDPR incluídas em todos os planos.'
  }
];

const FeatureCards = () => {
  return (
    <section className="py-16 bg-white dark:bg-roxo-escuro">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="card group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col h-full">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-roxo-medio">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{feature.description}</p>
                
                {/* Conteúdo expandido em hover */}
                <div className="absolute inset-0 bg-white dark:bg-roxo-escuro p-6 flex flex-col justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-roxo-medio">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{feature.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards; 