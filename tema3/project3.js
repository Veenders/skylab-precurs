function Player(name){
    this.name = name;
    this.points = 0;
    this.getName = function(){
        return this.name;
    }
}
function Welcome(name){
    return "Hello "+name+", Welcome to our Bingo Game!!";
}
function Bye(){
    var otherGame = confirm("Do you want to start a new Game?")
    return otherGame;
}
function createCarton(){
    return [3,4,6,8,10];
}
function RandomNumber(){
    return Math.floor(Math.random() * 10) + 1; 
}
//Programa Principal
function Bingo(){
    var players=[];
    var cont = true;
    while(cont){
        players.push(new Player(prompt('Cual es su nombre?')));
        var name = players[players.length-1].getName();
        console.log(Welcome(name));
        var carton = createCarton();
        console.log(RandomNumber());
        cont = Bye();
    }
}

//Inicialització del Programa
Bingo();