<img src="http://www.skylabcoders.com/images/403/default.png" alt="Skylab" style="width:200px;height:45px;">


## Métodos: [Vídeo](https://www.youtube.com/watch?v=QgFCriyEQso)

Los métodos son funciones nativas de javascript aplicables a ciertos tipo de datos.

### Puntos clave
- Comprender la diferencia entre función y método.
- Conocer y saber utilizar los métodos más habituales de String, Number y Array.

---
### Breve lista de métodos por tipo

#### String

- **length**: Devuelve la longitud del string.
- **toUpperCase()**: Devuelve el string en mayúsculas.
- **toLowerCase()**: Devuelve el string en minúsculas.
- **trim()**: Elimina espacios y tabulaciones a izquierda y derecha del string.
- **split(separador)**: Divide un string en un array. Corta cuando se encuentra el separador.
- **slice(inicio)**: Extrae una porción de un string dado empezando en la posición "inicio".

#### Number

- **Math.Random()**: Devuelve un número aleatorio entre 0 y 1.
- **Math.round(num)**: Redondea el número entre paréntesis.
- **Math.floor(num)**: Redondea al número entero inmediatamente inferior a num.
- **Math.sqrt(num)**: Devuelve la raiz cuadrada de num.
- **toString()**: Pasa un número a string (lo entrecomilla).
- **Math.max(a,b,c,...) o Math.min(a,b,c,...)**: Devuelve el número mayor o menor (respectivamente) entre un conjunto de inputs.

#### Array

- **length**: Devuelve la cantidad de elementos del array.
- **join()**: Une los elementos de un array en un string.
- **push(element)**: Introduce "element" en la última posición del array.
- **indexOf(char)**: Devuelve la posición en el array de la primera ocurrencia de "char". En caso de no encontrar dicho elemento devuelve "-1".
- **splice(inicio)**: Modifica un array eliminando los elementos a partir de la posición "inicio".
- **slice(inicio)**: Igual que splice pero devolviendo un array nuevo en vez de modificar el original.
- **forEach(callback)**: Ejecuta la función callback a cada elemento de un array.
- **map(callback)**: Igual que forEach pero devolviendo un nuevo array.

**Ejercicios**

a) Puedes contar cuantas letras tiene tu nombre? 

```js
console.log(myName) // My Name has 4 letters 
```

b) Añade tu apellido e indica en que posición del string empieza (prueba a buscar el espacio entre el nombre y el apellido):

```js
console.log(myString)// Your last name starts on position 5
```
 
c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):

```js
console.log(myString) // My Name is Tony 
```
 
d) Ahora, solo tu apellido.

```js
console.log(myString) // My lastname is Stark
```

d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

```js
console.log(myFirstString +", " + myNewString) // Tony Stark, Stark
```

e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios. 

```js
console.log(myNewString) // Hello, Mr. Stark 
```
 
f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

```js
console.log(mySelection) // my lastname is STARK
```

g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

```js
var something = myFirstString + "is awesome"
console.log(something) \\ "Tony is awesome"

```

h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

```js
console.log(myFirstLastnameLetters) // S.Y
```
---
a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

```js
console.log(myName) // T/O/N/Y/S/T/A/R/K
```

b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

```js
console.log(myName) // S|T|A|R|K
```

c) Ahora muestra cada letra de tu **nombre** con su posición (necesitarás un bucle **for**)

```js
console.log(myName) // 1º T, 2º O, 3º N, 4º Y
```

d)Como en el ejercicio anterior, pero seleccionando tu apellido

```js
console.log(myLastName) // 5º S, 6º T, 7º A, 8º R, 9º K
```

e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el **ejercicio h** de la sección de strings

```js
console.log(myInitials) // T.S
```

f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad.
Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

```js
console.log(mySelector) // My name is TONY and i'm 40 years old
```

g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

```js
console.log(myCityAdd) // City added to array! => Tony, Stark, 40, New York
```

h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

```js
myCityAdd() // City added to array! => Tony, Stark, 40, New York
myCityDelete() // City deleted! => Tony, Stark, 40
```

j) Ahora, elimina el nombre y asegura los cambios
Resources: https://www.w3schools.com/jsref/jsref_shift.asp

k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?


l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

```js
numbers = [...]
var multByTwo = numbers.map(...)
```

l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

```js
var num = 3; // cada número se multiplicará por 3
function multByNum(num){
    var arrayMult = numbers.map(...)
    return arrayMult
}
```


m) Podrías mostrarlos en el orden inverso?
Resources: https://www.w3schools.com/jsref/jsref_sort.asp

n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

```js
console.log(repeatLetters) // Tony Stark, the letter 'T' => 2 times.
```

n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

```js
console.log(repeatLetters) // Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark
```

---

a) Que hora es? Declara la hora como número y devuelvela como String 

```js
console.log(myString + myNumberStringify) // I'ts 10.45 of morning
```

b) Nono, que hora exactamente? Dime la hora sin minutos!

```js
console.log(myString) // It's around 10 of morning
```

c) Ahora, declara tu hora y muéstrala redondeada.

```js
console.log(...(10.34)) // 11!
```

d) Hagamos una calculadora. Primero, la suma. Crea variables con valores distintos y súmalos.

```js
console.log(sum) //The sum of 7+3 is 10
```

d1) Añade la resta...

```js
console.log(sum + rest) // The sum and rest of 7 and 3 is 10 and 4 
```

d2) La multiplicación...

```js
console.log(sum + rest + mult) // 10, 4 and 21
```

d3) Y, por ultimo, la división.

```js
console.log(sum + rest + mult + div) // 10, 4, 21 and 2.3
```

d4) Ahora, intenta multiplicar un número por una string, que devuelve?

```js
console.log(10*"hour") // ....?!
```

e) Podemos controlar este error con un condicional **if**?

```js
console.log(10*"hour") // You can't do this operation!
```


## [PROYECTO TEMA 2](projects/project2.md)