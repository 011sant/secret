import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-terciario">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-6">
          Pronto para revolucionar seu atendimento?
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Junte-se a milhares de empresas que já transformaram sua maneira de atender clientes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-white text-roxo-escuro px-8 py-4 rounded-md font-semibold hover:bg-gray-100"
          >
            Criar conta gratuitamente
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10"
          >
            Falar com consultor
          </Link>
        </div>
      </div>
    </section>
  );
}
