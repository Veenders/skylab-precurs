//Strings - Ejercicio A - Puedes contar cuantas letras tiene tu nombre?
function StringExerciceA(myName) {
    return "My name length is " + myName.length;
}

//Strings - Ejercicio B - Añade tu apellido e indica en que posición se encuentra
function StringExerciceB(myCompleteName) {
    var position = myCompleteName.indexOf(' ') + 1;
    return "My lastname starts on position: " + position;
}

//Strings - Ejercicio C - Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
function StringExerciceC(myCompleteName) {
    return "My name is " + myCompleteName.slice(0, myCompleteName.indexOf(' '));
}

//Strings - Ejercicio D - Ahora, solo tu apellido.
function StringExerciceD(myCompleteName) {
    return "My lastname is " + myCompleteName.slice(myCompleteName.indexOf(' ') + 1);
}

//Strings - Ejercicio D1 - Iguala el resultado a una variable nueva e imprímela por pantalla.
function StringExerciceD1(myCompleteName) {
    var lastName = myCompleteName.slice(myCompleteName.indexOf(' ') + 1)
    return [lastName, "My name is " + lastName + ", " + myCompleteName];
}

//Strings - Ejercicio E - Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
function StringExerciceE(myCompleteName) {
    var mrName = myCompleteName.replace(myName, "Mr.")
    return [mrName, "Dear " + mrName + ";"];
}

//Strings - Ejercicio F - Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
function StringExerciceF(lastName) {
    return "My lastname is " + lastName.toUpperCase();
}

//Strings - Ejercicio G - Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
function StringExerciceG(myName, lastName) {
    return myName.concat(" ", lastName) + " are awesome!!";
}


//Strings - Ejercicio H - Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
function StringExerciceH(myCompleteName) {
    var initials = myCompleteName.charAt(0);
    for (var i = 0; i < myCompleteName.length; i++) {
        if (myCompleteName[i] == " ") {
            initials += "." + myCompleteName[i + 1];
        }
    }
    return "My initials are " + initials.toUpperCase();
}


//Arrays - Ejercicio A - Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
function ArrayExerciceA(myCompleteName) {
    var myCompleteNameArray = [];
    for (var i = 0; i < myCompleteName.length; i++) {
        myCompleteNameArray.push(myCompleteName[i]);
    }
    return myCompleteNameArray;
}

//Arrays - Ejercicio B - Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
function ArrayExerciceB(myCompleteNameArray) {
    var myLastNameArray = myCompleteNameArray.slice(myCompleteNameArray.indexOf(' ') + 1);
    return myLastNameArray;
}


//Arrays - Ejercicio C - Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
function ArrayExerciceC(myCompleteNameArray) {
    var result = '';
    var myNameArray = myCompleteNameArray.slice(0, myCompleteNameArray.indexOf(' '));
    for (var i = 0; i < myNameArray.length; i++) {
        result += (i + 1) + 'º ' + myNameArray[i] + ', ';
    }
    return [myNameArray, result];
}

//Arrays - Ejercicio D -Como en el ejercicio anterior, pero seleccionando tu apellido
function ArrayExerciceD(myLastNameArray, nameLength) {
    var result = '';
    for (var i = 0; i < myLastNameArray.length; i++) {
        result += (i + 1 + nameLength) + 'º ' + myLastNameArray[i] + ', ';
    }
    return result;
}

//Arrays - Ejercicio E - Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
function ArrayExerciceE(myCompleteNameArray) {
    var initialsArray = [myCompleteNameArray[0]];
    for (var i = 0; i < myCompleteNameArray.length; i++) {
        if (myCompleteNameArray[i] == " ") {
            initialsArray.push(myCompleteNameArray[i + 1]);
        }
    }
    return "My initials are " + initialsArray.join(".");
}

//Arrays - Ejercicio F - Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
function ArrayExerciceF(myPersonalData) {
    return "My name is " + myPersonalData[0] + ' and I\'m ' + myPersonalData[2] + ' old.';
}

//Arrays - Ejercicio G - Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
function ArrayExerciceG(city) {
    myPersonalData.push(city);
    return 'City added to array! => ' + myPersonalData
}

//Array - Ejercicio H - Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
function ArrayExerciceH(city) {
    var index = myPersonalData.indexOf(city);
    delete myPersonalData.splice(index, 1);
    return 'City removed from array! => ' + myPersonalData;
}

