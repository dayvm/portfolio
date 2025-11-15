
# Portfólio Pessoal v1 - Dayvson Moura

Este é o repositório do meu portfólio pessoal, desenvolvido do zero com Next.js 16, Tailwind CSS v4 e Shadcn UI. O projeto foi focado em uma arquitetura de "App Router", design mobile-first e gerenciamento de dados local.

**[https://dayvson.vercel.app/]**
<!-- 
## 📸 Screenshots

(É **altamente** recomendado que você tire screenshots do seu site pronto e os adicione aqui. Isso causa uma ótima primeira impressão.)

| Modo Claro (Mobile) | Modo Escuro (Desktop) |
| :---: | :---: |
| [Insira o screenshot do modo claro aqui] | [Insira o screenshot do modo escuro aqui] | -->

## ✨ Funcionalidades Principais

* **Tema Claro/Escuro:** Alternância de tema com `next-themes`, salvando a preferência do usuário.
* **Design Mobile-First:** Todo o site foi estilizado primeiro para dispositivos móveis, depois adaptado para desktops usando Tailwind.
* **Roteamento Dinâmico:** As páginas de detalhes de projetos são geradas dinamicamente usando a rota `app/projetos/[slug]/page.tsx`.
* **Dados Centralizados:** Todos os dados de "negócio" (projetos, experiências) são gerenciados em arquivos TypeScript dentro da pasta `lib/`, permitindo fácil manutenção.
* **Componentização:** A UI é dividida em componentes reutilizáveis (Header, Footer, ProjectTypeBadge) e componentes do Shadcn UI.

## 🚀 Tecnologias Utilizadas

* **Framework:** [Next.js 16](https://nextjs.org/) (com App Router)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Componentes:** [Shadcn UI](https://ui.shadcn.com/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Gerenciamento de Tema:** [Next-Themes](https://github.com/pacocoursey/next-themes)
* **Deploy:** [Vercel](https://vercel.com/)

## 📁 Estrutura do Projeto

A estrutura de pastas foi organizada para separar claramente o roteamento, a lógica de dados e os componentes de UI.

```
portfolio/
├── app/                    # Pastas de rotas (ex: /sobre, /contato)
│   ├── experiencia-academica/
│   ├── experiencia-profissional/
│   ├── projetos/
│   │   ├── [slug]/                 # Rota dinâmica para um projeto
│   │   └── page.tsx                # Página /projetos (lista)
│   └── sobre/
│   ├── layout.tsx                      # Layout raiz (com Header, Footer, ThemeProvider)
│   └── page.tsx                        # Página Home (/)
│
├── components/
│   ├── layout/                         # Componentes de layout (Header.tsx, Footer.tsx)
│   ├── ui/                             # Componentes do Shadcn (Button.tsx, Card.tsx...)
│   ├── project-type-badge.tsx          # Badge customizado (profissional, acadêmico...)
│   ├── theme-toggle.tsx                # Componente para troca de tema
│   └── theme-provider.tsx              # Wrapper para o next-themes
│
├── lib/
│   ├── experience.ts                   # Dados de experiência (acadêmica, profissional)
│   ├── projects.ts                     # Lista de dados de todos os projetos
│   ├── tech.ts                         # Lista de tecnologias (para a pág. /sobre)
│   └── utils.ts                        # Função 'cn' (do Shadcn)
│
├── public/
│   ├── meu-logo-light.png              # Imagens estáticas, fontes e logos
│   └── meu-logo-dark.png
│
├── postcss.config.mjs                  # Configuração do PostCSS (para o Tailwind v4)
├── package.json
└── tsconfig.json
```

## 🏁 Começando

Para rodar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

* Node.js (v18 ou mais recente)
* `npm` ou `yarn`

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/dayvm/portfolio.git
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```

### Rodando Localmente

1.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
2.  Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000).

## 🚧 Melhorias Futuras

Fixar a altura dos cards na página inicial para evitar variação de tamanho baseada no conteúdo.

Garantir que o Footer fique "colado" no fim da tela (sticky footer) em páginas com pouco conteúdo, como a 404 e a de Projeto Inválido.

Adicionar um botão de "Voltar" na página de detalhes do projeto.

Melhorar o layout horizontal em telas ultrawide, garantindo que o conteúdo principal não se estique demais.

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.