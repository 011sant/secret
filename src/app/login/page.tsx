"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login aqui
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-card">
        <div>
          <h2 className="text-center text-3xl font-bold text-roxo-escuro">
            Bem-vindo de volta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou{' '}
            <Link href="/register" className="text-roxo-medio hover:text-roxo-escuro">
              criar uma nova conta
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-roxo-medio focus:border-roxo-medio focus:z-10 sm:text-sm"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-roxo-medio focus:border-roxo-medio focus:z-10 sm:text-sm"
                placeholder="Senha"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-roxo-medio focus:ring-roxo-medio border-gray-300 rounded"
                checked={formData.remember}
                onChange={(e) => setFormData({...formData, remember: e.target.checked})}
              />
              <label className="ml-2 block text-sm text-gray-900">
                Lembrar-me
              </label>
            </div>

            <div className="text-sm">
              <Link href="/forgot-password" className="text-roxo-medio hover:text-roxo-escuro">
                Esqueceu sua senha?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo-medio hover:bg-roxo-escuro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo-medio"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
