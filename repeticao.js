// FOR
//Contando de 1 ate N
/*
let n = parseInt(prompt("Digite um número: "))

for(let i = 0; i <= n ; i++){

    console.log(i)
}

// Contagem  invertida N ate 1

for(let i = n; i >= 0 ; i--){


    console.log(i)
}

// WHILE
//Fazer uma soma

let soma = 0
let i = 1

while(i <= 10) {
    soma += i  // -> soma = soma = i


    console.log("O resultado atual é: " + soma)
    i++
}
console.log("A soma total dos 10 números é: " + soma)

// DO / WHILE


let numero = 1
do{
    console.log("Número: " + numero)
    numero++
}while(numero <= 5)


// FOREACH


let numeros = [1,2,3,4,5]

numeros.forEach(function(auxiliar){
    console.log("Número: " + auxiliar)
})

let frutas = ["maça" , "banana" , "uva" , "pêra"]
frutas.forEach(function(fruta) {
    console.log(fruta)
})

for(let i = 0; i < numeros.length; i++){
    console.log("Números " + numeros[i])
}

//Exercicios de Repetiçào

//Ex 1


let n = parseInt(prompt("Digite um número: "))

for(let i = 1; i <= 10 ; i++){
    console.log(i)
}

//Ex 2

let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}


//Ex 3

let N = parseInt(prompt("Digite um número natural N:"));

let soma = 0;

for (let i = 1; i <= N; i++) {
    soma += i;
}

console.log("A soma dos números de 1 até " + N + " é: " + soma);



//Ex 1 Inter

let = parseInt(prompt("Digite um número: "))

for(let i = 2; i <= 50 ; i++){

    if(i % 2 === 0){

    console.log(i)
}
}


// Ex 2 Inter

const segredo = Math.floor(Math.random() * 100) + 1;
let palpite;

while (palpite !== segredo) {
  palpite = Number(prompt("Adivinhe o número entre 1 e 100:"));
  if (!palpite && palpite !== 0) {
    alert("Digite um número válido!");
  } else if (palpite < segredo) {
    alert("Muito baixo!");
  } else if (palpite > segredo) {
    alert("Muito alto!");
  } else {
    alert("Parabéns! Você acertou!");
  }
}


// Ex 3 Inter
let regressiva = parseInt(prompt("Digite um número para contagem regressiva: "))

while (regressiva >= 1){

console.log(regressiva)

regressiva--;
}


// Ex 1 Avançado

let numero = Number(prompt("Digite um número inteiro positivo:"));

while (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
  numero = Number(prompt("Valor inválido. Digite um número inteiro positivo:"));
}

let soma = 0;

while (numero > 0) {
  soma += numero % 10;
  numero = Math.floor(numero / 10);
}

console.log("Soma dos dígitos: " + soma);



// Ex 2 Avançado

let n = Number(prompt("Digite um número inteiro não negativo:"));

while (isNaN(n) || n < 0 || !Number.isInteger(n)) {
  n = Number(prompt("Entrada inválida! Digite um número inteiro não negativo:"));
}

let fatorial = 1;

for (let i = 1; i <= n; i++) {
  fatorial *= i;
}

console.log(`O fatorial de ${n} é ${fatorial}`


// Ex 3 Avançado

let num = Number(prompt("Digite um número inteiro:"));
let invertido = 0;

while (num > 0) {
  invertido = invertido * 10 + (num % 10);
  num = Math.floor(num / 10);
}

console.log("Número invertido: " + invertido);



// Ex 4 Avançado

for (let n = 1; n <= 1000; n++) {
  let soma = 0;
  
  for (let i = 1; i < n; i++) {
    if (n % i === 0) soma += i;
  }

  if (soma === n) {
    console.log(n + " é um número perfeito");
  }
}

*/