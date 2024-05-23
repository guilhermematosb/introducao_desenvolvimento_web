// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".


// -----------------------------------------------------------------------------------------------------------------------------------------

// Ex 01
// console.log("Hello World!")
// alert("Hello World!")

// Ex 02
let valor01 = 10
let valor02 = 20
let soma = valor01 + valor02
// console.log(typeof soma);
// console.log("Soma = ", soma);

let soma2 = Number(valor01) + Number(valor02)
// console.log("Soma2 = ", soma2);

if (typeof valor01 == "number" && typeof valor02 == "number") {
    // console.log("Soma3 = ",valor01 + valor02);
} else {
    // console.log("Não é number");
}

// Ex 03
let numero = "10"
let tipoVariavel = typeof numero

let isNumber = "number"
if (tipoVariavel == isNumber) {
    //console.log("É UM NÚMERO");
} else {
    //console.log("NÃO É UM NÚMERO");
}

// Ex 04
let string = "é uma string"
// console.log(typeof string);
if (typeof string == "string") {
    // console.log("É UMA STRING");
} else {
    // console.log("NÃO É UMA STRING");
}

// Ex 05
let bolleano = true
// console.log(bolleano);
if (typeof bolleano == "boolean") {
    // console.log("É UM BOOLEAN");
} else {
    // console.log("NÃO É UM BOOLEAN");
}

// Ex 06
let valor03 = "50"
let valor04 = 20
let subtracao = valor03 - valor04

// console.log("Subtração = " + subtracao);

// Ex 07
let valor05 = 5
let valor06 = 20
let multiplicao = valor03 * valor04

// console.log(multiplicao);

// Ex 08
let valor07 = 500
let valor08 = 20
let divisao = valor07 / valor08

// console.log(divisao);

// Ex 09
let valor09 = 5
let isPar = valor09 % 2 == 0

// isPar ? console.log("É PAR") : console.log("NÃO É PAR"); 

// if (isPar) {
//     console.log("É PAR");
// } else {
//     console.log("NÃO É PAR");
// }

// EX 10
let valor010 = 5
let isImpar = valor010 % 2 == 0
!isImpar ? console.log("É impar") : console.log("NÃO É impar")

// let isImpar2 = valor010 % 2 != 0
// isImpar2 ? console.log("É impar") : console.log("NÃO É impar")