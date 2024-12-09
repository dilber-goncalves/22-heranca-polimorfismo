import funcionario from "./funcionario";

export default class vendedor extends funcionario {
    comissao: number

    constructor(nome: string, salario: number, comissao: number) {
        super(nome, salario);
        this.comissao = 0
    }

    obterSalarioCompleto() {
        return this.comissao + this.obterSalario();
    }

    adicionarComissao(valor: number) {
        this.comissao += valor
    }
}