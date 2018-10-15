//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.
function showNums() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < nums.length - 1; i++) {
        console.log(i + 1 + "ª pareja " + nums[i] * 2 + " - " + nums[i + 1] * 2);
    }
}
console.log("Ejercicio A");
showNums();

//a1) La funcion debería aceptar la array a tratar como argumento
function showNumsArg() {
    var nums = arguments;
    for (var i = 0; i < nums.length - 1; i++) {
        console.log(i + 1 + "ª pareja " + nums[i] * 2 + " - " + nums[i + 1] * 2);
    }
}
console.log("Ejercicio A1")
showNumsArg(1, 2, 3, 4, 5, 6, 7, 8, 9);

//a2) Pasa también el numero a multiplicar a la función como argumento
function showNumsMult() {
    var nums = arguments;
    for (var i = 0; i < nums.length - 2; i++) {
        console.log(i + 1 + "ª pareja " + nums[i] * nums[nums.length - 1] + " - " + nums[i + 1] * nums[nums.length - 1]);
    }
}
console.log("Ejercicio A2")
showNumsMult(1, 2, 3, 4, 5, 6, 7, 8, 9, 5);

//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.
function showNumsLimit() {
    var nums = arguments;
    for (var i = 0; i < nums.length - 3 && i < nums[nums.length - 2]; i++) {
        console.log(i + 1 + "ª pareja " + nums[i] * nums[nums.length - 1] + " - " + nums[i + 1] * nums[nums.length - 1]);
    }
}
console.log("Ejercicio A3")
showNumsLimit(1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 5);

//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?
function fibonacciNums() {
    var fibonaccinum = [];
    for (var i = 0; i < 30; i++) {
        fibonaccinum.push(i > 1 ? fibonaccinum[i - 2] + fibonaccinum[i - 1] : i);
    }
    return fibonaccinum.join(" ");
}
console.log("Ejercicio B");
console.log(fibonacciNums());

//b2) Puedes añadir además, la posición de cada resultado?
function fibonacciNumsPosition() {
    var fibonaccinum = [];
    var message = "";
    for (var i = 0; i < 30; i++) {
        fibonaccinum.push(i > 1 ? fibonaccinum[i - 2] + fibonaccinum[i - 1] : i);
        message += i + 1 + "º pos - " + fibonaccinum[i] + ", ";
    }
    return message;
}
console.log("Ejercicio B2");
console.log(fibonacciNumsPosition());

//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.
function fibonacciArray() {
    var fibonaccinum = [];
    for (var i = 0; i < 30; i++) {
        fibonaccinum.push(i > 1 ? fibonaccinum[i - 2] + fibonaccinum[i - 1] : i);
    }
    return fibonaccinum;
}
console.log("Ejercicio B3");
console.table(fibonacciArray());

//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.
function fibonacciNumsPosition(pos) {
    var fibonaccinum = [];
    var message = "";
    for (var i = 0; i < pos; i++) {
        fibonaccinum.push(i > 1 ? fibonaccinum[i - 2] + fibonaccinum[i - 1] : i);
        message += i + 1 + "º pos - " + fibonaccinum[i] + ", ";
    }
    return message;
}
console.log("Ejercicio B4");
console.log(fibonacciNumsPosition(10));
console.log(fibonacciNumsPosition(50));
console.log(fibonacciNumsPosition(100));

//b5) Ahora, muestra los resultados en forma piramidal:
function fibonacciArray(pos) {
    var fibonaccinum = [];
    for (var i = 0; i < pos; i++) {
        fibonaccinum.push(i > 1 ? fibonaccinum[i - 2] + fibonaccinum[i - 1] : i);
        console.log(fibonaccinum.join(" "));
    }
    for (var i = pos; i > 0; i--) {
        fibonaccinum.pop(i);
        console.log(fibonaccinum.join(" "));
    }
}
console.log("Ejercicio B5");
fibonacciArray(10);

//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código
var code = 3712;

function codeScript(code) {
    var coded = [];
    var codeo = code.toString().split("");
    for (var i = 0; i < codeo.length; i++) {
        if (i == codeo.length - 1) {
            coded[0] = codeo[i];
        } else {
            coded[i + 1] = codeo[i];
        }
    }
    return parseInt(coded.join(""));
}
console.log("Ejercicio C");
console.log(codeScript(code));
//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)
var code = 3712;

function codeScript2(code1, code2) {
    var coded1 = codeScrpit(code1);
    var coded2 = codeScrpit(code2);
    return [coded1, coded2];
}
console.log("Ejercicio C2");
console.log(codeScript(code));
//c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)
function Encrypt(code) {
    var coded = [];
    var codeo = code.toString().split("");
    for (var i = 0; i < codeo.length; i++) {
        if (i == codeo.length - 1) {
            coded[0] = 10 - parseInt(codeo[i]);
        } else {
            coded[i + 1] = 10 - parseInt(codeo[i]);
        }
    }
    return parseInt(coded.join(""));
}
var key = [3, 2, 4, 5];

function EncryptSubs(code, key) {
    var coded = code + key;
    if (coded > 10) {
        coded = coded - 10;
    }
    return coded;
}

