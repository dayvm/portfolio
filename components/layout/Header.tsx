// components/layout/Header.tsx
"use client"
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
import { ThemeToggle } from "../theme-toggle";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"


export function Header() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme = theme === "system" ? resolvedTheme : theme

  const logoSrc = activeTheme === "dark"
    ? "/dm-logo-in-dark-mode.png"
    : "/dm-logo-in-white-mode.png"

  if (!mounted) return null
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
              src={logoSrc}
              alt="logo"
              width={60}
              height={60}
            />
          </Link>
        </div>

        {/* Esta é a sua "div right":
          - w-4/5: (ocupa 4/5 = 80% do resto)
          - flex justify-center: (centraliza seus filhos)
        */}
        <div className="flex w-2/5 lg:w-4/5 justify-end pr-8">
          <ThemeToggle />
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