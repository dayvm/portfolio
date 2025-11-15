// lib/tech.ts

// Define o "tipo" de uma tecnologia
export type Technology = {
  name: string;
  description: string;
  docUrl: string; // Link para a documentação
};

// Exporta a lista de tecnologias usadas neste portfólio
export const PORTFOLIO_TECH: Technology[] = [
  {
    name: "Next.js 16",
    description: "Framework React para produção com renderização no servidor.",
    docUrl: "https://nextjs.org/docs",
  },
  {
    name: "Tailwind CSS 4",
    description: "Framework CSS utility-first para estilização rápida.",
    docUrl: "https://tailwindcss.com/docs",
  },
  {
    name: "Shadcn UI",
    description: "Componentes de UI acessíveis e reutilizáveis.",
    docUrl: "https://ui.shadcn.com/docs",
  },
  {
    name: "TypeScript",
    description: "Superset do JavaScript que adiciona tipagem estática.",
    docUrl: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Vercel",
    description: "Plataforma de deploy para frontend.",
    docUrl: "https://vercel.com/docs",
  },
];