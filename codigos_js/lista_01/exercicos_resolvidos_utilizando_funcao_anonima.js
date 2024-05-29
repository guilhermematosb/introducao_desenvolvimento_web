// Ex 01
let showHelloWorld = function() {
    alert("Hello World!");
};
showHelloWorld();

// Ex 02
let sum = function(val1, val2) {
    return val1 + val2;
};
let result = sum(10, 20);
console.log("Soma =", result);

// Ex 03
let checkIfNumber = function(value) {
    if (typeof value === 'number') {
        console.log("É UM NÚMERO");
    } else {
        console.log("NÃO É UM NÚMERO");
    }
};
checkIfNumber(10);

// Ex 04
let checkIfString = function(value) {
    if (typeof value === 'string') {
        console.log("É UMA STRING");
    } else {
        console.log("NÃO É UMA STRING");
    }
};
checkIfString("é uma string");

// Ex 05
let checkIfBoolean = function(value) {
    if (typeof value === 'boolean') {
        console.log("É UM BOOLEAN");
    } else {
        console.log("NÃO É UM BOOLEAN");
    }
};
checkIfBoolean(true);

// Ex 06
let subtract = function(val1, val2) {
    return val1 - val2;
};
console.log("Subtração =", subtract(50, 20));

// Ex 07
let multiply = function(val1, val2) {
    return val1 * val2;
};
console.log("Multiplicação =", multiply(5, 20));

// Ex 08
let divide = function(val1, val2) {
    return val1 / val2;
};
console.log("Divisão =", divide(500, 20));

// Ex 09
let checkIfEven = function(value) {
    if (value % 2 === 0) {
        console.log("É PAR");
    } else {
        console.log("NÃO É PAR");
    }
};
checkIfEven(4);

// Ex 10
let checkIfOdd = function(value) {
    if (value % 2 !== 0) {
        console.log("É ÍMPAR");
    } else {
        console.log("NÃO É ÍMPAR");
    }
};
checkIfOdd(5);
