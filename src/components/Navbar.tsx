// src/components/Navbar.tsx (LOGO REMOVIDA)

import React from 'react';
import Image from 'next/image'; // Mantemos o Image caso seja usado em outro lugar

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contato', href: '#contact' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-30 bg-[#0a0a0a] shadow-md border-b border-gray-800"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 🛑 LOGO REMOVIDA DAQUI: O espaço pode ser deixado em branco, ou usado para um título sutil. */}
          <div className="flex-shrink-0">
             {/* Texto sutil para substituir a logo (opcional) */}
             <a href="#home" className="text-gray-300 font-bold text-lg hover:text-[#4ecdc4] transition duration-200">
                KL
             </a>
          </div>

          {/* Links de Navegação (Desktop) - Ocuparão a direita */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-[#4ecdc4] px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Menu Mobile */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-[#ff6b6b] p-2 rounded-md">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
