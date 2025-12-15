// src/components/Contact.tsx (BLOCO RETURN COMPLETO E CORRIGIDO)

import React from 'react';
import Image from 'next/image'; 

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl font-extrabold mb-4 text-[#ff6b6b]">
          Vamos Construir Algo Incrível
        </h2>
        
        <p className="text-gray-400 text-lg mb-12">
          Se você tem um projeto desafiador ou apenas quer dizer olá, envie uma mensagem!
        </p>

        {/* Formulário de Contato */}
        <form className="space-y-6 text-left bg-[#1a1a1a] p-8 rounded-lg shadow-2xl border border-gray-700">
          
          {/* Campo Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Seu Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-3 bg-[#0a0a0a] border border-gray-600 rounded-md text-white focus:ring-[#4ecdc4] focus:border-[#4ecdc4] shadow-sm sm:text-sm transition duration-150"
            />
          </div>

          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Seu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-3 bg-[#0a0a0a] border border-gray-600 rounded-md text-white focus:ring-[#4ecdc4] focus:border-[#4ecdc4] shadow-sm sm:text-sm transition duration-150"
            />
          </div>
          
          {/* Campo Mensagem */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Sua Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full px-4 py-3 bg-[#0a0a0a] border border-gray-600 rounded-md text-white focus:ring-[#4ecdc4] focus:border-[#4ecdc4] shadow-sm sm:text-sm transition duration-150"
            ></textarea>
          </div>
          
          {/* Botão de Envio */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#cc4a4a] hover:bg-[#b03d3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#cc4a4a] transition duration-200"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className="flex justify-center space-x-6 mt-4">
            {/* Links sociais rápidos */}
            <a href="mailto:kleber@exemplo.com" className="text-[#4ecdc4] hover:text-[#8ed2cc] transition duration-200 font-medium 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4ecdc4] rounded-md" // <<< CORREÇÃO A-2: Focus State
            >
              Email
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#4ecdc4] hover:text-[#8ed2cc] transition duration-200 font-medium 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4ecdc4] rounded-md" // <<< CORREÇÃO A-2: Focus State
            >
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#4ecdc4] hover:text-[#8ed2cc] transition duration-200 font-medium 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4ecdc4] rounded-md" // <<< CORREÇÃO A-2: Focus State
            >
              GitHub
            </a>
          </div>
          
          {/* Logo centralizada no fim da seção Contact */}
          <div className="flex justify-center mt-10">
              <div className="text-transparent transition-transform duration-300 hover:scale-110">
                  <Image
                      src="/logo_001-Ciano10-azul-meia-noite_.svg"
                      alt="Logo Kleber Lessa"
                      width={40}
                      height={40}
                  />
              </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Contact;
