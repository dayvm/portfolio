export type Project = {
    slug: string;        // O ID da URL (ex: "geradocs")
    title: string;       // O título (ex: "Geradocs")
    description: string; // A descrição curta (para o Card)
    longDescription: string; // A descrição longa (para a página do projeto)
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;    // O '?' torna opcional
    technologies: string[];
};

export const PROJECTS: Project[] = [
    {
        slug: "geradocs",
        title: "Geradocs",
        description: "Software de preenchimento fácil de documentos",
        longDescription: "Criou conjuntamente a solução GeraDocs, que resultou em uma diminuição de aproximadamente 90% no tempo de preenchimento de documentos para os colaboradores, economizando 45 minutos a cada 50 minutos.",
        imageUrl:"/geradocs.jpg",
        technologies:["Arquitetura MVC", "ORM Prisma", "MySQL", "Vitest", "Swagger"]
    },
    {
        slug: "salveojona",
        title: "Salve o Jona",
        description: "Jogo de adivinhar palavras",
        longDescription: "Um jogo de adivinhação de palavras com uma reviravolta aquática! Desenvolvido como um projeto prático, para a disciplina de Programação FRONT-END do curso de Sistemas para Internet da Universidade Católica de Pernambuco, para explorar conceitos modernos de desenvolvimento web com React. Acesse agora!",
        imageUrl:"/salveojona.jpg",
        technologies:["React","Vite","CSS3", "JavaScript"],
        githubUrl: "https://github.com/dayvm/forca_game",
        demoUrl:"https://salveojona.vercel.app/"
    },
]