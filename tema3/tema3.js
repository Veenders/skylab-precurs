var avenger = {
    name: "Tony",
    class: "VII",
    id: 1
};

//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
function showProperties(object) {
    for (prop in object) {
        console.log(prop);
    }
}
showProperties(avenger);

//b) Ahora, crea una función que liste solo los valores de las propiedades.
function showValues(object) {
    for (prop in object) {
        console.log(object[prop]);
    }
}
showValues(avenger);

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
avenger.class = 9;
showValues(avenger);

//d) Ahora, elimina la propiedad ID y asegura los cambios.
delete avenger.id;
showProperties(avenger);

//e) Añade una nueva propiedad, por ejemplo city y dale un valor, asegura los cambios solo imprimiendo esa nueva propiedad.
avenger.city = "Nueva York";

function showFull(object) {
    for (prop in object) {
        console.log(prop + " => " + object[prop]);
    }
}
showFull(avenger);

//f) Lista el numero de propiedades que contiene el objeto.
console.log(Object.keys(avenger).length);

//g) Cambia la propiedad name por fullName.
function changeproperty(object, property, newprop) {
    object[newprop] = object[property];
    delete object[property];
    return object;
}
avenger = changeproperty(avenger, "name", "fullName");

//g1) Asegura los cambios.
showFull(avenger);

//h) Lista todas las propiedades del objeto a través de un console.log()
function returnFull(object) {
    properties = "";
    for (prop in object) {
        properties += prop + " => " + object[prop] + "\n";
    }
    return properties;
}
console.log(returnFull(avenger));
//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
function addProperties(object, markAverage, country, job, studies) {
    object.markAvegarage = markAverage;
    object.country = country;
    object.job = job;
    object.studies = studies;
    return object;
}
avenger = addProperties(avenger, 45, "USA", "CEO", "Engineering");

//h2) Asegura los cambios volviendo a listar los valores del objeto
console.log(returnFull(avenger));

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)
function Avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    //k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. - Continua más abajo.
    this.ListProperties = function() {
            properties = "";
            for (prop in this) {
                if (typeof this[prop] != "function") {
                    properties += prop + " => " + this[prop] + "\n";
                }
            }
            return properties;
        }
        //l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
    this.getName = function() {
        return "My name is " + this.fullName;
    }
}
var ironman = new Avenger("Tony Stark", "I", "New York", "CEO", "Engineering", 97);
console.log(returnFull(ironman));

//j) Crea otro objeto y imprime sus propiedades por pantalla.
var hulk = new Avenger("Robert Bruce Banner", "I", "Sakaar", "Warrior", "Physicist", 140);
console.log(returnFull(hulk));

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.
console.log("Ejercicio K");
console.log(ironman.ListProperties());
console.log(hulk.ListProperties());

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
var avengers = [ironman, hulk];
avengers.forEach(function(item) {
        console.log(item.getName());
    })
    //m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
var spiderman = new Avenger("Peter Parker", "IV", "New York", "Journalist", "High School", 80);
avengers.push(spiderman);
var thor = new Avenger("Thor Odin's son", "I", "Asgard", "God", "Warrior", 150);
avengers.push(thor);
var capitanAmerica = new Avenger('Steve Rogers', "I", "New York", "Soldier", "High School", 105);
avengers.push(capitanAmerica);

function countProperties(arrayObjects, property) {
    var result = {};
    var objectProperty;
    arrayObjects.forEach(function(object) {
        objectProperty = object[property];
        !result[objectProperty] ? (result[objectProperty]) = 1 : (result[objectProperty] += 1);
    });
    return result
}

function avengersInCity(arrayObjects, city) {
    var count = 0;
    var names = '';
    var message = '';
    arrayObjects.forEach(function(object) {
        if (object.city.toLowerCase() === city.toLowerCase()) {
            count++;
            names += object.fullName + ', '
            message = "Are " + count + " living in " + city + ": " + names;
        }
    });
    count === 0 ? message = "No Avengers Living in the city" : message = message;

    return message;

}
console.log(countProperties(avengers, "city"));
console.log(avengersInCity(avengers, "New York"));
console.log(avengersInCity(avengers, "Asgard"));
console.log(avengersInCity(avengers, "Granollers"));

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
var cvd = new Avenger("Carles Vila", "IX", "Granollers", "Full Stack Developer", "Multimedia", 100);
avengers.push(cvd);

function avengersMedia(arrayObjects) {
    var result = 0;
    arrayObjects.forEach(function(object) {
        result += object.markAv;
    });
    result = result / arrayObjects.length;
    return result;
}
console.log(avengersMedia(avengers));
//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.
function avengersMarks(arrayObjects) {
    objectCompare = {};
    arrayObjects.forEach(function(object, i) {
        i === 0 ? objectCompare = object : objectCompare.markAv <= object.markAv ? console.log(object.fullName + " have better or equal markAV than " + objectCompare.fullName) : console.log(objectCompare.fullName + " have better markAV than " + object.fullName);
        objectCompare = object;
    });
}
avengersMarks(avengers);
//ñ1) Intenta crear las parejas de forma aleatoria.
function randomComparation(arrayObjects) {
    var arrayCopy = arrayObjects.map(function(item) { return item });
    arrayCopy.sort(function(a, b) { return 0.5 - Math.random() });
    avengersMarks(arrayCopy);
}
console.log("Exercici ñ1");
randomComparation(avengers);
console.log("Comprovació no alteració ordre inicial");
avengersMarks(avengers);

// a) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.

// b) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.

// c) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.

// d) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

// e) Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.

// e) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.

// f) Muestra los resultados de los OBJECTS recorriéndolos y mostrando los valores de una forma amigable.

// g) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

// h) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50