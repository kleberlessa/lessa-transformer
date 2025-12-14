// /lessa-transformer/next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Otimização de Imagens (Segurança e Performance)
  // Define os domínios permitidos para carregar imagens externas.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kleberlessa.com', 
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      // Adicione outros domínios de CDN aqui se necessário
    ],
    // Habilita o cache de imagem no browser por até 60 dias
    minimumCacheTTL: 60 * 60 * 24 * 60, 
  },

  // 2. Otimização de Build
  reactStrictMode: true,
  
  // 3. SEGURANÇA: Telemetry foi removido daqui e movido para package.json (Variável de Ambiente)
};

module.exports = nextConfig;
