// FILTER
// filtrar numeros maiores que 2

//const numeros = [1,2,3,4,5,6]

//const maioresQueDois = numeros.filter(numero => numero > 2)
//console.log(maioresQueDois)


// Filtrar nomes

//let nomes = ["Ana", "Bruno","Carlos","Eva","Fernanda"]

//let nomesLongos = nomes.filter(nome => nome.length > 5)
//console.log(nomesLongos)


// Filtrar números pares

//let numeros = [1,2,3,4,5,6,7,8,9,10]

//let pares = numeros.filter(numero => numero % 2 === 0)

//console.log(pares)

// Filtrar um Objeto

/*
let pessoas = [
    {nome: "Lucas", idade: 17},
    {nome: "Mariana", idade: 22},
    {nome: "Ana Catarina", idade: 15},
    {nome:"Juliana", idade: 30}
]

let adultos = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(adultos)


//FIND
//Retorna o primeiro elemento da lista correspondente a condição

// Procura um produto pelo preço

const produtos = [
    {id: 1, nome: "Teclado", preco: 100},
    {id: 2, nome: "Mouse" , preco: 50},
    {id: 3, nome: "Monitor", preco: 700}
]

const produtoCaro = produtos.find(produto => produto.preco > 600)
console.log(produtoCaro)



// Encontrar primeiro número maior que 10

let numeros = [5,8,12,20,3,15]

let encontrado = numeros.find(numero => numero > 10)
console.log(encontrado)

// Buscar por um nome pela primeira letra

let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Cátia"]

let nomeEncontrado = nomes.find(nome => nome. startsWith("C"))

console.log(nomeEncontrado)



// Multiplicar todos os n''umeros por 2

const numeros = [1,2,3,4,5]

    const numerosDobrados = numeros.map(numero => numero * 2)
     console.log(numerosDobrados)


     // Criando um array a partir de objetos
     
     let pessoas = [
        {nome: "Lucas", idade: 17},
        {nome: "Mariana", idade: 22},
        {nome: "Ana Catarina", idade: 15},
        {nome:"Juliana", idade: 30}
    ]

    let nomes = pessoas.map(pessoas => pessoas.nome)
    console.log(nomes)

    let mensagem - pessoas.map(pessoa => 
       
        `${pessoa.nome} tem ${pessoa.idade} anos.`
    )

    

    // Deixar os nomes em maiúsculo e adicionar um sufixo

    const nomes = ["ana", "bruno","carla"]

    const nomesMaiusculo = nomes.map(nome => "Colaborador: " + nome.toLocaleUpperCase())

    console.log(nomesMaiusculo)



// REDUCE

// Reduz um array a um único valor

// Somar todos os números do array

const numeros = [1,2,3,4,5]

// reduce (acumulador , auxiliar)
const soma = numeros.reduce((acumulador, numero) =>
    acumulador + numero, 0
)

console.log(soma)



// Verificar o maior número do array

const numeros = [10,5,8,20,3]

const maiorNumero = numeros.reduce((max, numero) => {
    if (numero > max) {
        return numero
    }else {
        return max
    }


}, numeros[0]
)
console.log(maiorNumero)



//  Contar a frequência de palavras

const palavras  = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]

const contagem = palavras.reduce((acumulador, palavra) => {
    acumuladr[palavra] = (acumulador[palavra] || 0) + 1
    return acumulador
}, {})

/Calcular média de notas

// const notas = [7, 8, 9, 6, 10]

// const media = notas.reduce((total, nota) => total + nota, 0) / notas.length

//USO COMBINADO
const usuarios = [
    {id: 1, nome: "Alice", idade: 25},
    {id: 2, nome: "Bob", idade: 30},
    {id: 3, nome: "Carol", idade: 20}
]

//Filtrar usuários com idade maior que 21
const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 21)

//Encontrar o primeiro usuário com idade maior que 21
const usuarioIdade = usuarios.find(usuario => usuario.idade > 21)

//Criar um array apenas com nomes de usuários
const nomeUsuarios = usuarios.map(usuario => usuario.nome)

//Somar todas as idades dos usuários usando o reduce
const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)

console.log("Maiores de Idade: ", maioresDeIdade)
console.log("Primeiro maior de idade: ", usuarioIdade)
console.log("Nomes de usuários: ", nomeUsuarios)
console.log("Soma de idades: ", somaIdades) 

*/