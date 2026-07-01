const prompt = require('prompt-sync')();

let nombre = prompt('Ingrese su nombre: ');
console.log(`Hola ${nombre}, bienvenido a la calculadora.`);


// Operacion de calculadora básica en JavaScript. El código solicita al usuario que ingrese dos números y una operación matemática (suma, resta, multiplicación o división). Luego, realiza la operación correspondiente y muestra el resultado. Además, maneja el caso de división por cero y operaciones no válidas.
let num1 = parseFloat(prompt('Ingrese el primer número: '));
let operacion = prompt('Ingrese la operación (+, -, *, /): ');
let num2 = parseFloat(prompt('Ingrese el segundo número: '));
// let resultado = num1 + num2;
// console.log(`El resultado es ${resultado}`);

switch (operacion) {
    case '+':
        resultado = num1 + num2;
    break;
    case '-':
        resultado = num1 - num2;
    break;
    case '*':
        resultado = num1 * num2;
    break;
    case '/':
        if(num2 === 0){
            console.log('Error: No se puede dividir entre cero.');
        process.exit();
        }
        resultado = num1 / num2;
    break;
default:
    console.log('Operación no válida.');
    process.exit();
}
console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);