function sum(numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    result = result % 1 == 0 ? result : result.toFixed(3);
    return result;
}

function rest(numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result = i == 0 ? numbers[i] : result - numbers[i];
    }
    result = result % 1 == 0 ? result : result.toFixed(3);
    return result;
}

function mult(numbers) {
    var result = 1;
    for (var i = 0; i < numbers.length; i++) {
        result = result * numbers[i];
    }
    result = result % 1 == 0 ? result : result.toFixed(3);
    return result;
}

function div(numbers) {
    var result = 1;
    for (var i = 0; i < numbers.length; i++) {
        result = i == 0 ? numbers[i] : result / numbers[i];
    }
    result = result % 1 == 0 ? result : result.toFixed(3);
    return result;
}

function calculatorc(operation) {
    if (typeof operation == "number") {
        return operation * operation;
    }
    var resultphrase = "";
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        if (typeof arguments[i] == "object" || typeof arguments[i] == "array") {
            args = args.concat(arguments[i]);
        } else {
            args.push(arguments[i]);
        }
    }
    var numbers = [];
    switch (operation) {
        case "+":
        case "sum":
        case "sumar":
            resultphrase = "The sum of ";
            for (var i = 0; i < args.length; i++) {
                numbers[i] = args[i];
                if (i + 1 == args.length) {
                    resultphrase += args[i];
                } else {
                    resultphrase += args[i] + "+";
                }
            }
            resultphrase = numbers.length == 0 ? "No hay ningún valor para realizar la suma" : resultphrase + " is " + sum(numbers);
            return resultphrase;
            break;
        case "-":
        case "rest":
        case "restar":
            resultphrase = "The rest of ";
            for (var i = 0; i < args.length; i++) {
                numbers[i] = args[i];
                if (i + 1 == args.length) {
                    resultphrase += args[i];
                } else {
                    resultphrase += args[i] + "-";
                }
            }
            resultphrase = numbers.length == 0 ? "No hay ningún valor para realizar la resta" : resultphrase + " is " + rest(numbers);
            return resultphrase;
            break;
        case "*":
        case "mult":
        case "multiplicar":
            resultphrase = "The multiplication of ";
            for (var i = 0; i < args.length; i++) {
                numbers[i] = args[i];
                if (i + 1 == args.length) {
                    resultphrase += args[i];
                } else {
                    resultphrase += args[i] + "*";
                }
            }
            resultphrase = numbers.length == 0 ? "No hay ningún valor para realizar la multiplicación" : resultphrase + " is " + mult(numbers);
            return resultphrase;
            break;
        case "/":
        case "div":
        case "division":
            resultphrase = "The division of ";
            for (var i = 0; i < args.length; i++) {
                numbers[i] = args[i];
                if (i + 1 == args.length) {
                    resultphrase += args[i];
                } else {
                    resultphrase += args[i] + "/";
                }
            }
            resultphrase = numbers.length == 0 ? "No hay ningún valor para realizar la división" : resultphrase + " is " + div(numbers);
            return resultphrase;
            break;
        default:
            return "Operació Incorrecte";
    }
}
var cont = "y";
console.log(calculator(3));
console.log(calculator("+", 5, 3));
console.log(calculator("+", 5, 3, 5.5));
console.log(calculator("-", 5, 3));
console.log(calculator("-", 5, 3, 1));
console.log(calculator("*", 5, 3));
console.log(calculator("*", 5, 3, 2));
console.log(calculator("/", 5, 3));
console.log(calculator("/", 5, 3, 2));
/*console.log(calculator("x"));
console.log(calculator("y", 5, 3));
console.log(calculator("restar"));
console.log(calculator("+"));
console.log(calculator("*"));
console.log(calculator("/"));
*/
while (cont == "y") {
    cont = prompt("Do you want to continue?(y/n)");
    if (cont == "y") {
        var respuesta = prompt("Put the operation and the numbers (op,num1,num2,num3,...");
        console.log(calculator(respuesta.split(",")));
    } else {
        console.log("Thanks for using calculator");
    }
}

/* Feedback:
     - Incorrect: La calculadora ha de tenir la posibilitat de només introduir un numero
        Punts de millora: Molt de codi repetit (totes les funcions de sumar, multiplicar, dividir, etc)
        con exactamente igual només cambia un operador! Poso un exemple a vall de només la lógica de la
        calculadora de com podriem simplificar y treure molt de codi que hem duplicat.
     - Codi innecessari: Si fem servir un switch case y fem un return en cada case no es necessari fer un break,
       el return ja para la execució del switch i retorna un valor.
     - No fer us de dobles == fer servir ===.
*/

// Posible solució de la logica de operacions
  
  function calculator() {
    var functionByOperators = {
        '+': function (a,b) {return a + b},
        '-': function (a,b) {return a - b},
        '/': function (a,b) {return a / b},
        '*': function (a,b) {return a * b},
      }
    var availableOperators = ['+','-','*','/']
    var args = Array.from(arguments)
    var input = args.flat()
    var checkedOperator = availableOperators.includes(input[0])
    var numbers = input.slice(1)
    var checkedNum = []
    numbers.forEach(function(num) {
        checkedNum.push(!isNaN(num))
    });

    var areValidNums = !checkedNum.includes(false) 
    
    if(input.length === 1 && !isNaN(input[0])) {
      return Math.sqrt(input[0])
    } else if(numbers.length > 1 && areValidNums && checkedOperator) {
        var result;
        for(var i = 0; i < numbers.length; i++) {
            if(i==0){
                result=parseFloat(numbers[i])
            } else {
                result = functionByOperators[input[0]](result, parseFloat(numbers[i]))
            }
        }
        return result % 2 === 0 ? result : result.toFixed(2)
    } else {
      return new Error('Error input is not correct')
    }
  }
  
 console.log(calculator('*', 2, 'ñ'));
 console.log(calculator('+', 2,  2, 4));
 console.log(calculator('-', 2,  2, 2));
 console.log(calculator('/', 2,  2, 2));
 console.log(calculator('*', 2,  2, 2));

