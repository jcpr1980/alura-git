
//
const listaCpfs = ["12345678900", "32165498755", "31246579885"]
// const cliente = ["nome", "andré", "idade", 36]

//exemplo de objeto

const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678900",
    email: "andre@gmail.com"
}
console.log(cliente)
console.log(`O Nome do Cliente é: ${cliente.nome}`)
console.log(cliente.idade)
console.log(cliente.cpf)
console.log(cliente.email)

//Acessando dados com colchetes
const chaves = ["nome", "idade", "cpf", "email"]
console.log(cliente[chaves[0]])
console.log(cliente[chaves[1]])
console.log(cliente[chaves[2]])
console.log(cliente[chaves[3]])
//ou
console.log(cliente["nome"])

//Acessando dados com colchetes - utilizando Foreach
chaves.forEach(info=>console.log(cliente[info]))

//Adicionando ou alterando um objeto
cliente.fone = "79988887777"
console.log(cliente)

cliente.fone = "11988887777"
console.log(cliente)

//Deletando do objeto
delete cliente.fone
console.log(cliente)


//Tipos de Dados e Valores
console.log(">>> Tipos de Dados e Valores <<<")
const cliente2 = {
    nome: "André",
    idade: 36,
    cpf: "12345678900",
    email: "andre@gmail.com",
    fones: ["79988887777", "81986864545"]
}
console.log(cliente2.fones)
cliente2.fones.forEach(fone=> console.log(fone))

// Objetos dentro de objetos 
console.log(">>> Objetos dentro de objetos <<<")
const cliente3 = {
    nome: "André",
    idade: 36,
    cpf: "12345678900",
    email: "andre@gmail.com",
    fones: ["79988887777", "81986864545"]
}
cliente3.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}
console.log(cliente3)
console.log(cliente3.dependentes.nome)

// Lista de objetos 
console.log(">>> Lista de objetos <<<")
const cliente4 = {
    nome: "André",
    idade: 36,
    cpf: "12345678900",
    email: "andre@gmail.com",
    fones: ["79988887777", "81986864545"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}
cliente4.dependentes.push({
    nome: "Paula",
    parentesco: "filha",
    dataNasc: "30/02/2005"
})
console.log(cliente4)
console.log(cliente4.dependentes)

//Retornando a filha mais nova
console.log(">>> Retornando a filha mais nova <<<")
const filhaMaisNova = cliente4.dependentes.
filter(dependente => dependente.dataNasc === "30/02/2005")
console.log(filhaMaisNova[0].nome)
console.log(filhaMaisNova)


//Trabalhando com Funções
console.log(">>> Trabalhando com Funções <<<")
const cliente5 = {
    nome: "André",
    idade: 36,
    cpf: "12345678900",
    email: "andre@gmail.com",
    fones: ["79988887777", "81986864545"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }, {
        nome: "Paula",
        parentesco: "filha",
        dataNasc: "30/02/2005"
    }],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}
console.log(cliente5.saldo)
cliente5.depositar(50)
console.log(cliente5.saldo)


//Percorendo o objeto  - For...In
console.log(">>> Percorendo o objeto  - For...In <<<")

let relatorio=""
for (let info in cliente5){
    if (typeof cliente5[info] === "object" 
    || typeof cliente5[info] === "function" ) 
    {
        continue
    }else{
    relatorio += `
    ${info} ==> ${cliente5[info]}
    `
}
}
console.log(relatorio)

//Relatório - Oferta Seguro
console.log(">>> Relatório - Oferta Seguro <<<")
const prosClientesKes = Object.keys(cliente5) //retorna as chaves do objeto
const prosClientesValues = Object.values(cliente5) // retorna os valores das chaves do objeto
const prosClientesEntries = Object.values(cliente5) // retorna arrays chaves e valores do objeto
console.log(prosClientesKes)
console.log(prosClientesValues)
console.log(prosClientesEntries)
//filtrando por dependentes
function oferecerSeguro(objClientes){
    const prosClientes = Object.keys(objClientes)
    if (prosClientes.includes("dependentes")) {
        console.log(`Cliente para o seguro: ${objClientes.nome}`)
    }
}
oferecerSeguro(cliente5)


