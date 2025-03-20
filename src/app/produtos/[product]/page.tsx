"use client";

import React from 'react';
import { useParams } from 'next/navigation';

interface ProductDetailsProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: string[];
}

const productDetails: { [key: string]: ProductDetailsProps } = {
  analytics: {
    title: "Analytics",
    description: "Dados transformados em insights estratégicos para impulsionar suas decisões de negócio com precisão.",
    icon: "📊",
    stats: ["98% precisão", "+45% ROI médio", "24/7 monitoramento"]
  },
  chatbot: {
    title: "ChatBot IA",
    description: "Atendimento inteligente e personalizado com processamento de linguagem natural avançado.",
    icon: "🤖",
    stats: ["95% satisfação", "24/7 online", "-60% tempo resposta"]
  },
  financeiro: {
    title: "Financeiro",
    description: "Gestão financeira completa com automação de processos e relatórios em tempo real.",
    icon: "💰",
    stats: ["+30% economia", "Automação 99%", "IA preventiva"]
  },
  automacao: {
    title: "Automação",
    description: "Automatize processos repetitivos e aumente a produtividade da sua equipe.",
    icon: "⚡",
    stats: ["Zero erros", "+75% velocidade", "ROI 300%"]
  }
};

export default function ProductPage() {
  const params = useParams();
  const product = params?.product as string;
  const productData = productDetails[product];

  if (!productData) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-roxo-escuro py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-roxo-escuro dark:text-white mb-8 text-center">
          {productData.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
          {productData.description}
        </p>
        {/* Adicione mais detalhes e componentes específicos do produto aqui */}
      </div>
    </div>
  );
}
