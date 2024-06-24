// Crie uma função que retorna a soma de todos os elementos de um array.
// Implemente a função de três formas diferentes: função declarada, expressão de função e arrow function.

// Função declarada
function somaArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

console.log(somaArray([1, 2, 3, 4, 5])); // 15

// Expressão de função
const somaArray = function(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
};

console.log(somaArray([1, 2, 3, 4, 5])); // 15

// Arrow function
const somaArray = (arr) => {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
};

console.log(somaArray([1, 2, 3, 4, 5])); // 15


// Crie uma função que encontre o maior valor em um array.
// Implemente a função de três formas diferentes: função declarada, expressão de função e arrow function.

// Função declarada
function maiorValor(arr) {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

console.log(maiorValor([3, 7, 1, 9, 4])); // 9

// Expressão de função
const maiorValor = function(arr) {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
};

console.log(maiorValor([3, 7, 1, 9, 4])); // 9

// Arrow function
const maiorValor = (arr) => {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
};

console.log(maiorValor([3, 7, 1, 9, 4])); // 9

// Crie uma função que inverte uma string.
// Implemente a função de três formas diferentes: função declarada, expressão de função e arrow function.

// Função declarada
function inverteString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

console.log(inverteString("JavaScript")); // tpircSavaJ

// Expressão de função
const inverteString = function(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
};

console.log(inverteString("JavaScript")); // tpircSavaJ

// Arrow function
const inverteString = (str) => {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
};

console.log(inverteString("JavaScript")); // tpircSavaJ

