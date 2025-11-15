import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="w-full">

            <Separator className="mx-auto w-[92%]" />

            <div className="mx-auto max-w-2xl px-4 py-8">

                <div className="grid grid-cols-2 gap-4">

                    <div className="flex flex-col gap-2">
                        <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                            Home
                        </Link>
                        <Link href="/projetos" className="text-muted-foreground transition-colors hover:text-primary">
                            Projetos
                        </Link>
                        <Link href="/experiencia-academica" className="text-muted-foreground transition-colors hover:text-primary">
                            Experiência Acadêmica
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Link href="/experiencia-profissional" className="text-muted-foreground transition-colors hover:text-primary">
                            Experiência Profissional
                        </Link>
                        {/* Você pode criar esta página depois */}
                        <Link href="/contato" className="text-muted-foreground transition-colors hover:text-primary">
                            Contato
                        </Link>
                        <Link href="/sobre-o-app" className="text-muted-foreground transition-colors hover:text-primary">
                            Sobre o App
                        </Link>
                    </div>
                </div>
                <p className="mt-8 text-center text-sm text-muted-foreground">
                    © 2025 dayvm
                </p>
            </div>
        </footer>
    )
}