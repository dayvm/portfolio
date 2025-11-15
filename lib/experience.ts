// lib/experience.ts

// 1. Importa os ícones que vamos usar
import { Briefcase, GraduationCap } from "lucide-react";

// 2. Define um "tipo" (Type) para um item de experiência
//    Isso garante que todos os objetos tenham os mesmos campos
export type ExperienceItem = {
  icon: React.ElementType; // Permite passar o componente do ícone
  title: string;
  subtitle: string;
  dateRange: string;
  description: string;
};

// 3. Lista de Experiências Acadêmicas (como no rascunho)
export const ACADEMIC_EXPERIENCES: ExperienceItem[] = [
  {
    icon: GraduationCap, // O ícone que você desenhou
    title: "Análise e Desenvolvimento de Sistemas",
    subtitle: "Universidade XYZ",
    dateRange: "2023 - Presente",
    description:
      "Curso superior focado em engenharia de software, banco de dados, redes e metodologias ágeis.",
  },
  {
    icon: GraduationCap,
    title: "Bootcamp de Desenvolvimento Web",
    subtitle: "Escola de Programação ABC",
    dateRange: "Jan 2023 - Jun 2023",
    description:
      "Bootcamp intensivo de 600 horas focado em React, Node.js, TypeScript e SQL.",
  },
];

// 4. Lista de Experiências Profissionais (pronta para sua próxima tela)
export const PROFESSIONAL_EXPERIENCES: ExperienceItem[] = [
  {
    icon: Briefcase, // O outro ícone que você mencionou
    title: "Desenvolvedor Back-end Jr.",
    subtitle: "Empresa Inovadora Ltda.",
    dateRange: "Jun 2023 - Presente",
    description:
      "Desenvolvimento e manutenção de APIs RESTful com Node.js e NestJS, utilizando PostgreSQL e Docker.",
  },
  {
    icon: Briefcase,
    title: "Estagiário em Desenvolvimento",
    subtitle: "Startup de Tecnologia",
    dateRange: "Jan 2023 - Jun 2023",
    description:
      "Auxílio no desenvolvimento de features para a plataforma principal, com foco em testes unitários e correção de bugs.",
  },
];