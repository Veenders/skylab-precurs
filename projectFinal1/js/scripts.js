var pantalla = document.getElementById("pantalla");
var maxnum = 10;
var num1 = "";
var num2 = "";
var mem = "";
var operator = "";
var result = 0;

function AddNumber(num) {
    if (result == pantalla.value && result != 0) {
        pantalla.value = 0;
        num1 = 0;
    }
    var Content = pantalla.value;
    if (Content.length <= maxnum) {
        Content == 0 ? pantalla.value = num : pantalla.value = Content + num;
    }
}

function Calculator(operator) {
    var functionByOperators = {
        '+': function(a, b) { return a + b },
        '-': function(a, b) { return a - b },
        '/': function(a, b) { return a / b },
        '*': function(a, b) { return a * b },
    }
    operator != "=" ? operation = operator : "";
    if (num1 === "") {
        num1 = pantalla.value;
        pantalla.value = 0;
    } else {
        num2 = pantalla.value;
    }
    if (num2 != "" && operator != "") {
        result = functionByOperators[operation](parseFloat(num1), parseFloat(num2));
        pantalla.value = result;
        num1 = result;
        num2 = "";
    }
}

function LimpiarPantalla() {
    num1 = "";
    num2 = "";
    pantalla.value = 0;
    result = 0;
}