//Ejercicio 1
var estilo=0;
var estilos = ["style1","style2","style3","style4"];
var element = document.getElementById("text");
function changeStyle(){
    var cont = true;
    var num = 0;
    while(cont){
        num = parseInt(Math.random()*4);
        num != estilo?cont=false:cont=true;
        estilo = num;
    }
    element.className = estilos[estilo];
}
//Ejercicio 2

document.querySelector('[type="submit"]').addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value
    console.log("Hello "+name+" "+surname);
});

list = document.getElementById("listado");
function ListContent(){
    for(var i = 0; i<list.children.length;i++){
        console.log(list.children[i].innerHTML);
    }
}
ListContent();