function EncryptVigenere(code) {
    var coded = [];
    var codeo = code.toString().split("");
    var j = 0;
    for (var i = 0; i < codeo.length; i++) {
        if (i == codeo.length - 1) {
            coded[0] = EncryptSubs(parseInt(codeo[i]), key[j]);
        } else {
            coded[i + 1] = EncryptSubs(parseInt(codeo[i]), key[j]);
        }
        j == key.length - 1 ? j = 0 : j++;
    }
    return parseInt(coded.join(""));
}
console.log("Ejercicio C3");
var coded = Encrypt(code)
console.log("Coded to 10: " + coded);
var codedV = EncryptVigenere(code);
console.log("Coded by Vigenere: " + codedV);
//c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
function Decrypt(code) {
    var coded = [];
    var codeo = code.toString().split("");
    for (var i = 0; i < codeo.length; i++) {
        if (i == codeo.length - 1) {
            coded[i] = 10 - parseInt(codeo[0]);
        } else {
            coded[i] = 10 - parseInt(codeo[i + 1]);
        }
    }
    return parseInt(coded.join(""));
}

function DecryptSubs(code, key) {
    var coded = code - key;
    if (coded < 0) {
        coded = coded + 10;
    }
    return coded;
}

function DecryptVigenere(code) {
    var coded = [];
    var codeo = code.toString().split("");
    var j = 0;
    for (var i = 0; i < codeo.length; i++) {
        if (i == codeo.length - 1) {
            coded[i] = DecryptSubs(parseInt(codeo[0]), key[j]);
        } else {
            coded[i] = DecryptSubs(parseInt(codeo[i + 1]), key[j]);
        }
        j == key.length - 1 ? j = 0 : j++;
    }
    return parseInt(coded.join(""));
}
console.log("Ejercicio C4");
console.log("Decoded to 10: " + Decrypt(coded));
console.log("Decoded by Vigenere: " + DecryptVigenere(codedV));
//c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

function Crypt(code) {
    var coded = Encrypt(code);
    console.log("El código encriptado es: " + coded);
    var decoded = Decrypt(coded);
    console.log("El código desencriptado es: " + decoded);
    return decoded;
}

function CryptVigenere(code) {
    var coded = EncryptVigenere(code);
    console.log("El código encriptado por Vigenere es: " + coded);
    var decoded = DecryptVigenere(coded);
    console.log("El código desencriptado Vigenere es: " + decoded);
    return decoded;
}
console.log("Ejercicio C5");
console.log(Crypt(code));
console.log(CryptVigenere(code));
//c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.
var dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
}

function codeLetter(code) {
    for (var i = 0; i < 5; i++) {
        var exists = dictionary[i].indexOf(code);
        if (exists != -1) {
            return [i, exists];
        }
    }
}

function letterCoded(pos) {
    this.line = pos[0];
    this.col = pos[1];
    this.ReturnLetter = function() {
        return dictionary[this.line][this.col];
    }
}

function codeWords() {
    var coded = [];
    var code = [];
    for (arg in arguments) {
        code.push(arguments[arg]);
    }
    var codeo = code.join("").toString().split("");
    for (var i = 0; i < codeo.length; i++) {
        coded.push(new letterCoded(codeLetter(codeo[i])));
    }
    return coded;
}

function decodeWords(code) {
    var decoded = []
    for (var i = 0; i < code.length; i++) {
        decoded.push(code[i].ReturnLetter());
    }
    return decoded.join("");
}
console.log("Ejercicio C6")
var decodeword = codeWords("HI  ", " WE  ", " NEED", " HELP")
console.log(decodeword);
console.log(decodeWords(decodeword));

//d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB.
function RomanCrypt(word) {
    var coded = ""
    for (var i = 0; i < parseInt(word.length / 2); i++) {
        coded += word[i];
        coded += word[parseInt(word.length / 2) + i];
    }
    if (word.length % 2) {
        coded += word[word.length - 1];
    }
    return coded;
}
var RomanCode1 = RomanCrypt("SKYLAB");
console.log(RomanCode1);
var RomanCode2 = RomanCrypt("SKYLABS");
console.log(RomanCode2);

//d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.
function RomanDecrypt(code) {
    var decoded = [];
    var lastletter = "";
    if (code.length % 2) {
        lastletter = code.substr(-1);
        code = code.substr(0, code.length - 1);
    }
    for (var i = 0; i < code.length; i++) {
        i % 2 ? decoded[parseInt(code.length / 2) + i] = code[i] : decoded[i / 2] = code[i];
    }
    lastletter != "" ? decoded.push(lastletter) : "";
    return decoded.join("");
}
console.log(RomanDecrypt(RomanCode1));
console.log(RomanDecrypt(RomanCode2));
//d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)
function RomanEnDe(code) {
    var decoded = RomanCrypt(code);
    console.log("The coded word is: " + decoded);
    console.log("The word decode is: " + RomanDecrypt(decoded));
}
console.log("Ejercicio D3")
RomanEnDe("SKYLAB");
//d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.
console.log("Ejercicio D4")
RomanEnDe("SKYLABCODERS");
//e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

//e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

//e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

//f) Recibiendo el siguiente texto por parámetro a tu función... :

//f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario