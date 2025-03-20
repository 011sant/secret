"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-5">
          <Link href="/" className="flex items-center text-white text-2xl font-bold">
            <span className="bg-white text-primary w-9 h-9 rounded-lg flex items-center justify-center mr-3 font-bold text-xl">
              S
            </span>
            SPECTER
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/produtos">Produtos</NavLink>
            <NavLink href="/recursos">Recursos</NavLink>
            <NavLink href="/empresa">Empresa</NavLink>
            <NavLink href="/contato">Contato</NavLink>
            <Link 
              href="/login" 
              className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/produtos" onClick={() => setIsMenuOpen(false)}>
                Produtos
              </MobileNavLink>
              <MobileNavLink href="/recursos" onClick={() => setIsMenuOpen(false)}>
                Recursos
              </MobileNavLink>
              <MobileNavLink href="/empresa" onClick={() => setIsMenuOpen(false)}>
                Empresa
              </MobileNavLink>
              <MobileNavLink href="/contato" onClick={() => setIsMenuOpen(false)}>
                Contato
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-white font-medium relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white text-center py-2 hover:bg-white/10 rounded-md transition-colors"
    >
      {children}
    </Link>
  );
}