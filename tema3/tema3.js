var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
function showProperties(object){
    for(prop in object){
        console.log(prop);
    }
}
showProperties(avenger);

//b) Ahora, crea una función que liste solo los valores de las propiedades.
function showValues(object){
    for(prop in object){
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
function showFull(object){
    for(prop in object){
        console.log(prop+" => "+object[prop]);
    }
}
showFull(avenger);

//f) Lista el numero de propiedades que contiene el objeto.
console.log(Object.keys(avenger).length);

//g) Cambia la propiedad name por fullName.
function changeproperty(object, property, newprop){
    object[newprop]=object[property];
    delete object[property];
    return object;
}
avenger = changeproperty(avenger,"name","fullName");

//g1) Asegura los cambios.
showFull(avenger);

//h) Lista todas las propiedades del objeto a través de un console.log()
function returnFull(object){
    properties = "";
    for(prop in object){
        properties += prop+" => "+object[prop]+"\n";
    }
    return properties;
}
console.log(returnFull(avenger));
//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
function addProperties(object, markAverage, country, job, studies){
    object.markAvegarage = markAverage;
    object.country = country;
    object.job = job;
    object.studies = studies;
    return object;
}
avenger = addProperties(avenger,45,"USA","CEO","Engineering");

//h2) Asegura los cambios volviendo a listar los valores del objeto
console.log(returnFull(avenger));

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

//j) Crea otro objeto y imprime sus propiedades por pantalla.

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

//ñ1) Intenta crear las parejas de forma aleatoria.