import funcionario from "./funcionario";

export default class programador extends funcionario {
    private linguagens: string[]

    constructor(nome: string, salario: number, linguagens: string[]) {
        super(nome, salario);
        this.linguagens = linguagens
    }

    obterLinguagens() {
        return this.linguagens
    }
}

