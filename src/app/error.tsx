"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-roxo-escuro mb-4">Algo deu errado!</h1>
        <p className="text-gray-600 mb-8">Não se preocupe, estamos cientes e trabalhando nisso.</p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-roxo-medio text-white px-6 py-3 rounded-md hover:bg-roxo-escuro"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="inline-block border border-roxo-medio text-roxo-medio px-6 py-3 rounded-md hover:bg-roxo-medio hover:text-white"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
