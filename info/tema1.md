<img src="http://www.skylabcoders.com/images/403/default.png" alt="Skylab" style="width:200px;height:45px;">

## Funciones

### Antes de empezar: [Vídeo](https://www.youtube.com/watch?v=wmNsai9rKJE)

### Puntos clave:

- Entender qué es y cómo crear una función.
- Aprender a encapsular lógica (sentencias) en funciones para su posterior uso y reutilización.
- Entender qué son los argumentos y como utilizarlos.
- Conocer la diferencia entre funciones anónimas y no anónimas.
- Comprender la diferencia entre return y console.log.


### [Leer antes de proseguir!](https://developer.mozilla.org/en-US/docs/Web/js/Guide/Functions)

### Por qué usar funciones?

Imaginemos que tenemos unas líneas de código que suma el valor de unas variables, algo tal que así:

```js
    var a = 1;
    var b = 2;
    var c;

    if (typeof a === 'number' && typeof b === 'number') {
        c = a + b;
    }

    ...

    var d = 56;
    var e = 23;
    var f;

    if (typeof d === 'number' && typeof e === 'number') {
        f = d + e;
    }
```

Como se puede apreciar, hay un bloque de código que nos interesa reutilizar. Aquí es donde las funciones nos ayudarían:

```js
function sum (num1,num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
}

var a = 1;
var b = 2;
var d = 56;
var e = 23;

var c = sum(a,b); // 3
var f = sum(d,e); // 79
```

### Diferencia entre console.log y return
Console.log solamente muestra el valor de lo que introduzcas entre paréntesis en la consola.

Return tiene doble funcionalidad. Primero devuelve un valor para ser almacenado o tratado posteriormente, además corta el flujo de la función. Es decir, las líneas de código después un return no se ejecutan.

Por defecto todas las funciones tienen un "return undefined".

```js
function fun() {
    return "Hello, world!";
}
var a=fun(); //undefined
console.log(a); //"Hello, world!"

function fun2() {
    console.log("Hello,world!");
}

var b=fun2(); //"Hello,world!"
console.log(b); //undefined


function fun3() {
    console.log("hola");
    return;
    console.log("mundo");
}

fun3(); //hola
```

**Ejercicios:**

a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
```js
function (myName){
    console.log('hello + myName')//output: 'hello myName'
}
```

b) Intenta *retornar* los valores en lugar de usar *console.log*
```js
function (myName){
    return 'hello + myName' // output: 'hello myName'
}
```

c) Ahora, añade tu edad y concaténala al return
```js
return 'myMessage' //output: 'hello myName, you're myAge years old.'
```

d) Iguala tu función a una variable y ejecútala
```js
var MyFunction = ... //output: 'hello myName, you're myAge years old.'
myFunction()
```

e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados 

```js
myName() + myAge() //output: IronMan 40
```

f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
```js
var...
var...
myName(param1) + myAge(param2) //output: IronMan 43

```

g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas
```js
function ... (){
    var x = myName(param1)
    var y = myAge(param2)
    return x + y
} //output: IronMan 40
```


h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
```js
return x + y // output: IronMan 6457689
```

i) Al return de la función name(), concaténale otro mensaje
```js
return x + y // output: Tony Stark...aka IRONMAN, 34...Sure you're Tony Stark? 
```

j) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
```js
return x + y // output: The first function returns: 'Tony Stark...aka IRONMAN', The second function returns: '34...Sure you're Tony Stark?' 
```

k) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada
```js
return x + y // output: "The first function returns: Hulk... You're not IRONMAN!"
```


## [PROYECTO TEMA 1](projects/project1.md)