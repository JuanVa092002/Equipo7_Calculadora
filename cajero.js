const prompt = require('prompt-sync')();

let nombre = prompt('Ingrese su nombre: ');
console.log(`Hola ${nombre}, bienvenido a la calculadora.`);

// 1. Variable de control
let activo = true;

// 2. Aqui envolvemos todo que se repite en un bucle que se repite mientras activo sea true
while (activo) {
    
    // 3. Al inicio de cada vuelta, pregunta si quiere hacer otra operación
    let continuar = prompt('¿Desea hacer otra operación? (no para salir): ');
    if (continuar === 'no') {
        activo = false;
        break; // Salir del bucle
    }

    let num1 = parseFloat(prompt('Ingrese el primer número: '));
    let operacion = prompt('Ingrese la operación (+, -, *, /): ');
    let num2 = parseFloat(prompt('Ingrese el segundo número: '));

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
}

// 4. Cuando el bucle termine, muestra un mensaje de despedida.
console.log('¡Hasta luego!');