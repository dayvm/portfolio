import Image from "next/image";
import Link from "next/link";
import { Briefcase, Github, Globe } from "lucide-react"; // Importe os ícones que precisar

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"; // Componente para tags de tecnologia

interface ProjectPageProps {
    params: {
        slug: string; // O slug do projeto (ex: "geradocs", "meu-app")
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = params; // Extrai o slug da URL


    const projectData = {
        title: "Geradox", // Ex: "Geradocs"
        description: `Este é um projeto de exemplo para o ${slug}. Uma descrição mais longa do projeto, detalhando seus objetivos, funcionalidades principais, desafios enfrentados e soluções implementadas. O foco foi em criar uma interface intuitiva e uma experiência de usuário fluida, utilizando as tecnologias mais recentes do mercado para garantir escalabilidade e manutenção.`,
        imageUrl: "https://via.placeholder.com/600x400?text=Imagem+do+Projeto", // Substitua pela imagem real
        githubUrl: `https://github.com/dayvson-moura/${slug}`, // Link para o GitHub
        demoUrl: `https://demo.${slug}.com`, // Link para a demo
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Node.js", "Express", "PostgreSQL"],
    };

    return (
        <main className="mx-auto max-w-3xl px-4 py-8">
            <h1 className="mb-8 text-left text-4xl font-extrabold tracking-tight lg:text-5xl">
                {projectData.title}
            </h1>

            <section className="mb-12">
                <Card className="overflow-hidden">

                    <CardContent className="relative flex aspect-video items-center justify-center p-0">
                        <Image
                            src="/geradocs.jpg"
                            alt={`Preview do projeto ${projectData.title}`}
                            layout="fill" // Preenche o contêiner
                            objectFit="cover" // Corta se necessário para cobrir
                            className="rounded-b-lg"
                        />
                    </CardContent>
                </Card>

                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                    {projectData.githubUrl && (
                        <Button asChild size="lg">
                            <Link href={projectData.githubUrl} target="_blank">
                                <Github className="mr-2 h-4 w-4" /> Ver no GitHub
                            </Link>
                        </Button>
                    )}
                    {projectData.demoUrl && (
                        <Button asChild variant="outline" size="lg">
                            <Link href={projectData.demoUrl} target="_blank">
                                <Globe className="mr-2 h-4 w-4" /> Demo Online
                            </Link>
                        </Button>
                    )}
                </div>
            </section>

            <Separator className="my-8" />

            <section className="mb-12">
                <h2 className="mb-4 text-3xl font-bold">Sobre</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    {projectData.description}
                </p>
                {/* Você pode adicionar mais parágrafos, listas, etc. aqui */}
            </section>

            <Separator className="my-8" />

            <section>
        <h2 className="mb-4 text-3xl font-bold">Tecnologias Utilizadas</h2>
        <div className="flex flex-wrap gap-2">
          {projectData.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-4 py-2 text-md">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
        </main>
    )
}