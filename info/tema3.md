<img src="http://www.skylabcoders.com/images/403/default.png" alt="Skylab" style="width:200px;height:45px;">

## Objects: [Vídeo1](https://www.youtube.com/watch?v=7mChUtmS044) [Vídeo2](https://www.youtube.com/watch?v=puPfj3BJSco) 

### Puntos Clave

- Profundizar en el uso de objetos (cómo asignarlos a una variable...).
- Crear, modificar y eliminar propiedades de un objeto.


#### Referencia:

[Documentación sobre Objetos](https://developer.mozilla.org/es/docs/Web/Javascript/Referencia/Objetos_globales/Object)

Los objetos son un tipo de dato que permite almacenar otros datos de cualquier tipo.
Lo que diferencia los objetos de los arrays es el hecho de poder acceder a los valores por su clave y no por su posición.

A continuación creamos un objeto "avenger" el cual contiene tres propiedades. Todas ellas tienen una clave (name, class, id) y su respectivo valor ("Tony", "VII", 1).

Para acceder a un valor solamente debemos escribir el nombre del objeto, punto y la clave en custión. También es posible acceder como objeto[clave].

```js
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
console.log(avenger.name) // "Tony"
console.log(avenger["name"]);
var exampleKey = "name";
console.log(avenger[exampleKey]);
```
---
**Ejercicios:**

a) Escribe una función que liste los nombres de propiedad del objeto 
(Puedes usar el objeto creado más arriba)
```js
console.log(something, somethingMore, somethingMoreAndMore)
//name, class, id
```

b) Ahora, crea una función que liste solo los valores de las propiedades.
```js
console.log(somethingThatShowsThings) //Tony, VII, 01
```

c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
```js
console.log(property.ThisProperty) //new class = XI
```

d) Ahora, elimina la propiedad ID y asegura los cambios.
```js
console.log(property.ThisProperty) //Not exist :(
```

e) Añade una nueva propiedad, por ejemplo **city** y dale un valor, asegura los cambios solo imprimiendo esa nueva propiedad.
```js
console.log(city) // City => New York City
```

f) Lista el numero de propiedades que contiene el objeto.
```js
console.log() // There are 4 info fields
```

g) Cambia la propiedad **name** por **fullName**.

g1) Asegura los cambios.
```js
console.log(fullName) // Tony Stark
```

h) Lista todas las propiedades del objeto a través de un console.log()
```js
console.log(...) // "Hi there, I'm Tony Stark..."
```

h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...

h2) Asegura los cambios volviendo a listar los valores del objeto

```js
console.log(location) // NYC
```

i) Crea un **constructor** de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado.
(Échale un ojo a la referencia de abajo.) 

http://www.w3schools.com/js/js_object_definition.asp

Example:

```js
function Avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new Avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log(tonyStark)
```

j) Crea otro objeto y imprime sus propiedades por pantalla.
```js
var otherAvenger = new Avenger...
console.log(otherAvenger) // Hulk...
```

k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.
```js
...
...
...
this.listProperties: function(){
    console.log(this.name + ", " + this.class) 
};
}
```

<details> 
  <summary>Spoiler!</summary>
    <pre>
    <code>
    function avenger(fullName, classRoom, city, job, studies,markAv) {
        this.fullName = fullName;
        this.classRoom = classRoom;
        this.city = city;
        this.job = job;
        this.studies = studies;
        this.markAv = markAv;
        this.description = function(){
            console.log(this.fullName + ", " + this.city + "...")
        }
    }
    var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
    tonyStark.description()
    //Tony Stark, NYC...
    </code>
    </pre>
</details>

l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
```js
console.log(someFunction) // Tony Stark, Hulk, Thor...
```

m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que **solo liste los nombres** de los Avengers **que sean de la misma ciudad** y cuantos hay.
```js
console.log(myFunction) // Are 3 avengers living in NYC: Tony, Hulk, Hawkeye
```

Pista: Intenta tener a todos los objetos dentro de una array, al tener todos los datos juntos, podrás filtrarlos y mostrarlos...

- [Filter](https://developer.mozilla.org/en-US/docs/Web/js/Reference/Global_Objects/Array/filter?v=control)
- [forEach](https://developer.mozilla.org/es/docs/Web/js/Referencia/Objetos_globales/Array/forEach)

n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.
```js
console.log(myFunction()) 
// HawkEye vs Tony => Tony is better! \n Thor vs Hulk => Hulk is better! \n Vision vs Captain America => Vision is better
```
ñ1) Intenta crear las parejas de forma aleatoria.


---

a) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.
```js
function GenerateRandom(){
    ...
    return randomNumber.
}

function father(){
    var numR = GenerateRandom()
    return ...numR()...
}
```

b) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.
```js
function father(){
    myFunction();
    myOtherFunction();
    myOtherVarFunction();
    return...
}

```

c) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.

d) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

e) Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.
```js
function grandFather(){
    var names = ['hulk', 'ironMan', '...']
    var selectedName...
    var selectedName2...
    if(father(selectedName) > father(selectedName2))
        ...
    else
        ...
    return father(selectedName).push().join()...
}
```

e) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como **OBJECTS**. Muestra por pantalla los objetos sin estilizar el output.

f) Muestra los resultados de los **OBJECTS** recorriéndolos y mostrando los valores de una forma amigable.

g) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
```js
myName() + (myAge() + myRandomNumber).toString()//output: IronMan 45
```

h) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50
```js
return x + y // output: IronMan 3...Sure you're Tony Stark?
```

## [PROYECTO TEMA 3](projects/project3.md)