//Array - Ejercicio J -Ahora, elimina el nombre y asegura los cambios
function ArrayExerciceJ(name) {
    var index = myPersonalData.indexOf(name);
    delete myPersonalData.splice(index, 1);
    return 'Name removed from array! => ' + myPersonalData;
}

//Array - Ejercicio K - Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?
function ArrayExerciceK(myName) {
    myPersonalData.unshift(myName);
    return 'Name added to array! => ' + myPersonalData;
}

//Array - Ejercicio L - Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
function ArrayExerciceL(num) {
    return num * 2;
}

//Array - Ejercicio L1 - Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
function ArrayExerciceL1(num) {
    return num * this;
}

//Array - Ejercicio M - Podrías mostrarlos en el orden inverso?
function ArrayExerciceM(numbers) {
    return numbers.sort(function(a, b) { return b - a });
}


//Array - Ejercicio N - Puedes indicarme que letras se repiten de tu nombre y cuantas veces?
function ContarLetras(array, letra) {
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == letra) {
            index++;
        }
    }
    return index;
}

function MostrarRepeticiones(objeto) {
    var resultado = "";
    for (var i in objeto) {
        if (objeto.hasOwnProperty(i)) {
            resultado += "La letra " + i + " se repite " + objeto[i] + " veces.\n";
        }
    }
    return resultado;
}

function ArrayExerciceN(myCompleteNameArray) {
    var resultContar = [];
    for (var i = 0; i < myCompleteNameArray.length; i++) {
        var contador = ContarLetras(myCompleteNameArray, myCompleteNameArray[i]);
        if (contador > 1) {
            resultContar[myCompleteNameArray[i]] = contador;
        }
    }
    return MostrarRepeticiones(resultContar);
}

//Array - Ejercicio N1 -Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras
function ArrayExerciceN1(myCompleteNameArray) {
    var resultName = []
    for (var i = 0; i < myCompleteNameArray.length; i++) {
        var contador = ContarLetras(myCompleteNameArray, myCompleteNameArray[i]);
        if (contador == 1) {
            resultName.push(myCompleteNameArray[i]);
        }
    }
    return myCompleteNameArray.join('') + ", the Letters => " + resultName + " are not repeated, the name is " + resultName.join('');
}


//Numbers - Ejercicio A - Que hora es? Declara la hora como número y devuelvela como String
function NumbersExerciceA(hour) {
    var zoneday = '';
    switch (true) {
        case hour > 7 && hour < 14:
            zoneday = " in the Morning";
            break;
        case hour > 14 && hour < 18:
            zoneday = " in the Afternoon";
            break;
        case hour > 18 && hour < 21:
            zoneday = " in the evening";
            break;
        default:
            zoneday = "at night"
    }
    return "it's " + hour + zoneday;
}

//Numbers - Ejercicio B - Nono, que hora exactamente? Dime la hora sin minutos

function NumbersExerciceB(hour) {
    var zoneday = '';
    switch (true) {
        case hour > 7 && hour < 14:
            zoneday = " in the Morning";
            break;
        case hour > 14 && hour < 18:
            zoneday = " in the Afternoon";
            break;
        case hour > 18 && hour < 21:
            zoneday = " in the evening";
            break;
        default:
            zoneday = "at night"
    }
    return "it's " + Math.floor(hour) + zoneday;
}

//Numbers - Ejercicio C - Ahora, declara tu hora y muéstrala redondeada.
function NumbersExerciceC(hour) {
    var zoneday = '';
    switch (true) {
        case hour > 7 && hour < 14:
            zoneday = " in the Morning";
            break;
        case hour > 14 && hour < 18:
            zoneday = " in the Afternoon";
            break;
        case hour > 18 && hour < 21:
            zoneday = " in the evening";
            break;
        default:
            zoneday = "at night"
    }
    return "it's " + Math.round(hour) + zoneday;
}

//Numbers - Ejercicio D - Hagamos una calculadora. Primero, la suma.
function sum(a, b) {
    return a + b;
}

function NumbersExerciceD(a, b) {
    var result = sum(a, b);
    return "The sum of " + a + "+" + b + " is " + result;
}

//Numbers - Ejercicio D1 - Añade la resta...
function rest(a, b) {
    return a - b;
}

