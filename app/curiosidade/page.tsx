// app/curiosidade/page.tsx

import {catApiService} from "@/lib/services/cat-api.service";

/**
 * Esta é a função 'fetchData'.
 * Nós a separamos para usar a lógica 'try...catch' que você planejou.
 */
async function getCatFact() {
  try {
    // 2. Chama o método do serviço
    const fact = await catApiService.getRandomMessageAboutCats();
    
    // 3. Retorna o fato (sucesso)
    return fact;
  } catch (error) {
    // 4. Retorna a mensagem de "Indisponível" (falha)
    return "Curiosidade indisponível no momento. Tente atualizar a página.";
  }
}

/**
 * Esta é a sua página (um Server Component assíncrono).
 * Ela roda no servidor toda vez que é carregada/atualizada.
 */
export default async function CuriosidadePage() {
  // 5. Chama a função para buscar os dados
  const factMessage = await getCatFact();

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-8 text-center text-xl font-bold tracking-tight lg:text-5xl">
        Curiosidade 🐈
      </h1>
      
      {/* Este é o container que exibe o resultado.
        Usamos 'blockquote' por ser uma citação/fato.
      */}
      <blockquote className="mt-6 border-l-4 pl-6 italic text-lg text-muted-foreground md:text-xl">
        "{factMessage}"
      </blockquote>

    </main>
  );
}