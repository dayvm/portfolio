// app/projetos/page.tsx

import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects"; // 1. Importa seus dados
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* Título da Página (como no seu rascunho) */}
      <h1 className="mb-8 text-3xl font-bold tracking-tight lg:text-5xl">
        Projetos
      </h1>

      {/* Wrapper da lista de projetos, um card abaixo do outro */}
      <div className="flex flex-col gap-8">
        
        {/* 2. Faz o .map() na sua lista de projetos */}
        {PROJECTS.map((project) => (
          
          <Card key={project.slug} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                
                {/* Título: É um link para a página de detalhes */}
                <Link href={`/projetos/${project.slug}`}>
                  <CardTitle className="text-xl transition-colors hover:text-primary">
                    {project.title}
                  </CardTitle>
                </Link>

                {/* Botões (como no seu rascunho, no canto direito) */}
                <div className="flex flex-shrink-0 gap-2">
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="icon">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild variant="outline" size="icon">
                      <Link href={project.demoUrl} target="_blank">
                        <Globe className="h-4 w-4" />
                        <span className="sr-only">Demo</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {/* Imagem (como no seu rascunho) */}
              <Link href={`/projetos/${project.slug}`} className="block">
                <div className="relative mb-4 aspect-video w-full">
                  <Image
                    src={project.imageUrl}
                    alt={`Preview do ${project.title}`}
                    fill
                    objectFit="cover" // Garante que a imagem cubra o espaço
                    className="rounded-md border"
                  />
                </div>
              </Link>
              
              {/* Descrição curta (como no seu rascunho) */}
              <CardDescription>
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}