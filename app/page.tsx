// app/page.tsx

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4">

      <section className="flex flex-col items-center py-12">
        <Avatar className="h-32 w-32">
          {/* Troque pela sua foto */}
          <AvatarImage src="https://avatars.githubusercontent.com/u/83921667?v=4" alt="@dayvson" />
          <AvatarFallback>profile image</AvatarFallback>
        </Avatar>

        <h1 className="mt-6 text-3xl font-bold">
          Dayvson Moura
        </h1>

        <p className="mt-2 max-w-prose text-center text-lg text-muted-foreground">
          Estudante de tecnologia e desenvolvedor
          back-end, já passou por vários projetos e
          continua em busca de criar soluções inovadoras.
        </p>
      </section>

      <section className="py-12">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Projetos
        </h2>

        <Carousel
          className="w-full"
          // Configurações do carrossel (opcional)
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {/* Array.from... é só um jeito de criar 5 slides de exemplo */}
            {/* Você vai trocar isso por um .map() nos seus projetos reais */}
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  {/* Card: O container de cada projeto */}
                  <Card>
                    <CardHeader>
                      {/* Você vai trocar "Geradocs" pelo nome do seu projeto */}
                      <CardTitle>Geradocs {index + 1}</CardTitle>
                      <CardDescription>
                        Breve descrição do projeto aqui.
                      </CardDescription>
                    </CardHeader>
                    {/* Você pode adicionar <CardContent> com uma imagem 
                      e <CardFooter> com links/botões aqui 
                    */}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />


        </Carousel>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Aqui estão alguns projetos por quais ele já passou.
        </p>
      </section>

      <section className="py-12">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Experiência Profissional e Acadêmica
        </h2>

        <div className="flex flex-col gap-4">
          <Link
            href="/experiencia-academica"
            className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <GraduationCap className="h-8 w-8 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Experiência Acadêmica</h3>
              <p className="text-sm text-muted-foreground">
                Minha jornada na faculdade, cursos e bootcamps.
              </p>
            </div>
          </Link>

          <Link
            href="/experiencia-profissional"
            className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <Briefcase className="h-8 w-8 flex-shrink-0 text-primary" />

            <div>
              <h3 className="font-semibold">Experiência Profissional</h3>
              <p className="text-sm text-muted-foreground">
                Empresas e projetos onde atuei como desenvolvedor.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center py-12 text-center">

        <h2 className="mb-4 text-center text-2xl font-bold">
          Vamos conversar?
        </h2>

        <p className="max-w-prose text-lg text-muted-foreground">
          Estou sempre aberto a novas oportunidades e colaborações.
          Sinta-se à vontade para entrar em contato.
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">

          <Link
            href="mailto:SEU_EMAIL@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-8 w-8" />
            <span className="sr-only">Email</span>
          </Link>

          <Link
            href="https://linkedin.com/in/SEU_USUARIO_AQUI"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </Link>

          <Link
            href="https://github.com/SEU_USUARIO_AQUI"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </Link>

        </div>

      </section>

      <section className="flex flex-col items-center py-12 text-center">

        <h2 className="mb-4 text-center text-2xl font-bold">
          Sobre o App
        </h2>

        <p className="max-w-prose text-lg text-muted-foreground">
          Feito com Next.js 14, Shadcn UI e Tailwind CSS.
          Você pode ver o código-fonte no meu GitHub.
        </p>

        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-lg font-semibold"
        >
          NEXT.js
        </a>
      </section>
    </main>
  );
}
