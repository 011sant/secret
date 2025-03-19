"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animações para elementos que aparecem
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ProdutoPage() {
  const [activeDemo, setActiveDemo] = useState("overview");
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  
  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-roxo-escuro py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Chatbot Specter IA
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Um assistente virtual inteligente treinado especificamente para o seu negócio
            </p>
            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="btn-primary">
                Iniciar Teste Gratuito
              </button>
              <button className="bg-transparent border-2 border-roxo-medio text-roxo-medio dark:text-white px-6 py-3 rounded-lg hover:bg-roxo-medio hover:text-white transition-all">
                Ver Demonstração
              </button>
            </motion.div>
          </motion.div>
          
          {/* Vídeo de demonstração */}
          <motion.div 
            className="card mb-16 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
              <div className="bg-gradient-secundario w-full h-96 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all group">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-roxo-medio border-b-[10px] border-b-transparent ml-1 group-hover:scale-110 transition-all"></div>
                  </div>
                </div>
                <p className="text-white font-medium text-lg absolute bottom-6 left-6 drop-shadow-md">
                  Veja como o Chatbot Specter IA pode transformar seu atendimento
                </p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                <button 
                  className={`px-4 py-2 rounded-md transition-all ${activeDemo === "overview" 
                    ? "bg-roxo-escuro text-white" 
                    : "text-roxo-escuro dark:text-white hover:bg-gray-100 dark:hover:bg-roxo-escuro/30"}`}
                  onClick={() => setActiveDemo("overview")}
                >
                  Overview
                </button>
                <button 
                  className={`px-4 py-2 rounded-md transition-all ${activeDemo === "recursos" 
                    ? "bg-roxo-escuro text-white" 
                    : "text-roxo-escuro dark:text-white hover:bg-gray-100 dark:hover:bg-roxo-escuro/30"}`}
                  onClick={() => setActiveDemo("recursos")}
                >
                  Recursos
                </button>
                <button 
                  className={`px-4 py-2 rounded-md transition-all ${activeDemo === "integracoes" 
                    ? "bg-roxo-escuro text-white" 
                    : "text-roxo-escuro dark:text-white hover:bg-gray-100 dark:hover:bg-roxo-escuro/30"}`}
                  onClick={() => setActiveDemo("integracoes")}
                >
                  Integrações
                </button>
                <button 
                  className={`px-4 py-2 rounded-md transition-all ${activeDemo === "preco" 
                    ? "bg-roxo-escuro text-white" 
                    : "text-roxo-escuro dark:text-white hover:bg-gray-100 dark:hover:bg-roxo-escuro/30"}`}
                  onClick={() => setActiveDemo("preco")}
                >
                  Preço
                </button>
              </div>
              
              <div className="space-y-4">
                {activeDemo === "overview" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      O Chatbot Specter IA é uma solução completa de atendimento automatizado que utiliza tecnologia
                      de ponta em inteligência artificial para oferecer respostas precisas, personalização avançada
                      e uma experiência de usuário excepcional.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Nossa IA é treinada especificamente com dados do seu segmento e pode ser integrada facilmente a
                      diversos canais de comunicação, como seu site, WhatsApp, Facebook e muito mais.
                    </p>
                  </motion.div>
                )}
                
                {activeDemo === "recursos" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {[
                      { icon: "🔍", title: "IA Avançada", description: "Capaz de entender contexto e linguagem natural" },
                      { icon: "🌐", title: "Multilíngue", description: "Suporte para diversos idiomas e regionalismos" },
                      { icon: "📊", title: "Analytics", description: "Relatórios detalhados sobre interações e eficácia" },
                      { icon: "🔄", title: "Auto-aprendizado", description: "Melhora continuamente com o uso" }
                    ].map((recurso, i) => (
                      <div key={i} className="flex p-4 rounded-lg bg-gray-50 dark:bg-roxo-escuro/30">
                        <div className="text-2xl mr-4">{recurso.icon}</div>
                        <div>
                          <h4 className="font-semibold text-roxo-medio">{recurso.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{recurso.description}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
                
                {activeDemo === "integracoes" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      {["WhatsApp", "Facebook", "Instagram", "Telegram", "Slack", "E-commerce", "CRM", "API"].map((plataforma, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-roxo-escuro/30 p-4 rounded-lg hover:shadow-md transition-all">
                          <p className="font-medium text-roxo-escuro dark:text-white">{plataforma}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {activeDemo === "preco" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {[
                      { plano: "Básico", preco: "R$ 299", destaque: false },
                      { plano: "Profissional", preco: "R$ 599", destaque: true },
                      { plano: "Empresarial", preco: "R$ 999", destaque: false }
                    ].map((plano, i) => (
                      <div key={i} className={`p-6 rounded-xl border-2 ${plano.destaque ? 'border-roxo-medio bg-roxo-medio/5' : 'border-gray-200 dark:border-gray-700'} text-center`}>
                        <h4 className="text-lg font-bold text-roxo-escuro dark:text-white">{plano.plano}</h4>
                        <p className="text-3xl font-bold my-4 text-roxo-medio">{plano.preco}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/mês</span></p>
                        <button className={`w-full py-2 rounded-lg ${plano.destaque ? 'btn-primary' : 'border border-roxo-medio text-roxo-medio hover:bg-roxo-medio hover:text-white'}`}>
                          Escolher Plano
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Casos de uso */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-roxo-escuro dark:text-white mb-12 text-center">
              Casos de Uso
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Atendimento ao Cliente 24/7',
                  description: 'Automatize respostas para as perguntas mais frequentes e ofereça suporte em tempo real a qualquer hora do dia.',
                  metric: '73% de redução no tempo de resposta',
                  icon: '⏱️'
                },
                {
                  title: 'Qualificação de Leads',
                  description: 'Capture informações importantes, qualifique visitantes e direcione leads qualificados para sua equipe de vendas.',
                  metric: '32% de aumento na taxa de conversão',
                  icon: '🎯'
                },
                {
                  title: 'Automação de Processos Internos',
                  description: 'Simplifique processos internos, como solicitações de RH, suporte técnico e agendamentos.',
                  metric: '16 horas economizadas por semana',
                  icon: '⚙️'
                },
                {
                  title: 'Recuperação de Carrinhos Abandonados',
                  description: 'Retome contato com clientes que abandonaram o carrinho e aumente suas taxas de finalização de compra.',
                  metric: '28% de carrinhos recuperados',
                  icon: '🛒'
                },
              ].map((caso, i) => (
                <motion.div 
                  key={i}
                  className="card"
                  variants={itemFade}
                >
                  <div className="p-6">
                    <div className="text-3xl mb-4">{caso.icon}</div>
                    <h3 className="text-xl font-bold text-roxo-medio mb-3">
                      {caso.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {caso.description}
                    </p>
                    <div className="bg-roxo-medio bg-opacity-10 rounded-lg p-4 text-center">
                      <span className="font-bold text-roxo-medio">{caso.metric}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Demo interativa */}
          <motion.div 
            className="card mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-roxo-escuro dark:text-white mb-4 text-center">
                Experimente Agora
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Teste nossa IA com alguns exemplos pré-configurados ou faça suas próprias perguntas.
              </p>
              
              <div className="demo-container p-6">
                <div className="flex flex-col space-y-6 mb-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-secundario flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-md">
                      <span className="font-medium">U</span>
                    </div>
                    <div className="chat-bubble user-bubble animated-fadeIn">
                      <p className="text-gray-700 dark:text-gray-300">
                        Quais são os horários de funcionamento da loja?
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-principal flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-md">
                      <span className="text-lg">🤖</span>
                    </div>
                    <div className="chat-bubble bot-bubble animated-fadeIn">
                      <p className="text-gray-700 dark:text-gray-300">
                        Nossa loja física funciona de segunda a sexta, das 9h às 18h, e aos sábados das 9h às 13h.
                        Nossa loja virtual está disponível 24 horas por dia, 7 dias por semana.
                        Posso ajudar com mais alguma informação?
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full p-4 pr-24 border border-gray-300 dark:border-roxo-medio rounded-lg focus:outline-none focus:ring-2 focus:ring-roxo-medio dark:bg-roxo-escuro/30 dark:text-white"
                    placeholder="Digite sua pergunta..."
                  />
                  <button className="absolute right-2 top-2 bg-gradient-principal text-white px-5 py-2 rounded-md hover:shadow-lg transition-all">
                    Enviar
                  </button>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Como faço para devolver um produto?", "Quais formas de pagamento?", "Qual o prazo de entrega?"].map((sugestao, i) => (
                    <button key={i} className="bg-gray-100 dark:bg-roxo-escuro/20 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-roxo-medio/10 transition-all">
                      {sugestao}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* FAQ */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-roxo-escuro dark:text-white mb-12 text-center">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  pergunta: 'Quanto tempo leva para implementar o chatbot?',
                  resposta: 'A implementação básica pode ser feita em menos de 1 dia. Para treinamentos mais personalizados, o processo completo leva em média 3 a 5 dias.'
                },
                {
                  pergunta: 'A IA consegue entender português brasileiro com gírias e regionalismos?',
                  resposta: 'Sim! Nossa IA é treinada especificamente para entender variações linguísticas do português brasileiro, incluindo expressões regionais e gírias comuns.'
                },
                {
                  pergunta: 'Como é feita a integração com meu site atual?',
                  resposta: 'A integração é simples e pode ser feita de duas maneiras: via código JavaScript que você adiciona ao seu site ou através de um iframe. Também oferecemos plugins para WordPress, Shopify e outras plataformas populares.'
                },
                {
                  pergunta: 'Posso personalizar a aparência do chatbot?',
                  resposta: 'Absolutamente! Você pode personalizar cores, fontes, ícones e até mesmo o nome e "personalidade" do seu assistente virtual para que ele combine perfeitamente com sua marca.'
                },
              ].map((item, i) => (
                <div key={i} className="card cursor-pointer hover:border-roxo-medio/50 transition-all duration-300" onClick={() => toggleQuestion(i)}>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-lg text-roxo-escuro dark:text-white">{item.pergunta}</h3>
                      <span className={`transition-transform duration-300 ${activeQuestion === i ? 'rotate-180' : ''}`}>
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-roxo-medio">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${activeQuestion === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Depoimentos */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-roxo-escuro dark:text-white mb-12 text-center">
              O Que Nossos Clientes Dizem
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  nome: 'Marcos Silva',
                  empresa: 'TechShop',
                  depoimento: 'Implementamos o chatbot da Specter e reduzimos nosso tempo de resposta em 85%. A satisfação dos clientes subiu significativamente.',
                  avatar: '👨‍💼',
                  rating: 5
                },
                {
                  nome: 'Ana Ferreira',
                  empresa: 'Moda Express',
                  depoimento: 'O chatbot nos ajudou a recuperar 32% dos carrinhos abandonados. O ROI foi muito além do esperado logo no primeiro mês.',
                  avatar: '👩‍💼',
                  rating: 5
                },
              ].map((depoimento, i) => (
                <motion.div key={i} className="card p-6" variants={itemFade}>
                  <div className="relative">
                    <div className="absolute top-0 right-0 flex">
                      {Array.from({ length: depoimento.rating }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-secundario bg-opacity-20 flex items-center justify-center text-3xl mr-4 shadow-inner">
                        {depoimento.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold text-roxo-escuro dark:text-white text-lg">{depoimento.nome}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{depoimento.empresa}</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <svg className="absolute -top-2 -left-2 w-8 h-8 text-roxo-medio opacity-30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.984 2.016h-3.984v3.984h3.984v-3.984zM12.984 2.016v12h8.016v-12h-8.016zM12.984 14.016v8.016h8.016v-8.016h-8.016zM9.984 6v8.016h-8.016v-8.016h8.016zM9.984 14.016v8.016h-8.016v-8.016h8.016z"></path>
                      </svg>
                      <p className="text-gray-700 dark:text-gray-300 pl-5 leading-relaxed">
                        &ldquo;{depoimento.depoimento}&rdquo;
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            className="card bg-gradient-principal text-white p-10 text-center rounded-xl overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                Pronto para revolucionar seu atendimento?
              </h2>
              <p className="text-lilas-claro mb-10 max-w-2xl mx-auto text-lg">
                Comece a usar o Chatbot Specter IA hoje mesmo e transforme a maneira como você se conecta com seus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-roxo-escuro font-bold px-8 py-4 rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Iniciar Avaliação Gratuita
                </button>
                <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:-translate-y-1">
                  Agendar Demonstração
                </button>
              </div>
            </div>
            
            {/* Partículas decorativas */}
            <div className="absolute top-0 left-0 w-full h-full">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white opacity-10"
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 10}s linear infinite`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 