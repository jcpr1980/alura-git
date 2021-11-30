//Medias

let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5

//relacionando as notas no array Notas
const notas = [10, 6.5, 8, 7.5]

//adicionando um item no array
notas.push(2)
//deletando um item do array
notas.pop() //Remove o ultimo item do array - method sem param
notas.shift() //Remove o primeiro item do array - method sem param

let media1 = (nota1+nota2+nota3+nota4)/4
let media2 = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/notas.length
let media3 = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(notas)
console.log(media1)
console.log(media2)
console.log(media3)
console.log(notas.lastIndexOf)

const arrayVazia=[]

console.log(arrayVazia)
console.log(arrayVazia.length)

//Dividindo um array - slice()
const alunos = ['João', 'Juliana', 'Ana', 
'Caio', 'Laura', 'Marjorie', 'Guilherme', 
'Aline', 'Fabiana', 'Andre', 'Carlos', 
'Paulo', 'Bia', 'Vivian', 'Isabela', 
'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = alunos.slice(0, alunos.length/2)
const sala2 = alunos.slice(alunos.length/2)

console.log(`Todos os alunos: ${alunos}`)
console.log(alunos.length)
console.log(`Alunos da Sala 1: ${sala1}`)
console.log(sala1.length)
console.log(`Alunos da Sala 2: ${sala2}`)
console.log(sala2.length)

//Alterando um array com splice()
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

listaDeChamada.splice(1,2,'Rodrigo') //remove 2 itens a partir do item 1 e insere Rodrigo
console.log(listaDeChamada.length, `${listaDeChamada}`)
listaDeChamada.splice(2,0,'Rodrigo')
console.log(listaDeChamada.length, `${listaDeChamada}`)//Não remove ninguem e adiciona rodrigo na posição 2

//Concatenando arrays
const salasConcatenadas = sala1.concat(sala2)
console.log(salasConcatenadas)

//Array de duas dimensões

const listaAlunos = ['João', 'Juliana', 'Caio', 'Ana']
const listaNotas = [10,7,9,6]
let listaAlunosENotas = [listaAlunos, listaNotas]
console.log(`${listaAlunosENotas[0][0]}, sua nota é: ${listaAlunosENotas[1][0]}`)
console.log(`${listaAlunosENotas[0][1]}, sua nota é: ${listaAlunosENotas[1][1]}`)
console.log(`${listaAlunosENotas[0][2]}, sua nota é: ${listaAlunosENotas[1][2]}`)
console.log(`${listaAlunosENotas[0][3]}, sua nota é: ${listaAlunosENotas[1][3]}`)

//Localizando item no Array utilizando .includes() e .indexOf()
const exibeNomeNota = (nomeAluno) => {
    if (listaAlunosENotas[0].includes(nomeAluno)) {
        let indice = listaAlunosENotas[0].indexOf(nomeAluno)
        return listaAlunosENotas[0][indice] + '. sua nota é '
        + listaAlunosENotas[1][indice]
    }else{
        return "Aluno Não Encontrado"
    }
}
console.log(exibeNomeNota("Juliana"))
console.log(exibeNomeNota("Jose"))


//Imprimir lista usando o FOR

const listaDeNumeros = [100, 200, 300, 400, 500, 600]

for (let index = 0; index < listaDeNumeros.length; index++) {
    const element = listaDeNumeros[index];
    // console.log(listaDeNumeros[index])
    console.log(index, element)
}
//Calculando média utilizando o for
let somaNumeros = 0;

for (let index = 0; index < listaDeNumeros.length; index++) {
    somaNumeros += listaDeNumeros[index];
}
let mediaNumeros = somaNumeros/listaDeNumeros.length
console.log(mediaNumeros)

//Calculando média utilizando o FOREACH
let somaNumerosForeach = 0;
listaDeNumeros.forEach(element => {
    somaNumerosForeach += element
});
let mediaNumerosForeach = somaNumerosForeach/listaDeNumeros.length
console.log(mediaNumerosForeach)

//Listando Arrays com FOR
console.log("Listando Arrays com FOR")

const listaAlunosFor = ['João', 'Juliana', 'Caio', 'Ana']
const listaNotasFor = [10,7,9,6]
let listaAlunosENotasFor = [listaAlunosFor, listaNotasFor]

for (let index1 = 0; index1 < listaAlunosENotasFor.length; index1++) {
    for (let index2 = 0; index2 < listaAlunosENotasFor.length; index2++) {
        console.log(listaAlunosENotasFor[index1][index2])
    }
    
}

//Listando Arrays com FOREACH e Function
console.log(">>> Listando Arrays com FOREACH e Function <<<")

listaAlunosFor.forEach(imprimeNomes) //Por ser de callback, Foreach só irá funcionar se passar uma function

function imprimeNomes(nomes) {
    console.log(nomes)    
}

//Adicionando 1 ponto a cada nota utilizando o MAP()
console.log(">>> Adicionando 1 ponto a cada nota utilizando o MAP() <<<")
const listaNotasMap = [10, 9, 8, 7, 6]
const listaNotasMapAtualizada = listaNotasMap.map(
    nota => nota ==10? nota : ++nota
)
console.log('Notas Antigas: '+ listaNotasMap)
console.log(`Notas Antigas: ${listaNotasMap}`)
console.log('Notas Atualizadas: '+ listaNotasMapAtualizada)

//Alterando Arrays de String utilizando o MAP()
console.log(">>> Alterando Arrays de String utilizando o MAP() <<<")
let nomesAlunosDespadronizado = ['ana Julia', 'Caio Vinicius', 'BIA silva'];
let nomesAlunosPadronizado = nomesAlunosDespadronizado.map(
    nomes => nomes.toUpperCase()
)
console.log('Lista Nomes Despadronizada: '+ nomesAlunosDespadronizado)
console.log('Lista Nomes Padronizada: '+ nomesAlunosPadronizado)

//Filtrando Alunos por Nota utilizando FILTER()
console.log(">>> Filtrando Alunos por Nota utilizando FILTER()<<<")

const nomesAlunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notasAlunos = [7, 4.5, 8, 7.5]

const alunosReprovados = nomesAlunos.filter(
    (alunoRep, indice) => notasAlunos[indice] < 5
)
console.log(`Aluno Reprovado: ${alunosReprovados}`)

//Calculando média geral de todas as salas - REDUCE()
console.log(">>> Calculando média geral de todas as salas - REDUCE() <<<")

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSalas(notasDaSala) {

    const somaDasNotas = notasDaSala.reduce(
        (acum, atual) => atual + acum, 0
    )
    return somaDasNotas/notasDaSala.length
}
console.log(`Média da SalaJS: ${mediaSalas(salaJS)}`)
console.log(`Média da SalaJava: ${mediaSalas(salaJava)}`)
console.log(`Média da SalaPython: ${mediaSalas(salaPython)}`)


//Convertendo numero em String
console.log(">>> Convertendo numero em String <<<")
const numero = 256
const convertidoEmString = new String(numero)
// console.log(convertidoEmString, typeof(convertidoEmString))
console.log(convertidoEmString)



//Outros
console.log(">>> Outros <<<")
console.log("alura".charAt(3))

const palavra="Alura"
console.log(palavra.indexOf("a"))



//Formatando CPF
console.log(">>> Formatando CPF <<<")
const cpf = '07289260597'
const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")

console.log(cpfFormatado)