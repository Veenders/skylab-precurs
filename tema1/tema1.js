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
function StringExerciceF(lastname) {
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

//Arrays - Ejercicio B
function ArrayExerciceB(myCompleteNameArray) {
    var myLastNameArray = myCompleteNameArray.slice(myCompleteNameArray.indexOf(' ') + 1);
    return myLastNameArray;
}

/*
//Arrays - Ejercicio C
var positionName = '';
var myNameArray = myCompleteNameArray.slice(0, myCompleteNameArray.indexOf(' '));
for (var i = 0; i < myNameArray.length; i++) {
    positionName += (i + 1) + 'º ' + myNameArray[i] + ', ';
}
console.log(positionName);

//Arrays - Ejercicio D
var positionLastName = '';
for (var i = 0; i < myLastNameArray.length; i++) {
    positionLastName += (i + 1 + myNameArray.length) + 'º ' + myLastNameArray[i] + ', ';
}
console.log(positionLastName);

//Arrays - Ejercicio E
var initialsArray = [myCompleteNameArray[0]];
for (var i = 0; i < myCompleteNameArray.length; i++) {
    if (myCompleteNameArray[i] == " ") {
        initialsArray.push(myCompleteNameArray[i + 1]);
    }
}
console.log("My initials are " + initialsArray.join("."));

//Arrays - Ejercicio F
var myAge = 40;
var myPersonalData = [myName, lastName, myAge];
console.log("My name is " + myPersonalData[0] + ' and I\'m ' + myPersonalData[2] + ' old.');

//Arrays - Ejercicio G
function CityAdd(city) {
    myPersonalData.push(city);
}
CityAdd('Granollers');
console.log('City added to array! => ' + myPersonalData);

//Array - Ejercicio H
function CityRemove(city) {
    var index = myPersonalData.indexOf(city);
    delete myPersonalData.splice(index, 1);
}
CityRemove('Granollers');
console.log('City removed from array! => ' + myPersonalData);

//Array - Ejercicio J
CityRemove(myName);
console.log('Name removed from array! => ' + myPersonalData);

//Array - Ejercicio K
myPersonalData.unshift(myName);
console.log('Name added to array! => ' + myPersonalData);

//Array - Ejercicio L
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiple(num) {
    return num * this;
}
console.log(numbers.map(multiple, 2));

//Array - Ejercicio L1
console.log(numbers.map(multiple, 3));

//Array - Ejercicio M
console.log(numbers.sort(function(a, b) { return b - a }));

//Array - Ejercicio N
function ContarLetras(array, letra) {
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == letra) {
            index++;
        }
    }
    return index;
}
var resultContar = [];
for (var i = 0; i < myCompleteNameArray.length; i++) {
    var contador = ContarLetras(myCompleteNameArray, myCompleteNameArray[i]);
    if (contador > 1) {
        resultContar[myCompleteNameArray[i]] = contador;
    }
}
console.log(resultContar);

//Array - Ejercicio N1
var resultName = []
for (var i = 0; i < myCompleteNameArray.length; i++) {
    var contador = ContarLetras(myCompleteNameArray, myCompleteNameArray[i]);
    if (contador == 1) {
        resultName.push(myCompleteNameArray[i]);
    }
}
console.log(myCompleteNameArray.join('') + ", the Letters => " + resultName + " are not repeated, the name is " + resultName.join(''));

//Numbers - Ejercicio A
var date = new Date();
console.log(date);
*/
var myName = "Carles";
var myCompleteName = "Carles Vila";

console.log(StringExerciceA(myName));
console.log(StringExerciceB(myCompleteName));
console.log(StringExerciceC(myCompleteName));
console.log(StringExerciceD(myCompleteName));
var lastNameTest = StringExerciceD1(myCompleteName);
var lastName = lastNameTest[0];
console.log(lastNameTest[1]);
var mrNameTest = StringExerciceE(myCompleteName);
var mrName = mrNameTest[0]
console.log(mrNameTest[1]);
console.log(StringExerciceF(lastName));
console.log(StringExerciceG(myName, lastName));
console.log(StringExerciceH(myCompleteName));
var myCompleteNameArray = ArrayExerciceA(myCompleteName);
console.log(myCompleteNameArray.join('/'));
var myLastNameArray = ArrayExerciceB(myCompleteNameArray);
console.log(myLastNameArray.join('|'));