"use client";

import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Comunidade',
    price: 'Grátis',
    description: 'Para indivíduos e pequenos projetos que estão começando',
    features: [
      '150 interações/mês',
      'Acesso a 2 apps essenciais',
      'Suporte via comunidade',
      'Limite de 1 usuário',
    ],
    badge: 'Sempre Grátis',
    popular: false,
    cta: 'Começar Grátis',
  },
  {
    name: 'Profissional',
    price: 'R$ 29',
    period: '/mês',
    description: 'Para profissionais que precisam de mais ferramentas e customização',
    features: [
      'Apps ilimitados',
      'Relatórios avançados',
      'White label básico',
      'Suporte prioritário por email',
      'Integrações com sistemas externos',
    ],
    badge: 'Mais Popular',
    popular: true,
    cta: 'Assinar Agora',
  },
  {
    name: 'Empresarial',
    price: 'R$ 99',
    period: '/mês',
    description: 'Para equipes e empresas com necessidades avançadas',
    features: [
      'Multiusuário (até 10)',
      'Prioridade no suporte',
      'Treinamento personalizado',
      'API completa',
      'Customização avançada',
      'White label completo',
    ],
    badge: 'Mais Recursos',
    popular: false,
    cta: 'Fale com Vendas',
  },
];

const PlanCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => {
  return (
    <motion.div 
      className={`card relative overflow-hidden border ${
        plan.popular 
          ? 'border-roxo-medio shadow-lg' 
          : 'border-gray-200 dark:border-roxo-escuro'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {plan.badge && (
        <div 
          className={`absolute top-0 right-0 text-white text-xs font-bold px-4 py-1 ${
            plan.popular ? 'bg-roxo-medio' : 'bg-gray-500'
          }`}
        >
          {plan.badge}
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-roxo-escuro dark:text-white mb-2">
          {plan.name}
        </h3>
        
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold text-roxo-medio">{plan.price}</span>
          {plan.period && (
            <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {plan.description}
        </p>
        
        <ul className="mb-8 space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <svg 
                className="w-5 h-5 text-sucesso mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-4 rounded-md font-bold transition-all duration-300 ${
            plan.popular 
              ? 'bg-gradient-principal text-white' 
              : 'border border-roxo-medio text-roxo-medio hover:bg-roxo-medio hover:text-white'
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
};

export default function Assinaturas() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-roxo-escuro">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-roxo-escuro dark:text-white mb-4">
            Escolha o Plano Ideal para Você
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Todos os planos incluem acesso ao nosso marketplace de ferramentas, com opções para todos os tamanhos de negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} index={index} />
          ))}
        </div>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-roxo-escuro dark:text-white mb-8 text-center">
            Comparativo Visual de Recursos
          </h2>
          
          <div className="relative overflow-x-auto rounded-lg shadow-md">
            <div className="bg-white dark:bg-roxo-escuro p-4 overflow-hidden">
              <div className="flex">
                <div className="w-1/4 p-4 font-bold text-roxo-escuro dark:text-white">
                  Recursos
                </div>
                {plans.map((plan, i) => (
                  <div 
                    key={i} 
                    className={`w-1/4 p-4 text-center font-bold ${
                      plan.popular ? 'text-roxo-medio' : 'text-roxo-escuro dark:text-white'
                    }`}
                  >
                    {plan.name}
                  </div>
                ))}
              </div>
              
              {/* Características para comparação */}
              {['Apps disponíveis', 'Usuários', 'Suporte', 'White Label', 'Relatórios'].map((feature, i) => (
                <div key={i} className="flex border-t border-gray-200 dark:border-roxo-escuro">
                  <div className="w-1/4 p-4 font-medium text-gray-700 dark:text-gray-300">
                    {feature}
                  </div>
                  
                  {/* Comunidade */}
                  <div className="w-1/4 p-4 text-center text-gray-700 dark:text-gray-300">
                    {i === 0 && '2 apps'}
                    {i === 1 && '1 usuário'}
                    {i === 2 && 'Comunidade'}
                    {i === 3 && 'Não disponível'}
                    {i === 4 && 'Básicos'}
                  </div>
                  
                  {/* Profissional */}
                  <div className="w-1/4 p-4 text-center text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-roxo-escuro bg-opacity-50">
                    {i === 0 && 'Ilimitados'}
                    {i === 1 && '1 usuário'}
                    {i === 2 && 'Prioritário (email)'}
                    {i === 3 && 'Básico'}
                    {i === 4 && 'Avançados'}
                  </div>
                  
                  {/* Empresarial */}
                  <div className="w-1/4 p-4 text-center text-gray-700 dark:text-gray-300">
                    {i === 0 && 'Ilimitados'}
                    {i === 1 && 'Até 10 usuários'}
                    {i === 2 && 'Dedicado'}
                    {i === 3 && 'Completo'}
                    {i === 4 && 'Personalizados'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 