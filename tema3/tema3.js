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

//d) Ahora, elimina la propiedad ID y asegura los cambios.

//e) Añade una nueva propiedad, por ejemplo city y dale un valor, asegura los cambios solo imprimiendo esa nueva propiedad.

//f) Lista el numero de propiedades que contiene el objeto.

//g) Cambia la propiedad name por fullName.

//g1) Asegura los cambios.

//h) Lista todas las propiedades del objeto a través de un console.log()

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...

//h2) Asegura los cambios volviendo a listar los valores del objeto

