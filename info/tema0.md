<img src="https://www.skylabcoders.com/images/403/default.png" alt="Skylab" style="width:200px;height:45px;">

## VARIABLES, COMPARADORES, CONDICIONALES Y LOOPS

### Antes de empezar: [Vídeo 1](https://www.youtube.com/watch?v=zhhVflROhlw) [Vídeo 2](https://www.youtube.com/watch?v=6pgnKqOQEXs)

Puntos clave: 
- Comprender qué es una variable y su utilidad.
- Aprender y entender los tipos básicos de datos usados en JavaScript.
- Entender y saber utilizar los comparadores y operadores básicos.
- Usar las estructuras básicas de control (if/else/else if).
- Saber aplicar los bucles de tipo for y while, en específico para iterar sobre los elementos de un array.

#### Variable:

Una variable es un contenedor que sirve para almacenar datos.
En javascript utilizamos la palabra reservada ``` var ``` para declarar una variable. 

Existen distintos tipos de datos, los más habituales son los siguientes:
- **String** : Se trata de una secuencia de caracteres, siempre se escribe entre comillas simples o dobles.

```js
var str = "Hello, world!";
``` 
- **Number**: Simplemente un valor numérico. Los decimales se especifican con punto. 
```js
var num = 9.78;
```
- **Boolean**: Tipo de dato lógico, sólo acepta valores: true o false.
```js
var bool1 = true;
var bool2 = false;
```
- **Array**: Una estructura de datos que sirve para almacenar diferentes datos de forma ordenada. Es un subtipo de objeto y es iterable.
```js
var arr = [true, 1, "hello"];
```
- **Object**: Otra estructura de almacenamiento de datos, pero esta vez se le atribuye una clave a cada valor, en vez de su posición dentro del objeto.

```js
var obj = {
    firstKey: "hello",
    secondKey: 98,
    thirdKey: true,
    fourthKey: [123, "bla", false, 2.4]
};
```
#### Comparadores y operadores lógicos:

Los comparadores y operadores lógicos comparan el valor de dos variables y devuelven un booleano.

### Comparadores:

#### a == b: 
  Compara el valor de a y b, si son iguales devuelve true.
```js
 3 == 3 // true.
 3 == "3" // true.
 3 == true // false
```
#### a === b: 
  Lo mismo pero además compara que sean el mismo tipo de dato.
```js
 3 === 3 // true.
 3 === "3" // false.
 3 === true // false

```
#### a != b: 
  Compara el valor de a y b, si son diferentes devuelve true.
```js
 3 != 3 // false.
 3 != "3" // false.
 3 != true // true
```
#### a !== b: 
  Compara el valor y tipo de dato de a y b, si son diferentes devuelve true.
```js
 3 !== 3 // false.
 3 !== "3" // true.
 3 !== true // true
```
#### >, <, >=, <=
    Mayor que, menorque , mayor o igual que, 
    menor o igual que.
```js
 3 > 5 // false.
 3 < 7 // true.
 3 >= 3 // true
 5 <= 5 // true
```

### Operadores:

#### ! 
    NOT, devuelve el opuesto del valor que acompaña al símbolo.
```js
 !true //false
 !false //true
```
#### &&
    AND, devuelve true sólo si ambos inputs són true.
```js
 true && true //true
 false && true //false
 true && false //false
 false && false //false
```
#### ||
    OR, devuelve false sólo si ambos inputs són false.
```js
 true || true //true
 false || true //true
 true || false //true
 false || false //false
```


#### Conditionals
<img src="http://cess.nyu.edu/wp-content/uploads/2012/01/ifcond.jpg" >


Los condicionales **if**, **else if** y **else** nos sirven para ejecutar un trozo de código dependiendo de si cumple una determinada condición o no.

En caso de querer usar varios **else if** podemos usar el atajo **switch**.

```js
var a = 10;
var b = 7;

if (a<b) {
 //code here
} else {
 //code here
}
```


```js
var a = 10;
var b = 7;
var c = 3;

if (a<b) {
 //code here
} else if (c<b){
 //code here
} else {
 //code here
}
```

```js
var a = 3;

switch (a) {
    case 1:
        console.log("One!");
        break;
    case 2:
        console.log("Two!");
        break;
    case 3:
        console.log("Three!");
        break;
    default:
        console.log("Oops!");
}
```

#### Loops:

<img src="https://3.bp.blogspot.com/-f6yRbQQ_lCU/VXaV3w5WEbI/AAAAAAAAAJI/0-czJApvhEc/s1600/C-For-Loop-Statement.jpg" style="width:25%;height:25%;">


Un loop nos sirve para iterar tantas veces como queramos y aplicar la misma lógica cada vez.

En javascript hay 3 tipos de loops básicos:

**for**  
El bucle for lo utilizaremos cuando tengamos que repetir alguna lógica un numero **determinado** de veces.
```js
for(var i=0;i<10;i++){
    //code here
}
```

**while**   
El bucle while lo utilizaremos cuando tengamos que repetir alguna lógica un numero **indeterminado** de veces y queremos que se ejecute mientras se cumpla una condición específica, esta condición se comprobará al **inicio** de cada iteración.

```js
while(condition){
    //code here
}
```

**do while**  
El bucle while lo utilizaremos cuando tengamos que repetir alguna lógica un numero **indeterminado** de veces y queremos que se ejecute mientras se cumpla una condición específica, esta condición se comprobará al **final** de cada iteración.
```js
do{
    //code here
}while(condition)
    
```

---

**Exercises:** // faltan 5

a) Declara tu nombre y muéstralo por consola: 

```js
console.log(name); //Mark
```

b) Declara tu edad y muéstralo por consola:

```js
console.log(age); //38
```

c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:

```js
console.log(info); //['Mark', 'Zuckerberg', 21]
```

d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:

```js
console.log(data); //{ name: 'Mark', age: 21}
```

e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.

```js
 //'Mark'
 //'Zuckerberg'
 //21
```

f) Crea una estructura condicional que imprima el número mayor entre dos números.

```js
var a = 25;
var b = 12;
if( a < b) ...

//25
```

f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:
```js
var a = 25;
var b = 12;
else if(...)
// The numbers are equal
```

g) Recorre un array de 5 números y cuando llegues a la mitad muestra el siguiente mensaje: 'We are in the middle of loop'.
```js
for(...){
    if(...){console.log("We are in the middle of loop");}
}
```

g1) Declara tu nombre y tu edad en dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error.

```js
var myName...
var myAge...
if(oneThing && otherThing...){"this is not you!"}
else{"Hi!! Glad to see u again!"}
```

h) Declara tu nombre y DNI en dos variables y crea un condicional para, en caso de que coincida uno de los dos datos, muestre un mensaje.

```js
var myName...
var myId...
if(oneThing || otherThing...){console.log("Permission granted");}
else{console.log("Try again.");}
```

i) Crea un array, introduce los datos anteriores y unos cuantos más de forma que al recorrer el array muestre un mensaje cuando encuentre tus datos.

```js
for(...){
    if(...){"We find your data!" + data[...]}
}
```

j) Crea un array de strings y recorre cada una de esos valores. Imprime cada caracter en una línea distinta. 

```js
var arr = ["hello","world","Skylab"];
for (var i = 0; i<arr.length;i++) {
    for (...) {
        console.log(...);
    }
}
```