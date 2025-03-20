"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-roxo-escuro text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Specter</h3>
            <p className="text-gray-300">
              Transformando atendimento com tecnologia inteligente
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><Link href="/features">Recursos</Link></li>
              <li><Link href="/pricing">Preços</Link></li>
              <li><Link href="/demo">Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link href="/about">Sobre</Link></li>
              <li><Link href="/contact">Contato</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacidade</Link></li>
              <li><Link href="/terms">Termos</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p>© 2025 Specter Software. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}