//Retorna lista de depentes com espalhamento [...]
console.log(">>> Retorna lista de depentes com espalhamento [...] <<<")

const cliente6 = [{
    nome: "André",
    cpf: "12345678900",
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }, {
        nome: "Paula",
        parentesco: "filha",
        dataNasc: "30/02/2005"
    }]
}, {
    nome: "Juliana",
    cpf: "98765432100",
    dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
    }]
}]
const listaDependentes = [...cliente6[0].dependentes, ...cliente6[1].dependentes]
console.log(listaDependentes)
console.table(listaDependentes) //Exige o array em forma de tabela

console.table(cliente6) //Exige em tabela mas os Depedentes só aparecem como objetos


//convertendo objeto para JSON
console.log(">>> convertendo objeto para JSON <<<")
const jsonCliente = JSON.stringify(cliente6)
console.log(jsonCliente)

//Cliente Genérico - Propriedades de Prototype
console.log(">>> Cliente Genérico - Propriedades de Prototype <<<")

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    this.depositarValor = function(valorDeposito){
        this.saldo += valorDeposito
    }
}
const Andre = new Cliente("André", "1234567900", "andre@email.com", 100)
console.log(Andre)

//Criando Poupança para CLiente - Manipelando Prototype
console.log(">>> Criando Poupança para CLiente - Manipelando Prototype <<<")
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup    
}

const Ju = new ClientePoupanca("Ju", "1234657845", "ju@email.com", 200, 400)
console.log(Ju)
//Criando função depositar na poupança e adicionando valor
ClientePoupanca.prototype.depositarPoup = function (valorDepPoup) {
    this.saldoPoup += valorDepPoup
}
Ju.depositarPoup(45)
console.log(Ju.saldoPoup)


//Conceitos de orientação a objeto
console.log(">>> Conceitos de orientação a objeto <<<")

class Pessoa{
    constructor(nomePessoa, sobrenomePessoa, cpfPessoa, emailPessoa){
    this.nomePessoa = nomePessoa
    this.sobrenomePessoa = sobrenomePessoa
    this.cpfPessoa = cpfPessoa
    this.emailPessoa = emailPessoa
    }
}
class Programador extends Pessoa {
    constructor(nomePessoa, sobrenomePessoa, cpfPessoa, emailPessoa, linguagemProg){
        super(nomePessoa, sobrenomePessoa, cpfPessoa, emailPessoa)
        this.linguagemProg = linguagemProg
    }
}
const programador = new Programador("Julio", "Ribeiro", "12345678988", "julio@email.com", "Java");
console.log(programador)



class Cliente7{
    constructor(nomeCliente7, emailCliente7, cpfCliente7, saldoCliente7){
        this.nomeCliente7 = nomeCliente7
        this.emailCliente7 = emailCliente7
        this.cpfCliente7 = cpfCliente7
        this.saldoCliente7 = saldoCliente7
    }

    depositarCliente7 (valorCliente7){
        this.saldoCliente7 += valorCliente7
    }

    exibirSaldo(){
        console.log(this.saldoCliente7)
    }
}

const julioC7 = new Cliente7("Julio", "julio@email.com", "12345678988", 100);

julioC7.depositarCliente7(50);
console.log(julioC7);
julioC7.exibirSaldo();

class ClientePoup2 extends Cliente7{
    constructor(nomeCliente7, emailCliente7, cpfCliente7, saldoCliente7, saldoPoup2){
        super(nomeCliente7, emailCliente7, cpfCliente7, saldoCliente7)
        this.saldoPoup2 = saldoPoup2
    }

    depositarPoup2 (valorDepPoup2){
        this.saldoPoup2 += valorDepPoup2
    }

    exibirSaldoPoup(){
        console.log(this.saldoPoup2)
    }
}

const julioC8 = new ClientePoup2("Julio2", "julio2@email.com", "12345678988", 100, 200);
console.log(julioC8)
julioC8.depositarPoup2(5400)
julioC8.exibirSaldoPoup()








