// app/experiencia-academica/page.tsx

// 1. Importa a lista de dados que queremos mostrar
import { ACADEMIC_EXPERIENCES } from "@/lib/experience";

export default function AcademicExperiencePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* Título (como no rascunho) */}
      <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Experiência Acadêmica
      </h1>

      {/* Parágrafo de introdução (como no rascunho) */}
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Minha jornada na faculdade, bootcamps e cursos que moldaram 
        minha base como desenvolvedor de software.
      </p>

      {/* Container da lista de experiências */}
      <div className="flex flex-col gap-10">
        
        {/* 2. Faz um .map() na lista importada */}
        {ACADEMIC_EXPERIENCES.map((exp, index) => {
          // Pega o componente do ícone de dentro do objeto
          const IconComponent = exp.icon; 

          return (
            <div key={index} className="flex items-start gap-4">
              
              {/* Coluna do Ícone */}
              <div className="mt-1 flex-shrink-0">
                <IconComponent className="h-8 w-8 text-primary" />
              </div>

              {/* Coluna do Conteúdo */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-md font-medium text-muted-foreground">
                  {exp.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">{exp.dateRange}</p>
                <p className="mt-2 text-base">{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}