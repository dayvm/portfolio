type CatFactResponse = {
    data: string[];
};

class CatAPIService {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    private async get(endpoint: string): Promise<any> {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                // 'no-store' garante que pegamos um fato NOVO a cada requisição
                cache: "no-store",

            });
            if (!response.ok) {
                throw new Error(`Falha na API: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Erro no serviço da API:", error);
            throw error; // Re-lança o erro para a página (componente) tratar
        }
    }

    public async getRandomMessageAboutCats(): Promise<string> {
        try {
            const req: CatFactResponse = await this.get("");
            return req.data[0];
        } catch (error) {
            throw new Error("Não foi possível buscar um fato sobre gatos no momento.");
        }
    }
}

export const catApiService = new CatAPIService ("https://meowfacts.herokuapp.com/?lang=por-br")