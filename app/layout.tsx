// app/layout.tsx (COMPLETO E FINAL)

import Footer from '@/components/Footer'; 
import './globals.css'; 

export const metadata = {
  title: 'Kleber Lessa | Full-Stack Híbrido',
  description: 'Portfólio de Kleber Lessa: Performance, Segurança e Experiência do Usuário.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* CORREÇÃO CRÍTICA: suppressHydrationWarning ignora atributos injetados por extensões do navegador (ex: cz-shortcut-listen), resolvendo o Hydration Error. */}
      <body suppressHydrationWarning={true}>
        {/* Div principal que define o fundo escuro para toda a aplicação */}
        <div className="bg-[#0a0a0a] min-h-screen">
            
            {children} 
            
            <Footer />
            
        </div>
      </body>
    </html>
  );
}
