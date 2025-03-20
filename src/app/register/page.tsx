"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não conferem');
      return;
    }
    console.log('Register attempt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-card">
        <div>
          <h2 className="text-center text-3xl font-bold text-roxo-escuro">
            Crie sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-roxo-medio hover:text-roxo-escuro">
              Faça login
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input
                id="name"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-roxo-medio focus:border-roxo-medio focus:z-10 sm:text-sm"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-roxo-medio focus:border-roxo-medio focus:z-10 sm:text-sm"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                id="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-roxo-medio focus:border-roxo-medio focus:z-10 sm:text-sm"
                placeholder="Senha"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirmar Senha</label>
              <input
                id="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-roxo-medio focus:border-roxo-medio focus:z-10 sm:text-sm"
                placeholder="Confirmar senha"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-roxo-medio focus:ring-roxo-medio border-gray-300 rounded"
              checked={formData.terms}
              onChange={(e) => setFormData({...formData, terms: e.target.checked})}
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Eu concordo com os{' '}
              <Link href="/terms" className="text-roxo-medio hover:text-roxo-escuro">
                termos de uso
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo-medio hover:bg-roxo-escuro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo-medio"
          >
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
}
