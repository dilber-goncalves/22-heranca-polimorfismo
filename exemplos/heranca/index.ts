import funcionario from "./funcionario";
import gerente from "./gerente";
import programador from "./programador";
import vendedor from "./vendedor";

const funcionarrio = new funcionario('Fernando', 100000);
const gereente = new gerente('1234', 'Maria', 200000);
const vendeedor = new vendedor('João', 150000, 10000);
const prograamador = new programador('Joaquina', 300000, ['java', 'C#']);

console.log(`Eu sou ${funcionarrio.nome}, funcionario, e ganho ${funcionarrio.obterSalario()}`);
console.log(`Eu sou ${gereente.nome}, gerente, ganho ${gereente.obterSalario()}, minha senha e ${gereente.senha}`);
console.log(`Eu sou ${vendeedor.nome}, vendedor, ganho ${vendeedor.obterSalarioCompleto()}, minha comissão e ${vendeedor.comissao}`);
console.log(`Eu sou ${prograamador.nome}, programador, ganho ${prograamador.obterSalario()} e programo em ${prograamador.obterLinguagens()}`);

