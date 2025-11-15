// app/sobre/page.tsx

import Link from "next/link";
import { PORTFOLIO_TECH } from "@/lib/tech"; // 1. Importa os dados
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, LinkIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* SEÇÃO 1: TÍTULO E DESCRIÇÃO */}
      <section className="mb-12">
        <h1 className="mb-4 text-center text-3xl font-bold tracking-tight lg:text-5xl">
          Sobre este App
        </h1>
        <p className="text-center text-lg text-muted-foreground">
          Este portfólio foi desenvolvido como um projeto de estudo e avaliação,
          utilizando as ferramentas mais modernas do ecossistema Next.js.
          O objetivo foi criar uma aplicação rápida, responsiva e
          fácil de manter, seguindo as melhores práticas de desenvolvimento.
        </p>
      </section>

      {/* SEÇÃO 2: LINK DO CÓDIGO-FONTE */}
      <section className="mb-12 flex flex-col items-center">
        <h2 className="mb-4 text-xl font-bold">Código-Fonte</h2>
        <p className="mb-4 text-center text-muted-foreground">
          Este projeto é de código aberto. Sinta-se à vontade para explorar.
        </p>
        <Button asChild size="lg">
          {/* TODO: Troque pelo link do seu repositório */}
          <Link href="https://github.com/dayvm/portfolio" target="_blank">
            <Github className="mr-2 h-4 w-4" /> Ver no GitHub
          </Link>
        </Button>
      </section>

      {/* SEÇÃO 3: TECNOLOGIAS UTILIZADAS */}
      <section>
        <h2 className="mb-6 text-center text-xl font-bold">
          Tecnologias Utilizadas
        </h2>
        
        {/* Lista de tecnologias */}
        <div className="flex flex-col gap-4">
          {PORTFOLIO_TECH.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <Badge>{tech.name}</Badge>
                <p className="mt-2 text-muted-foreground">
                  {tech.description}
                </p>
              </div>
              
              <Button asChild variant="outline" size="icon">
                <Link href={tech.docUrl} target="_blank">
                  <LinkIcon className="h-4 w-4" />
                  <span className="sr-only">Documentação</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}