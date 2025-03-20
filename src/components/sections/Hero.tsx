import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-principal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforme seu negócio com IA
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Chatbots inteligentes e analytics avançado para revolucionar seu atendimento
            </p>
            <div className="flex gap-4">
              <Link 
                href="/register" 
                className="bg-white text-roxo-escuro px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Começar Agora
              </Link>
              <Link 
                href="/demo" 
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Ver Demo
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative h-[500px] perspective-1000"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-roxo-escuro/20 to-transparent rounded-lg"></div>
            <Image
              src="/images/hero/dashboard.png"
              alt="Dashboard Specter"
              fill
              className="object-cover rounded-lg shadow-2xl transform rotate-y-10 hover:rotate-y-0 transition-transform duration-500"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
