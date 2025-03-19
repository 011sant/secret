"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-roxo-escuro shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-roxo-medio">
                SPECTER
              </span>
            </Link>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-gray-700 dark:text-white hover:text-roxo-medio px-3 py-2 rounded-md text-sm font-medium">
                  Início
                </Link>
                <Link href="/marketplace" className="text-gray-700 dark:text-white hover:text-roxo-medio px-3 py-2 rounded-md text-sm font-medium">
                  Marketplace
                </Link>
                <Link href="/assinaturas" className="text-gray-700 dark:text-white hover:text-roxo-medio px-3 py-2 rounded-md text-sm font-medium">
                  Assinaturas
                </Link>
                <Link href="/produtos" className="text-gray-700 dark:text-white hover:text-roxo-medio px-3 py-2 rounded-md text-sm font-medium">
                  Produtos
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <button className="text-gray-700 dark:text-white hover:text-roxo-medio px-3 py-2 rounded-md text-sm font-medium">
                Entrar
              </button>
              <Link 
                href="/dashboard" 
                className="bg-gradient-principal text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg"
              >
                Dashboard
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-roxo-medio focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu móvel */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            className="text-gray-700 dark:text-white hover:text-roxo-medio block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            href="/marketplace" 
            className="text-gray-700 dark:text-white hover:text-roxo-medio block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Marketplace
          </Link>
          <Link 
            href="/assinaturas" 
            className="text-gray-700 dark:text-white hover:text-roxo-medio block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Assinaturas
          </Link>
          <Link 
            href="/produtos" 
            className="text-gray-700 dark:text-white hover:text-roxo-medio block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Produtos
          </Link>
          <div className="pt-4 flex flex-col space-y-2">
            <button 
              className="text-gray-700 dark:text-white hover:text-roxo-medio px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </button>
            <Link 
              href="/dashboard" 
              className="bg-gradient-principal text-white px-4 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 