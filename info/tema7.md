## JAVASCRIPT DOM
-   [Referencia JS HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
-   [JS Events](https://www.w3schools.com/js/js_events.asp)

En este tema aprendereis a acceder y modificar el DOM (Document Object Model) utilizando Javascript.

El DOM representa el documento HTML de tu web y la manera en la que se accede al mismo.

### Puntos clave

- Comprender qué es el DOM.
- Aprender a modificar el DOM mediante JavaScript.
- Aprender a linkar los archivos de estilo CSS y JavaScript al HTML.
- Añadir comportamiento y eventos a diferentes elementos de la página web.



### MÉTODOS DEL DOM

Seleccionar los elementos del DOM

```js
// Por su ID
document.getElementById(idElemento);

// Por su etiqueta/tag
document.getElementsByTagName(p);

// Por su clase
document.getElementsByClassName(claseElemento);
```

Modificar elementos del DOM

```js
// Modificar el contenido de un elemento
document.getElementById(idElemento).innerHTML = 'Hello World';

//Darle estilo a un elemento
document.getElementById(classElemento).style.color = 'red';
document.getElementById(classElemento).style.background = 'blue';
```

Añadir eventos

Con Javascript podemos añadir listeners a los elementos de la página, por ejemplo podríamos añadir un evento "click" sobre un botón y realizar así alguna acción en nuestra web.

```js
document.getElementById(idElemento).addEventListener('click', function(event) {
    // CÓDIGO A EJECUTAR
});
```

En algunos casos como en los `<a>` y en los `<form>` tendreís que utilizar el método preventDefault() que os proporciona la funcion de listener.

Esto es para prevenir el comportamiento por defecto del elemento en cuestión, por ejemplo un `<a>` intentará navegar hacia la dirección especificada en su href recargando esto la página.

```html
    <html>
        <head>
            <meta charset=utf-8 />
            <title></title>
        </head>
        <body>
            <a href="#">Lorem Ipsum</a>
        </body>

        <script>
            document.getElementsByTagName(a).addEventListener("click", function(event) {
                event.preventDefault();

                console.log("hello world!");
            })
        </script>
    </html>
```

También puedes poner los eventos directamente sobre los elementos HTML.

```html
    <html>
        <head>
            <meta charset=utf-8 />
            <title></title>
        </head>
        <body>
            <a href="#" onclick="showMessage()">Lorem Ipsum</a>
        </body>

        <script>
            function showMessage() {
                console.log("hello world");
            }
        </script>
    </html>
```

### COMO LINKAR EL CSS Y EL JAVASCRIPT EN EL HTML

En el `index.html` tenemos que linkar el CSS para darle estilos y el JS para darle comportamiento a nuestra página web.

El CSS lo linqueamos con el tag `link` y escribimos la ruta del archivo en el atributo `href`.

```html
<head>
    <meta charset="UTF-8">
    <title>My web page</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

El JS lo linqueamos con el tag `script` al final, justo antes de cerrar el `</body>` y escribimos la ruta dónde se encuentra en el atributo `src`.

```html
<body>
    ..
    ...
    // code here
    ...
    ...
    <script type="text/javascript" src="main.js"></script>
</body>
```

La estructura de tu proyecto debería quedar parecida a esto:

![Organización del proyecto](https://i.imgur.com/31HaLn9.png)

### Ejercicios

a) Modifica el color de texto del párrafo

```html
    <html>
    <head>
        <meta charset=utf-8 />
        <title></title>
    </head>
    <body>
        <p id='text'>Lorem ipsum dolor amete</p>
        <div>
            <button id="btn-style">Dar estilo</button>
        </div>

        <script src="..."></script>
    </body>
    </html>
```

b) Captura el valor de los dos `<input>` del formulario al enviar (submit) el mismo y muéstralos por consola.

```html
    <html>
    <head>
        <meta charset=utf-8 />
        <title></title>
    </head>
    <body>
        <form>
            <input type="text" id="name" />
            <input type="text" id="surname" />

            <input type="submit" value="Enviar" />
        </form>
    </body>

    <script src="..."></script>
    </html>
```

c) Sin modificar la estructura HTML proporcionado mostrar por consola los textos de todos los `<li>` del listado.

```html
    <html>
    <head>
        <meta charset=utf-8 />
        <title></title>
    </head>
    <body>
        <ul id="listado">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
    </body>

    <script src="..."></script>
    </html>
```
## [PROYECTO TEMA 7](projects/project7.md)