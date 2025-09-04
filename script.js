
/*


// Exercicio 1


let idade = prompt("Digite sua idade!: ")
if(idade >= 18) {


    console.log ("Maior de  Idade!")
    alert("Maior de Idade")


} else if (idade < 18) {
    console.log("Menor de Idade")
    alert("menor de idade")
}
    else {
        alert("Dado Insuficiente")
   
}

// Ex 2


let valor = prompt("Digite um Número!")

if( valor > 0) {


   console.log ("Número Positivo")
    alert("Número Positvo")


}else if (valor < 0){
    console.log("Número Negativo")
    alert("Número Negativo")

} else {
    console.log("Negativo")
    alert("Negativo")
}



// Ex 3

let nota = parseInt(prompt("Digite a nota: "))

if(nota >= 60) {
    console.log ("Aprovado(a)!")
} else {
    console.log("Reprovado(a)!")
}


// Ex 4

let valor = prompt("Digite um Número!")

if( valor > 0) {
   console.log ("Número Positivo")
    alert("Número Positvo")


}else if (valor < 0){
    console.log("Número Negativo")
    alert("Número Negativo")

} else {
    console.log("Zero")
    alert("Zero")
}


// Ex 5

let idade =parseInt( prompt("Digite sua idade!: "))
if(idade >= 0 && idade <= 12) {

    console.log ("Criança!")
    alert("Criança")
} else 
    if(idade >= 13 && idade <= 17){
    console.log("Adolecente")
   alert("Adolecente")

} 
else 
    if(idade >= 18){
    console.log("Adulto")
    alert("Adulto")
}
else {
    alert("Idade Inválida")

}



//Ex 6


let valor = parseInt(prompt("Digite um número:"));

if (isNaN(valor)) {
    alert("Valor inválido!");
} else if (valor % 2 === 0) {
    alert("Par");
    console.log("Par");
} else {
    alert("Ímpar");
    console.log("Ímpar");
}



// Ex 1 inter

let numeroA = prompt("Digite o primeiro número")
let numeroB = prompt("Digite o segundo número")
let operacao = prompt("Insira a operação")

if(operacao == "+")
    alert("Resultado = " +  (numeroA + numeroB))

else if (operacao == "-")
     alert("Resultado = " +  (numeroA - numeroB))

 else if (operacao == "*" || operacao == "x")
     alert("Resultado = " +  (numeroA * numeroB))

 else if (numeroB == 0)
     alert("Não pode dividir por zero")

 else
     alert("Resultado = " +  (numeroA / numeroB))




// Ex 2 inter

 let numeroA = prompt("insira o primeiro numero")
 let numeroB = prompt("insira o segundo numero")
 let numeroC = prompt("insira o terceiro número")

 numeroA = parseInt(numeroA)
 numeroB = parseInt(numeroB)
 numeroC = parseInt(numeroC)


 if(numeroA >= numeroB && numeroA >= numeroC)
     console.log("O maior numero é " + numeroA)

 else if(numeroB >= numeroC)
     console.log("O maior numero é " + numeroB)

 else
     console.log("O maior numero é " + numeroC)



// Ex 3 inter


 let valor = prompt("Insira o valor")
 valor = parseInt (valor)


 if(valor > 100)
 console.log("O desconto será de R$" + valor * 0.1 + "Totalizado R$" + valor * 0.9)

 else
     console.log("Nenhum desconto disponivel. Total R$" + valor)




// Ex 4 Inter

 let usuario = prompt("insira o nome do usuário")
 let senha = prompt("digite a senha")

 if(usuario == "admin" && senha == "1234")
     console.log("Login bem-sucedido")

 else
     console.log("Acesso Negado")

 

 // EX 1 Avançado

  let ladoA = prompt("Digite Lado A")
  let ladoB = prompt("Digite Lado B")
  let ladoC = prompt("Digite Lado C")

 ladoA = parseInt (ladoA)
 ladoB = parseInt (ladoB)
 ladoC = parseInt (ladoC)

// // 3 + 4 <= 5 (false)          3 + 5 <= 4 (false)          4 + 5 <= 3 (false) 
 if(ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA)
     console.log("Não é um trilangulo")

 else if (ladoA == ladoB && ladoB == ladoC)
     console.log("Triangulo Equilatero")

 else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC)
     console.log("triangulo Isóceles")

 else
     console.log("escaleno")



// Ex 2 Avançado


 let nota = prompt("insira a nota")
 nota = parseInt(nota)

 if(nota > 100 || nota < 0)
     console.log("Digite novamente uma nota válida")

 else
 {
     switch (true)
     {
         case (nota >= 90) :
             console.log("A")
         break

         case (nota >= 80) :
             console.log("B")
         break
         case (nota >= 70) :
             console.log("C")
         break

         case (nota >= 60) :
             console.log("D")
         break

         default:
             console.log("F")

     }
 }



// Ex 3 Avançado

 let altura = prompt("digite a altura")
 let peso = prompt("digite o peso")

 altura = parseFloat(altura)
 peso = parseFloat(peso)

 const imc = peso / (altura * altura)

 if(imc <18.5)
  console.log("Magreza")


 else if(imc <=24.9)
 console.log("Normal")

 else if(imc <=29.9)
 console.log("Sobrepeso")

 else if(imc <=39.9)
 console.log("Obesidade")

 else 
 console.log("Obesidade Grave")

 */

 // Ex 4 Avançado

 let ano = prompt("Digite o ano")

ano = parseInt(ano)


if( (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0)
    console.log("O ano " + ano + " é bissexto")

else
    console.log("O ano não é bissexto");