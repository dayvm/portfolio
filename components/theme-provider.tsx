// components/theme-provider.tsx

"use client"; // Esta linha é OBRIGATÓRIA

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

// Este componente "intermediário" é o que permite
// que o 'layout.tsx' (Server) use este Provedor (Client)
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}