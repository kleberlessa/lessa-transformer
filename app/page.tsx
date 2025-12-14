// app/page.tsx (COMPLETO E FINAL)

import Navbar from '@/components/Navbar'; 
import Hero from '@/components/Hero';   
import Portfolio from '@/components/Portfolio'; 
import Contact from '@/components/Contact'; 

export default function Home() {
  return (
    <> 
      <Navbar /> 
      
      {/* CORREÇÃO: Aplicando pt-16 (padding-top: 4rem) no elemento MAIN para empurrar todo o conteúdo abaixo do Navbar fixo. */}
      <main className="pt-16"> 
        
        <Hero /> 
        
        <Portfolio /> 
        
        <Contact />
        
      </main>
    </>
  );
}
