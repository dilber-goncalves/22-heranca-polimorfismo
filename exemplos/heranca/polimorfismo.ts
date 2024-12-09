class ContaBancaria {
    saldo: number;
    
    constructor(saldo: number) {
        this.saldo = 0;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        this.saldo -= valor;
    }
}

class ContaCorrente extends ContaBancaria {
    sacar(valor: number): void {
        this.saldo -= (valor + 100);
    }
}

class ContaPoupanca extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo += (valor + 200);
    }
}

const contaCorrente = new ContaCorrente(1000);
const contaPoupanca = new ContaPoupanca(1000);

contaCorrente.depositar(1000);
contaPoupanca.depositar(1000);

console.log(contaCorrente, contaPoupanca);