interface ICarro {
    marca: string;
    modelo: string;
    ano: number;
    acelerar(): string
}

class Carro implements ICarro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar(): string {
        return 'Acelerando...';
    }
}

const uno: ICarro = new Carro('Fiat', 'Uno', 2010);

console.log(uno.acelerar());
