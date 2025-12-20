export type Project = {
    slug: string;        // O ID da URL (ex: "geradocs")
    title: string;       // O título (ex: "Geradocs")
    description: string; // A descrição curta (para o Card)
    longDescription: string; // A descrição longa (para a página do projeto)
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;    // O '?' torna opcional
    technologies: string[];
    type: string;
    institution?: string;
};

export const PROJECTS: Project[] = [
    {
        slug: "geradocs",
        title: "Geradocs",
        description: "Software de preenchimento fácil de documentos",
        longDescription: "A solução GeraDocs resultou em uma diminuição de aproximadamente 90% no tempo de preenchimento de documentos para os colaboradores da PERPART, economizando 45 minutos a cada 50 minutos.",
        imageUrl:"/geradocs.jpg",
        technologies:["Arquitetura MVC", "ORM Prisma", "MySQL", "Vitest", "Swagger"],
        type: "Projeto Profissional",
        institution: "PERPART"
    },
    {
        slug: "recursoshumanospp",
        title: "Recursos Humanos Perpart",
        description: "Software de gerenciamento dos recursos humanos da PERPART.",
        longDescription: "O software de RH da PERPART vem para resolver o problema de controle de dados dos funcionários da PERPART. Suas informações antes descentralizadas, agora estão acessíveis a poucos cliques, transformando os processos e trazendo eficiência para a empresa.",
        imageUrl:"/perpart.png",
        technologies:["TypeScript", "ORM Prisma", "MySQL", "Swagger", "Docker"],
        type: "Projeto Profissional",
        institution: "PERPART"
    },
    {
        slug: "salveojona",
        title: "Salve o Jona",
        description: "Jogo de adivinhar palavras",
        longDescription: "Um jogo de adivinhação de palavras com uma reviravolta aquática! Desenvolvido como um projeto prático, para a disciplina de Programação FRONT-END do curso de Sistemas para Internet da Universidade Católica de Pernambuco, para explorar conceitos modernos de desenvolvimento web com React. Acesse agora!",
        imageUrl:"/salveojona.jpg",
        technologies:["React","Vite","CSS3", "JavaScript"],
        githubUrl: "https://github.com/dayvm/forca_game",
        demoUrl:"https://salveojona.vercel.app/",
        type:"Projeto Acadêmico",
        institution:"Universidade Católica de Pernambuco"
    },
    {
        slug: "alertaurbano",
        title: "Alerta Urbano",
        description: "Plataforma de Zeladoria e Manutenção Urbana",
        longDescription: "Uma plataforma mobile-first desenvolvida para conectar cidadãos e órgãos públicos na resolução de problemas urbanos em Recife/PE. O sistema permite o registro geolocalizado de ocorrências (como buracos e falta de iluminação) com upload de fotos, comentários e acompanhamento de status em tempo real. Desenvolvido como projeto prático para a disciplina de Programação Front-end do curso de Sistemas para Internet da Universidade Católica de Pernambuco.",
        imageUrl: "/alertaurbano.png", // Nome da logo que usamos na Splash Screen
        technologies: [
            "Next.js 16", 
            "TypeScript", 
            "Tailwind CSS v4", 
            "Shadcn/ui", 
            "React Leaflet", 
            "Java Spring Boot", 
            "PostgreSQL",
            "Docker"
        ],
        githubUrl: "https://github.com/dayvm/alerta-urbano-front",
        demoUrl: "https://alerta-urbano-unicap.vercel.app/",
        type: "Projeto Acadêmico",
        institution: "Universidade Católica de Pernambuco"
    },
]