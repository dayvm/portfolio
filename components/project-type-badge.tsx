import { cn } from "@/lib/utils"; // Importa a função utilitária do Shadcn

type ProjectType = "Projeto Profissional" | "Projeto Acadêmico" | "Projeto Individual";

interface ProjectTypeBadgeProps {
  type: ProjectType | string; // Aceita os tipos definidos ou um string qualquer
  className?: string; // Permite passar classes extras (como as de posição)
}

export function ProjectTypeBadge({ type, className }: ProjectTypeBadgeProps) {
    const colorVariants = {
    "Projeto Profissional": "border-yellow-500/50 text-yellow-600 bg-yellow-500/10",
    "Projeto Acadêmico": "border-green-500/50 text-green-600 bg-green-500/10",
    "Projeto Individual": "border-blue-500/50 text-blue-600 bg-blue-500/10",
    "default": "border-gray-400/50 text-gray-500 bg-gray-500/10"
  };

  const colorClass = 
    colorVariants[type as ProjectType] || colorVariants.default;

    return (
        <div
      // A função 'cn' mescla as classes padrão com as classes passadas (className)
      className={cn(
        "inline-block rounded-full border px-3 py-1 text-xs font-medium",
        colorClass,
        className // Aqui entrarão 'absolute', 'top-4', 'right-4'
      )}
    >
      {type}
    </div>
    )
}