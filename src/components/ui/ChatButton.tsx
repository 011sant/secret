"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: 'Olá! Como posso ajudar você hoje?', 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Adiciona a mensagem do usuário
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    
    // Simula resposta do bot após 1 segundo
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          text: 'Obrigado por sua mensagem! Um de nossos especialistas vai responder em breve. Enquanto isso, posso ajudar com alguma outra coisa?', 
          sender: 'bot' 
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white dark:bg-roxo-escuro rounded-lg shadow-xl mb-4 w-80 sm:w-96 overflow-hidden"
          >
            <div className="bg-gradient-principal p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-roxo-medio font-bold text-xl mr-3">
                    S
                  </div>
                  <div>
                    <h3 className="font-bold">Specter Assistente</h3>
                    <p className="text-xs opacity-80">Online | Resposta em minutos</p>
                  </div>
                </div>
                <button 
                  onClick={toggleChat}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-roxo-escuro">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-roxo-medio text-white rounded-br-none' 
                        : 'bg-white dark:bg-roxo-medio dark:bg-opacity-20 shadow-sm rounded-bl-none'
                    }`}
                  >
                    <p className={`text-sm ${message.sender === 'user' ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                      {message.text}
                    </p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white text-opacity-80' : 'text-gray-500 dark:text-gray-300'}`}>
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 dark:border-roxo-medio bg-white dark:bg-roxo-escuro">
              <div className="flex">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Digite sua mensagem..." 
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-roxo-medio rounded-l-md focus:outline-none focus:ring-2 focus:ring-roxo-medio dark:bg-roxo-escuro dark:text-white"
                />
                <button 
                  type="submit"
                  className="bg-gradient-principal text-white px-4 py-2 rounded-r-md hover:shadow-md transition-shadow"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={toggleChat}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${isOpen ? 'bg-roxo-escuro' : 'bg-gradient-principal'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-8 w-8 text-white ${isOpen ? 'transform rotate-45' : ''} transition-transform duration-300`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          )}
        </svg>
      </motion.button>
    </div>
  );
};

export default ChatButton; 