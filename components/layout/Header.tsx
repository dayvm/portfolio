// components/layout/Header.tsx

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

// Criamos um componente de link reutilizável para o Menu de Navegação
const ListItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={navigationMenuTriggerStyle()} // Usa o estilo do Shadcn
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export function Header() {
  return (
    // Usamos a tag <header> por semântica.
    // O <nav> envolve tudo para acessibilidade.
    <nav className="w-full">
      {/* Esta é a sua "div mãe":
        - w-full: (horizontal 100%)
        - flex: (para ter left e right)
        - items-center: (centraliza verticalmente na "mesma linha")
        - py-4: (um padding vertical para dar espaço)
      */}
      <div className="flex w-full items-center py-4">
        
        {/* Esta é a sua "div left":
          - w-1/5: (ocupa 1/5 = 20% da mãe)
          - flex justify-start: (coloca seus filhos à esquerda)
          - pl-8: (um padding à esquerda para não colar na borda)
        */}
        <div className="flex w-3/5 lg:w-1/5 justify-start pl-8">
          <Link href="/">
          <Image
          src="/DM rect.png"
          alt="logo"
          width={60}
          height={60}
          
          ></Image>
          </Link>
        </div>

        {/* Esta é a sua "div right":
          - w-4/5: (ocupa 4/5 = 80% do resto)
          - flex justify-center: (centraliza seus filhos)
        */}
        <div className="flex w-2/5 lg:w-4/5 justify-center">
        </div>
      </div>

      {/* Este é o seu Separator:
        - Fica *abaixo* da "div mãe".
        - w-[92%]: (ocupa 92% da tela)
        - mx-auto: (centraliza horizontalmente na tela)
      */}
      <Separator className="mx-auto w-[92%]" />
    </nav>
  );
}