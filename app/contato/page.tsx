// app/contato/page.tsx

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      {/* SEÇÃO 1: TÍTULO E DESCRIÇÃO */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-center text-3xl font-bold tracking-tight lg:text-5xl">
          Vamos conversar?
        </h1>
        <p className="mx-auto max-w-prose text-lg text-muted-foreground">
          Estou sempre aberto a novas oportunidades, colaborações ou
          simplesmente para trocar uma ideia sobre tecnologia. Sinta-se à
          vontade para entrar em contato através de um dos canais abaixo.
        </p>
      </section>

      {/* SEÇÃO 2: ÍCONES DE CONTATO */}
      <section className="flex items-center justify-center gap-8 py-8 md:gap-12">
        {/* Email */}
        <Link
          href="mailto:dayvson.moura.7@gmail.com" // TODO: Troque pelo seu email
          className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Mail className="h-12 w-12" />
          <span className="text-sm font-medium">Email</span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/dayvson-moura-pro/" // TODO: Troque pelo seu LinkedIn
          target="_blank"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Linkedin className="h-12 w-12" />
          <span className="text-sm font-medium">LinkedIn</span>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/dayvm" // TODO: Troque pelo seu GitHub
          target="_blank"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Github className="h-12 w-12" />
          <span className="text-sm font-medium">GitHub</span>
        </Link>
      </section>

      <Separator className="my-12" />

      {/* SEÇÃO 3: LEMBRETE (Opcional) */}
      <section className="text-center">
        <p className="text-muted-foreground">
          Procurando pelos meus projetos ou experiência?
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Link
            href="/projetos"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Ver Projetos
          </Link>
          <Link
            href="/experiencia-profissional"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Ver Experiência
          </Link>
        </div>
      </section>
    </main>
  );
}