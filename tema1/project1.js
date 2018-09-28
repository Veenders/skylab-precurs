function sum(numbers) {
    var result = 0;
    for (var i = 1; i < numbers.length; i++) {
        result += numbers[i];
    }
    result = result % 1 == 0 ? result : result.toFixed(3);
    return result;
}

function rest(numbers) {
    var result = 0;
    for (var i = 1; i < numbers.length; i++) {
        result = i == 1 ? numbers[i] : result - numbers[i];
    }
    result = result % 1 == 0 ? result : result.toFixed(3);
    return result;
}

function mult(numbers) {
    var result = 1;
    for (var i = 1; i < numbers.length; i++) {
        result = result * numbers[i];
    }
    result = result % 1 == 0 ? result : result.toFixed(3);
    return result;
}

function div(numbers) {
    var result = 1;
    for (var i = 1; i < numbers.length; i++) {
        result = i == 1 ? numbers[i] : result / numbers[i];
    }
    result = result % 1 == 0 ? result : result.toFixed(3);
    return result;
}

function calculator(operation) {
    if (typeof operation == "number") {
        return operation * operation;
    }
    var resultphrase = "";
    var numbers = [];
    switch (operation) {
        case "+":
        case "sum":
        case "sumar":
            resultphrase = "The sum of ";
            for (var i = 1; i < arguments.length; i++) {
                numbers[i] = arguments[i];
                if (i + 1 == arguments.length) {
                    resultphrase += arguments[i];
                } else {
                    resultphrase += arguments[i] + "+";
                }
            }
            resultphrase = numbers.length == 0 ? "No hay ningún valor para realizar la suma" : resultphrase + " is " + sum(numbers);
            return resultphrase;
            break;
        case "-":
        case "rest":
        case "restar":
            resultphrase = "The rest of ";
            for (var i = 1; i < arguments.length; i++) {
                numbers[i] = arguments[i];
                if (i + 1 == arguments.length) {
                    resultphrase += arguments[i];
                } else {
                    resultphrase += arguments[i] + "-";
                }
            }
            resultphrase = numbers.length == 0 ? "No hay ningún valor para realizar la resta" : resultphrase + " is " + rest(numbers);
            return resultphrase;
            break;
        case "*":
        case "mult":
        case "multiplicar":
            resultphrase = "The multiplication of ";
            for (var i = 1; i < arguments.length; i++) {
                numbers[i] = arguments[i];
                if (i + 1 == arguments.length) {
                    resultphrase += arguments[i];
                } else {
                    resultphrase += arguments[i] + "*";
                }
            }
            resultphrase = numbers.length == 0 ? "No hay ningún valor para realizar la multiplicación" : resultphrase + " is " + mult(numbers);
            return resultphrase;
            break;
        case "/":
        case "div":
        case "division":
            resultphrase = "The division of ";
            for (var i = 1; i < arguments.length; i++) {
                numbers[i] = arguments[i];
                if (i + 1 == arguments.length) {
                    resultphrase += arguments[i];
                } else {
                    resultphrase += arguments[i] + "/";
                }
            }
            resultphrase = numbers.length == 0 ? "No hay ningún valor para realizar la multiplicación" : resultphrase + " is " + div(numbers);
            return resultphrase;
            break;
        default:
            return "Operació Incorrecte";
    }
}
console.log(calculator(3));
console.log(calculator("+", 5, 3));
console.log(calculator("sum", 5, 3));
console.log(calculator("sumar", 5, 3));
console.log(calculator("+", 5, 3, 5.5));
console.log(calculator("sum", 5, 3, 5));
console.log(calculator("sumar", 5, 3, 5));
console.log(calculator("-", 5, 3));
console.log(calculator("rest", 5, 3));
console.log(calculator("restar", 5, 3));
console.log(calculator("-", 5, 3, 1));
console.log(calculator("rest", 5, 3, 1));
console.log(calculator("restar", 5, 3, 1));
console.log(calculator("*", 5, 3));
console.log(calculator("mult", 5, 3));
console.log(calculator("multiplicar", 5, 3));
console.log(calculator("*", 5, 3, 2));
console.log(calculator("mult", 5, 3, 2));
console.log(calculator("multiplicar", 5, 3, 2));
console.log(calculator("/", 5, 3));
console.log(calculator("div", 5, 3));
console.log(calculator("division", 5, 3));
console.log(calculator("/", 5, 3, 2));
console.log(calculator("div", 5, 3, 2));
console.log(calculator("division", 5, 3, 2));
console.log(calculator("hola"));
console.log(calculator("x"));
console.log(calculator("y", 5, 3));
console.log(calculator("restar"));
console.log(calculator("+"));
console.log(calculator("*"));
console.log(calculator("/"));