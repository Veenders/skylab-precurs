var pantalla = document.getElementById("pantalla");
var maxnum = 10;
var num1 = "";
var num2 = "";
var mem = "";
var operation = "";
var result = 0;
var op = false;

function AddNumber(num) {
    if (result == pantalla.value && result != 0) {
        pantalla.value = 0;
    }
    var Content = pantalla.value;
    if (num != "." || num == "." && Content.indexOf('.') == -1) {
        if (Content.length <= maxnum) {
            Content === "0" && num != "." ? pantalla.value = num : pantalla.value = Content + num;
        }
    }
}

function Memory() {
    if (op) {
        pantalla.value = mem;
    } else {
        mem = parseFloat(pantalla.value);
        pantalla.value = 0;
    }
}

function Calculator(operator) {
    var functionByOperators = {
        '+': function(a, b) { return a + b },
        '-': function(a, b) { return a - b },
        '/': function(a, b) { return a / b },
        '*': function(a, b) { return a * b },
    }
    if (num1 === "") {
        num1 = parseFloat(pantalla.value);
        pantalla.value = 0;
    } else {
        num2 = parseFloat(pantalla.value);
    }
    if (num2 != "" && operator != "") {
        result = functionByOperators[operation](num1, num2);
        pantalla.value = result;
        num1 = result;
        num2 = "";
    }
    operator != "=" ? op = true : op = false;
    operator != "=" ? operation = operator : num1 = "";
}

function LimpiarPantalla() {
    num1 = "";
    num2 = "";
    pantalla.value = 0;
    result = 0;
}