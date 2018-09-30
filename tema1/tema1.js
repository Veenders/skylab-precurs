// a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
function MyNameConsole(name) {
    console.log("Hello " + name + "!");
}
var myName = "Carles";
MyNameConsole(myName);

//b) Intenta retornar los valores en lugar de usar console.log
function MyNameReturn(name) {
    return "Hello " + name;
}
console.log(MyNameReturn(myName));

//c) Ahora, añade tu edad y concaténala al return
function MyAgeReturn(age) {
    return MyNameReturn(myName) + ", you're " + age + " years old";
}
var myAge = 40;
console.log(MyAgeReturn(myAge));

//d) Iguala tu función a una variable y ejecútala
var message = MyAgeReturn(myAge);
console.log(message);
//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados
function MyNameE() {
    return "Carles";
}

function MyAgeE() {
    return 40;
}
console.log(MyNameE() + " " + MyAgeE());

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
function MyName(name) {
    return name;
}

function MyAge(age) {
    return age;
}
console.log(MyName(myName) + " " + MyAge(myAge));

//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas
function MyPhrasse(name, age) {
    return MyName(name) + " " + MyAge(age);
}
console.log(MyPhrasse(myName, myAge));

//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
function RandomAge() {
    return Math.round(Math.random() * 100);
}

function MyMessage(name) {
    return MyName(name) + " " + MyAge(RandomAge());
}
console.log(MyMessage(myName));

//i) Al return de la función name(), concaténale otro mensaje
function NewMessage(name) {
    return MyName(name) + " aka, Veenders, " + MyAge(RandomAge()) + ", Sure you're Carles?";
}
console.log(NewMessage(myName));

//j) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
function SecondMessage(name) {
    return "The first function returns: " + MyName(name) + " aka, Veenders. The second function returns: " + MyAge(RandomAge()) + ", Sure you're Carles?";
}
console.log(SecondMessage(myName));

//k) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada
function ConditionalMessage(name) {
    if (name == myName) {
        return "The first function returns: " + MyName(name) + " aka, Veenders. The second function returns: " + MyAge(RandomAge()) + ", Sure you're Carles?";
    } else {
        return "The first function returns: " + MyName(name) + "... You aren't " + myName;
    }
}
console.log(ConditionalMessage(myName));
console.log(ConditionalMessage("Pepe"));