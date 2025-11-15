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
    title: "Sistemas para Internet",
    subtitle: "Universidade Católica de Pernambuco",
    dateRange: "2024 - Presente",
    description:
      "Curso superior focado em engenharia de software, banco de dados, redes e metodologias ágeis.",
  },
  {
    icon: GraduationCap, // O ícone que você desenhou
    title: "Sistemas de Informação",
    subtitle: "Universidade Federal Rural de Pernambuco",
    dateRange: "2022 - Presente",
    description:
      "Curso superior abrangendo desde o início de computação ao desenvolvimento de projetos complexos e à aplicação de soluções em Sistemas de Informação.",
  },
  {
    icon: GraduationCap,
    title: "Curso de Qualificação Socioprofissional em Desenvolvimento de Software",
    subtitle: "ADMTech",
    dateRange: "Jul 2022 - Dez 2022",
    description:
      "Curso de 440 horas ensinando desde lógica de programação até o paradigma de Programação Orientada a Objetos e o desenvolvimento de um aplicativo em Java.",
  },
];

// 4. Lista de Experiências Profissionais (pronta para sua próxima tela)
export const PROFESSIONAL_EXPERIENCES: ExperienceItem[] = [
  {
    icon: Briefcase, // O outro ícone que você mencionou
    title: "Desenvolvedor Back-end Estagiário",
    subtitle: "PERPART",
    dateRange: "Jan 2025 - Presente",
    description:
      "Desenvolvimento e manutenção de APIs RESTful com Node.js e NestJS, utilizando MySQL, Docker, dentre outras ferramentas.",
  }
];