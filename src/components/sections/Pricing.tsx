"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Básico",
      price: isAnnual ? "R$ 97" : "R$ 127",
      period: isAnnual ? "/ano" : "/mês",
      features: [
        "1 Chatbot",
        "Analytics básico",
        "Suporte por email",
        "1.000 mensagens/mês"
      ]
    },
    {
      name: "Profissional",
      price: isAnnual ? "R$ 197" : "R$ 247",
      period: isAnnual ? "/ano" : "/mês",
      features: [
        "3 Chatbots",
        "Analytics avançado",
        "Suporte prioritário",
        "10.000 mensagens/mês"
      ]
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      period: "",
      features: [
        "Chatbots ilimitados",
        "Analytics personalizado",
        "Suporte 24/7",
        "Mensagens ilimitadas"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-roxo-escuro mb-4">
            Planos que crescem com você
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={!isAnnual ? 'text-roxo-medio' : 'text-gray-500'}>Mensal</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-roxo-medio rounded-full"
            >
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={isAnnual ? 'text-roxo-medio' : 'text-gray-500'}>Anual</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 hover:shadow-card transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-sucesso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-md bg-roxo-medio text-white hover:bg-roxo-escuro transition-colors">
                Começar agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
