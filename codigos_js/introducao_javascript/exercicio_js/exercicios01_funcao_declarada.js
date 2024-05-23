// Ex 01
function showHelloWorld() {
    alert("Hello World!");
}
showHelloWorld();

// Ex 02
function sum(val1, val2) {
    return val1 + val2;
}
let result = sum(10, 20);
console.log("Soma =", result);

// Ex 03
function checkIfNumber(value) {
    if (typeof value === 'number') {
        console.log("É UM NÚMERO");
    } else {
        console.log("NÃO É UM NÚMERO");
    }
}
checkIfNumber(10);

// Ex 04
function checkIfString(value) {
    if (typeof value === 'string') {
        console.log("É UMA STRING");
    } else {
        console.log("NÃO É UMA STRING");
    }
}
checkIfString("é uma string");

// Ex 05
function checkIfBoolean(value) {
    if (typeof value === 'boolean') {
        console.log("É UM BOOLEAN");
    } else {
        console.log("NÃO É UM BOOLEAN");
    }
}
checkIfBoolean(true);

// Ex 06
function subtract(val1, val2) {
    return val1 - val2;
}
console.log("Subtração =", subtract(50, 20));

// Ex 07
function multiply(val1, val2) {
    return val1 * val2;
}
console.log("Multiplicação =", multiply(5, 20));

// Ex 08
function divide(val1, val2) {
    return val1 / val2;
}
console.log("Divisão =", divide(500, 20));

// Ex 09
function checkIfEven(value) {
    if (value % 2 === 0) {
        console.log("É PAR");
    } else {
        console.log("NÃO É PAR");
    }
}
checkIfEven(4);

// Ex 10
function checkIfOdd(value) {
    if (value % 2 !== 0) {
        console.log("É ÍMPAR");
    } else {
        console.log("NÃO É ÍMPAR");
    }
}
checkIfOdd(5);
