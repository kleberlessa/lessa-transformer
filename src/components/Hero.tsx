// src/components/Hero.tsx

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section 
        id="home"
        className="relative flex items-center justify-center h-screen overflow-hidden bg-[#0a0a0a] text-white"
    >
        {/* Placeholder para a animação Parallax (Div Escura de Fundo) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-50 z-10"></div>
      
        {/* Conteúdo Principal (Centralizado) */}
        <div className="relative z-20 max-w-4xl mx-auto text-center p-6">
            
            {/* 1. LOGO CENTRALIZADA NO TOPO DO HERO */}
            <div className="flex justify-center mb-6">
                <div className="text-transparent transition-transform duration-300 hover:scale-110">
                    <Image
                      src="/logo_001-Ciano10-azul-meia-noite_.svg"
                      alt="Logo Kleber Lessa"
                      width={120} // <<< CORREÇÃO O-1: Aumentado para 120px
                      height={120} // <<< CORREÇÃO O-1: Aumentado para 120px
                      sizes="(max-width: 768px) 100px, 120px" // <<< CORREÇÃO P-1: Otimização para Next/Image
                    />
                </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
                <span className="text-[#4ecdc4]">Kleber Lessa:</span> <br className="hidden sm:inline" />
                Desenvolvimento Híbrido
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
                Performance, Segurança e Experiência do Usuário em escala Full-Stack.
            </p>
            
            <div className="flex justify-center space-x-4">
                <a 
                    href="#portfolio" 
                    className="px-8 py-3 text-lg font-semibold rounded-full bg-[#cc4a4a] text-white hover:bg-[#b03d3d] transition duration-300 shadow-lg"
                >
                    Ver Portfólio
                </a>
                <a 
                    href="#contact" 
                    className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-[#4ecdc4] text-[#4ecdc4] hover:bg-[#4ecdc4] hover:text-[#0a0a0a] transition duration-300 shadow-lg"
                >
                    Fale Comigo
                </a>
            </div>
        </div>

        {/* 🛑 A IMAGEM DE PERFIL FOI REMOVIDA DESTE BLOCO PARA SIMPLIFICAR E FOCAR NA LOGO */}
        
    </section>
  );
};

export default Hero;
