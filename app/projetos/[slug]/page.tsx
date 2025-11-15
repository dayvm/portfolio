import Image from "next/image";
import Link from "next/link";
import { Briefcase, Github, Globe } from "lucide-react"; // Importe os ícones que precisar

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"; // Componente para tags de tecnologia
import { PROJECTS, type Project } from "@/lib/projects";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {

    // ⬇️ Necessário no Next.js atual
    const { slug } = await params;

    console.log("Slug recebido:", slug);

    const projectData = PROJECTS.find(p => p.slug === slug);

    // 1️⃣ Se não encontrar o projeto, retorna página 404 personalizada
    if (!projectData) {
        return (
            <main className="mx-auto max-w-3xl px-4 py-8">
                <h1 className="text-3xl font-bold">Projeto não encontrado</h1>
                <p className="mt-4 text-muted-foreground">
                    O projeto solicitado não existe.
                </p>
            </main>
        );
    }
    
    return (
        <main className="mx-auto max-w-3xl px-4 py-8">
            <h1 className="mb-8 text-left text-4xl font-extrabold tracking-tight lg:text-5xl">
                {projectData.title}
            </h1>

            <section className="mb-12">
                <Card className="overflow-hidden">

                    <CardContent className="relative flex aspect-video items-center justify-center p-0">
                        <Image
                            src={projectData.imageUrl}
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
                    {projectData.longDescription}
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