function NumbersExerciceD1(a, b) {
    var resultsum = sum(a, b);
    var resultrest = rest(a, b);
    return "The sum and rest of " + a + " and " + b + " is " + resultsum + " and " + resultrest;
}

//Numbers - Ejercicio D2 - y la multiplicación
function mult(a, b) {
    return a * b;
}

function NumbersExerciceD2(a, b) {
    var resultsum = sum(a, b);
    var resultrest = rest(a, b);
    var resultmult = mult(a, b);
    return "The sum, rest and multiplication of " + a + " and " + b + " is " + resultsum + ", " + resultrest + " and " + resultmult;
}

//Numbers - Ejercicio D3 - por último, la división
function div(a, b) {
    return a / b;
}

function NumbersExerciceD3(a, b) {
    var resultsum = sum(a, b);
    var resultrest = rest(a, b);
    var resultmult = mult(a, b);
    var resultdiv = div(a, b);
    return "The sum, rest, multiplication and division of " + a + " and " + b + " is " + resultsum + ", " + resultrest + ", " + resultmult + " and " + resultdiv;
}

//Numbers - Ejercicio D4 - Ahora, intenta multiplicar un número por una string, que devuelve?
function NumbersExerciceD4(a, b) {
    var resultsum = sum(a, b);
    var resultrest = rest(a, b);
    var resultmult = mult(a, b);
    var resultdiv = div(a, b);
    return "The sum, rest, multiplication and division of " + a + " and " + b + " is " + resultsum + ", " + resultrest + ", " + resultmult + " and " + resultdiv;
}

//Numbers - Ejercicio E - Podemos controlar este error con un condicional if?

function NumbersExerciceE(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        var resultsum = sum(a, b);
        var resultrest = rest(a, b);
        var resultmult = mult(a, b);
        var resultdiv = div(a, b);
        return "The sum, rest, multiplication and division of " + a + " and " + b + " is " + resultsum + ", " + resultrest + ", " + resultmult + " and " + resultdiv;
    } else {
        return "You can't do this operation";
    }
}

//Declaració de Variables Globals
var myName = "Carles";
var myCompleteName = "Carles Vila";
var myAge = 40;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var hour = 16.15;
var a = 7;
var b = 3;
var lastName = StringExerciceD1(myCompleteName);
var mrName = StringExerciceE(myCompleteName);
var myCompleteNameArray = ArrayExerciceA(myCompleteName);
var myLastNameArray = ArrayExerciceB(myCompleteNameArray);
var myNameArray = ArrayExerciceC(myCompleteNameArray);
var myPersonalData = [myName, lastName[0], myAge];



//Execució de Funcions.
console.log(StringExerciceA(myName));
console.log(StringExerciceB(myCompleteName));
console.log(StringExerciceC(myCompleteName));
console.log(StringExerciceD(myCompleteName));
console.log(lastName[1]);
console.log(mrName[1]);
console.log(StringExerciceF(lastName[0]));
console.log(StringExerciceG(myName, lastName[0]));
console.log(StringExerciceH(myCompleteName));
console.log(myCompleteNameArray.join('/'));
console.log(myLastNameArray.join('|'));
console.log(myNameArray[1]);
console.log(ArrayExerciceD(myLastNameArray, myNameArray[0].length));
console.log(ArrayExerciceE(myCompleteNameArray));
console.log(ArrayExerciceF(myPersonalData));
console.log(ArrayExerciceG('Granollers'));
console.log(ArrayExerciceH('Granollers'));
console.log(ArrayExerciceJ(myName));
console.log(ArrayExerciceK(myName));
console.log(numbers.map(ArrayExerciceL));
console.log(numbers.map(ArrayExerciceL1, 3));
console.log(ArrayExerciceM(numbers));
console.log(ArrayExerciceN(myCompleteNameArray));
console.log(ArrayExerciceN1(myCompleteNameArray));
console.log(NumbersExerciceA(hour));
console.log(NumbersExerciceB(hour));
console.log(NumbersExerciceC(hour));
console.log(NumbersExerciceD(a, b));
console.log(NumbersExerciceD1(a, b));
console.log(NumbersExerciceD2(a, b));
console.log(NumbersExerciceD3(a, b));
console.log(NumbersExerciceD4(a, "hour"));
console.log(NumbersExerciceE(a, "hour"));