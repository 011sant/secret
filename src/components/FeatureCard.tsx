import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:bg-gradient-principal hover:text-white group">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-roxo-medio group-hover:text-roxo-escuro">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-roxo-escuro mb-3 group-hover:text-white">{title}</h3>
      <p className="text-gray-600 group-hover:text-white/90">
        {description}
      </p>
    </div>
  );
} 