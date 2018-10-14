//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.
function showNums() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < nums.length - 1; i++) {
        console.log(i + 1 + "ª pareja " + nums[i] * 2 + " - " + nums[i + 1] * 2);
    }
}
showNums();

//a1) La funcion debería aceptar la array a tratar como argumento
function showNumsArg() {
    var nums = arguments;
    for (var i = 0; i < nums.length - 1; i++) {
        console.log(i + 1 + "ª pareja " + nums[i] * 2 + " - " + nums[i + 1] * 2);
    }
}
showNumsArg(1, 2, 3, 4, 5, 6, 7, 8, 9);

//a2) Pasa también el numero a multiplicar a la función como argumento

//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?

//b2) Puedes añadir además, la posición de cada resultado?

//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

//b5) Ahora, muestra los resultados en forma piramidal:

//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código

//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

//c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)

//c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.

//c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

//c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

//d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB.

//d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

//d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

//d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.

//e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

//e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

//e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

//f) Recibiendo el siguiente texto por parámetro a tu función... :

//f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario