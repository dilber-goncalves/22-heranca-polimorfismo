export default class funcionario {
    nome: string;
    protected salario: number;
    

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
        
    }

    obterSalario() {
        return this.salario;
    }
}