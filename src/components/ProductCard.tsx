import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export function ProductCard({ title, description, icon, link }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="p-6">
        <div className="w-16 h-16 bg-gradient-secundario rounded-full flex items-center justify-center mb-6 mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-roxo-escuro mb-3 text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
      <div className="px-6 pb-6 text-center">
        <Link href={link} className="text-roxo-medio hover:text-roxo-escuro font-medium inline-flex items-center">
          Saiba mais
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 