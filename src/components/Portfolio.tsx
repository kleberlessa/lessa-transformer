// src/components/Portfolio.tsx (COMPLETO E FINAL - CORRIGIDO)

import React from 'react';
import { Project } from '@/types/Project';

// === DADOS DO PORTFÓLIO ===
const projects: Project[] = [
  {
    title: 'Projeto Alpha - Dashboard Financeiro',
    description: 'Um painel de controle interativo para visualização de dados em tempo real, focado em alta performance e segurança.',
    imageUrl: '/placeholder-project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    category: 'Full-Stack',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'API de Rastreamento de Estoque',
    description: 'Sistema de microserviços RESTful robusto para gerenciamento de estoque e logs de auditoria.',
    imageUrl: '/placeholder-project-2.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    category: 'Backend',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Landing Page de SaaS (Design Otimizado)',
    description: 'Página de alto impacto com foco em conversão, otimizada para Core Web Vitals e SEO.',
    imageUrl: '/placeholder-project-3.jpg',
    technologies: ['React', 'Gatsby', 'Figma', 'Styled Components'],
    category: 'Frontend',
    demoUrl: '#',
    githubUrl: '#',
  },
];
// ==========================

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#4ecdc4]">
          Portfólio Híbrido
        </h2>

        {/* CORREÇÃO DO ERRO 'project is not defined': Mapeamento correto do array 'projects' */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {projects.map((project, index) => ( 
            <div key={index} className="bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 border border-gray-700">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-medium bg-[#393939] text-[#4ecdc4] px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botões de Ação com cores de Contraste Corrigido */}
                <div className="flex justify-between space-x-4 mt-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    // Contraste Corrigido: Fundo escurecido para #cc4a4a (acessível com texto branco)
                    className="flex-1 text-center px-4 py-2 bg-[#cc4a4a] text-white rounded-md font-semibold hover:bg-[#b03d3d] transition duration-200"
                  >
                    Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    // Contraste Corrigido: Texto clareado para #8ed2cc (acessível com fundo escuro)
                    className="flex-1 text-center px-4 py-2 border border-[#8ed2cc] text-[#8ed2cc] rounded-md font-semibold hover:bg-[#8ed2cc] hover:text-[#0a0a0a] transition duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-16">
            <p className="text-gray-400 text-lg">Confira a lista completa de projetos no meu GitHub.</p>
            <a href="#" className="inline-block mt-4 px-8 py-3 text-base font-semibold rounded-full bg-[#4ecdc4] text-[#0a0a0a] hover:bg-[#39aba1] transition duration-300 shadow-md hover:shadow-lg">
                Ver Todos os Repositórios
            </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
