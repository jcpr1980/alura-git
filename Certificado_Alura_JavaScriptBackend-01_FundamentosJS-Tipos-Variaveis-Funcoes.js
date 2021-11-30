//Tipos de Variáveis
// const - quando os valores não serão modificados
// let - quando os valores serão modificados
// var



const texto1 = 'Hello world 1';
const texto2 = "Hello world 2";
const texto3 = '"Hello world 3"';
const texto4 = `Hello world 4`;
var number1 = 1;
var number2 = 2;
var number3 = 3;




console.log(texto1);
console.log(texto2);
console.log(texto3);
console.log(texto4);
console.log(texto1+texto2+texto3+texto4);
console.log(number1+number2+number3);
console.log(texto1+number1+number2+number3);



const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
const gargalhada = '\u2661'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
console.log(gargalhada)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(inputMinusculo);
console.log(cidade === inputMinusculo); // true 

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

const primeiro = 5;
const segundo = 10;



console.log(primeiro === segundo);
console.log(primeiro+5 === segundo);

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area; //a variável pode ser criada depois do uso, porque o JS ler primeiro todas variáveis do código

console.log(0 == false);
console.log("" == false);
console.log(1 == false);



//Typeof para mostrar qual o tipo da variável
let numero = 3;
let texto = "Alura";
let minhaVar;
let varNull = null;
console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);

//Conversão implícita
const numero456 = 456;
const numeroString = "456";
console.log(numero456 == numeroString); //compara somente os valores
console.log(numero456 === numeroString); //compara além dos valores, os tipos tb
console.log(numero456 + numeroString); //transforma os dois em String e concatena

//Conversão explícita // funções number() e string()
console.log(numero456 + Number(numeroString)); //transforma os dois em String e concatena
console.log(String(numero456) + Number(numeroString)); //transforma os dois em String e concatena

console.log(numero456, numeroString);


//Operador Ternário
const idadeMinima = 18;
const idadeCliente = 19;
console.log(idadeCliente >= idadeMinima ? "Cerveja":"Suco")


//Template Literal
const nome = "Julio"
const idade = 2021-1980
const cidadeNascimento = "Aracaju"
// const apresentacao = "Meu nome é "+nome+", e nasci em "+cidadeNascimento+" a "+idade+" anos"
const apresentacao = `Meu nome é ${nome}, e nasci em ${cidadeNascimento} a ${idade} anos`

console.log(apresentacao)


//Funções
function imprimeTexto(textoImprimir){
    console.log(textoImprimir)
}
imprimeTexto("Oi")
imprimeTexto(123456)

function somaDoiMaisDois(){
    return 2+2;
}
console.log(somaDoiMaisDois())

function imprimeTexto(textoImprimir){
    console.log(textoImprimir)
}
imprimeTexto(somaDoiMaisDois())

//Parametros e Argumentos
function somaParametros(num1, num2){
    return num1+num2
}
console.log(somaParametros(2,3));
console.log(somaParametros(1000,3456));
console.log(somaParametros("um", "dois"));
console.log(somaParametros("um", 2));

function multiplicaParametros(num1, num2){
    return num1*num2
}
console.log(multiplicaParametros(somaParametros(2,3), somaParametros(2,4)));

//Expressão de Função
const soma = function(numSoma1, numSoma2) {return numSoma1+numSoma2}
console.log(soma(1,1))

//Arrow Function =>
function apresentarArrow(nomeArrow){
    return `Meu nome é ${nomeArrow}`
}

const apresentarArrow2 = nomeArrow2 => `Meu nome é ${nomeArrow2}`
console.log(apresentarArrow2("Julio"));

// const somaArrow = (numArrow1, numArrow2) => numArrow1 + numArrow2
// console.log(somaArrow(2,3))

//Arrow Function =>   para funções mais longas deve-se utilizar as chaves e return
const somaArrow = (numArrow1, numArrow2) => {
    return numArrow1 + numArrow2}
console.log(somaArrow(2,3))