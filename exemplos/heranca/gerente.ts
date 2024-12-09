import funcionario from "./funcionario";

export default class gerente extends funcionario {
    senha: string | undefined

    constructor (senha: string, nome: string, salario: number) {
        super(nome, salario)
        this.senha = senha
    }

    validarSenha(senha: string) {
        return this.senha === senha
    }
}