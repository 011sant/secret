import React from 'react';

export default function Marketplace() {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-roxo-escuro">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-roxo-escuro dark:text-white mb-8 text-center">
          Marketplace de Ferramentas
        </h1>
        
        <div className="mb-12 bg-gray-100 dark:bg-roxo-escuro rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-roxo-medio">Filtros Inteligentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Tipo de Negócio
              </label>
              <select className="w-full p-2 border border-gray-300 dark:border-roxo-medio rounded-md">
                <option>Todos</option>
                <option>E-commerce</option>
                <option>Serviços</option>
                <option>Educação</option>
                <option>Finanças</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Função
              </label>
              <select className="w-full p-2 border border-gray-300 dark:border-roxo-medio rounded-md">
                <option>Todas</option>
                <option>Atendimento</option>
                <option>Analytics</option>
                <option>Finanças</option>
                <option>Marketing</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Complexidade
              </label>
              <select className="w-full p-2 border border-gray-300 dark:border-roxo-medio rounded-md">
                <option>Todas</option>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="compatibleWithPlan" 
              className="w-4 h-4 text-roxo-medio focus:ring-roxo-medio"
            />
            <label 
              htmlFor="compatibleWithPlan" 
              className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Compatível com meu plano
            </label>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="bg-roxo-medio text-white text-xs px-3 py-1 rounded-full">Atendimento</span>
            <span className="bg-sucesso text-white text-xs px-3 py-1 rounded-full">Iniciante</span>
            <span className="bg-erro text-white text-xs px-3 py-1 rounded-full">Popular</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder para os cards de apps - seriam implementados como componentes */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i} 
              className="card relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Badge de Popular ou Novo */}
              {i % 3 === 0 && (
                <div className="absolute top-4 right-4 bg-erro text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              {i % 3 === 1 && (
                <div className="absolute top-4 right-4 bg-roxo-medio text-white text-xs px-3 py-1 rounded-full">
                  Novo
                </div>
              )}
              
              {/* Área para screenshot/demo */}
              <div className="h-48 bg-gray-200 dark:bg-roxo-escuro rounded-t-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Screenshot do App</span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-roxo-escuro dark:text-white">
                    App {i + 1}
                  </h3>
                  
                  {/* Círculo de satisfação do cliente */}
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12">
                      <circle 
                        cx="24" 
                        cy="24" 
                        r="20" 
                        fill="none" 
                        stroke="#e6e6e6" 
                        strokeWidth="4"
                      />
                      <circle 
                        cx="24" 
                        cy="24" 
                        r="20" 
                        fill="none" 
                        stroke={i % 2 === 0 ? "#53C2B3" : "#6A3DE8"} 
                        strokeWidth="4"
                        strokeDasharray={`${(i + 3) * 10} 126`}
                        strokeLinecap="round"
                        transform="rotate(-90 24 24)"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                      {(i + 3) * 10}%
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Descrição breve do App {i + 1} e suas principais funcionalidades.
                </p>
                
                <button className="btn-primary w-full">
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-roxo-escuro dark:text-white mb-6">
            Recomendações Personalizadas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card">
                <h3 className="text-lg font-semibold text-roxo-medio mb-2">
                  Complemento para seus apps
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Este app integra perfeitamente com sua seleção atual.
                </p>
                <button className="text-roxo-medio hover:underline">
                  Saiba mais →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 