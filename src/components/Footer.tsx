// src/components/Footer.tsx (COMPLETO E FINAL)

import React from 'react';

// O ano é calculado uma única vez no momento do build/startup, prevenindo o erro de Hydration.
const currentYear = new Date().getFullYear(); 

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-6 text-center text-gray-400 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm">
          Desenvolvido com 🖤 em Next.js & Tailwind CSS. | &copy; {currentYear} Kleber Lessa. Todos os direitos reservados.
        </p>
        <div className="mt-2 text-[#4ecdc4] text-xs">
          Performance, Segurança e Experiência do Usuário.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
