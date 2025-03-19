"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-roxo-escuro text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Footer Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Analytics</Link></li>
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">ChatBots</Link></li>
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Gestão Financeira</Link></li>
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Automação</Link></li>
            </ul>
          </div>

          {/* Footer Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Documentação</Link></li>
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Comunidade</Link></li>
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Suporte</Link></li>
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Quem Somos</Link></li>
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Carreiras</Link></li>
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Parceiros</Link></li>
              <li><Link href="#" className="hover:text-lilas-claro transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Footer Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Fique Conectado</h3>
            <p className="mb-4">Receba novidades e atualizações sobre nossos produtos.</p>
            <div className="flex">
              <input type="email" placeholder="Seu email" className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-lilas-claro" />
              <button className="bg-roxo-medio hover:bg-lilas-claro px-4 py-2 rounded-r-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">© 2025 Specter Software. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 