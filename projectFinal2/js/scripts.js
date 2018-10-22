var A = [];
var B = [];
var C = [];
var D = [];
var E = [];
var F = [];
var G = [];
var H = [];
var I = [];
var J = [];
var K = [];
var L = [];
var M = [];
var N = [];
var Ñ = [];
var O = [];
var P = [];
var Q = [];
var R = [];
var S = [];
var T = [];
var U = [];
var V = [];
var W = [];
var X = [];
var Y = [];
var Z = [];
var questions = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z];
var games = [];
function questionDB(answer, question) {
    this.answer = answer;
    this.question = question;
}

function question(questionDB) {
    this.answer = questionDB.answer;
    this.question = questionDB.question;
    this.status = 0;
    this.correct = 0;
    this.setClass = function(){
        var clase ="";
        if(this.status==0){
            clase = "active";
        }else{
            this.correct==1?clase="success":clase="error";
        }
        return clase;
    }
}

function Player(name, seconds) {
    this.name = name;
    this.points = 0;
    this.round = 0;
    this.finished = false;
    this.rosco = [];
    this.seconds = seconds;
    this.getName = function() {
        return this.name;
    }
    this.setRosco = function() {
        for (var i = 0; i < questions.length; i++) {
            var num = parseInt(Math.random() * questions[i].length);
            this.rosco.push(new question(questions[i][num]));
        }
    }
    this.drawRosco = function(){
        var rosco = document.getElementById("rosco").querySelectorAll("div");
        this.rosco.forEach(function(question,i){
            rosco[i].className = question.setClass();
        })
    }
    this.nextQuest = function(){
        var j = 0;
        this.round==this.rosco.length-1?j=0:j=this.round+1;
        if(!this.setStatus()){
            for(var i=j;i!=this.round;i++){
                if(this.rosco[i].status == 0){
                    this.round = i;
                    break;
                }
                i==this.rosco.length-1?i=0:"";
            }
        }
    }
    this.setStatus = function() {
        var status = 0;
        this.rosco.forEach(function(question) {
            question.status ? status++ : "";
        });
        this.rosco.length == status? this.finished = true:this.finished=false;
        return this.finished;
    }
}

function Game() {
    this.players = [];
    this.player = 0;
    this.setPlayers = function(players) {
        this.players = players;
    }
    this.finish = function() {
        var finished=0;
        players.forEach(function(player) {
            player.finished ? finished++ : "";
        });
        if(this.players.length == finished){
            return true;
        }
        return false;
    }
    this.nextPlayer=function(){
        var j = 0;
        this.player === this.players.length -1 ? j=0 : j=this.player+1;
        if(!this.finish()){
            for(var i = j;i!=this.player;i++){
                if(!this.players[i].finished){
                    this.player=i;
                    break;
                }
                if(i==this.players.length-1){
                    i=0;
                }
            }
        }else{
            finishGame();
        }
    }
    this.activePlayers = function(){
        var notfinished=0;
        players.forEach(function(player) {
            player.finished ? "" : notfinished++;
        });
        return notfinished;
    }
}
A.push(new questionDB("abducir", "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"));
B.push(new questionDB("bingo", "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"));
C.push(new questionDB("churumbel", "CON LA C. Niño, crío, bebé"));
D.push(new questionDB("diarrea", "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"));
E.push(new questionDB("ectoplasma", "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"));
F.push(new questionDB("facil", "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"));
G.push(new questionDB("galaxia", "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"));
H.push(new questionDB("harakiri", "CON LA H. Suicidio ritual japonés por desentrañamiento"));
I.push(new questionDB("iglesia", "CON LA I. Templo cristiano"));
J.push(new questionDB("jabali", "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"));
K.push(new questionDB("kamikaze", "CON LA K. Persona que se juega la vida realizando una acción temeraria"));
L.push(new questionDB("licantropo", "CON LA L. Hombre lobo"));
M.push(new questionDB("misantropo", "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"));
N.push(new questionDB("necedad", "CON LA N. Demostración de poca inteligencia"));
Ñ.push(new questionDB("señal", "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."));
O.push(new questionDB("orco", "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"));
P.push(new questionDB("protoss", "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"));
Q.push(new questionDB("queso", "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"));
R.push(new questionDB("raton", "CON LA R. Roedor"));
S.push(new questionDB("stackoverflow", "CON LA S. Comunidad salvadora de todo desarrollador informático"));
T.push(new questionDB("terminator", "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"));
U.push(new questionDB("unamuno", "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"));
V.push(new questionDB("vikingos", "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"));
W.push(new questionDB("sandwich", "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"));
X.push(new questionDB("botox", "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"));
Y.push(new questionDB("peyote", "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"));
Z.push(new questionDB("zen", "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"));

function AddPlayer() {
    var list = document.getElementById("jugadores");
    var jugador = document.getElementById("jugador");
    if (jugador.value != "") {
        var li = document.createElement("LI");
        li.innerHTML = jugador.value;
        list.appendChild(li);
        document.getElementById("jugador").value = "";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error").style.display = " none";
    } else {
        document.getElementById("error2").style.display = "block";
        document.getElementById("error").style.display = " none";
    }
}

function ClearPlayerList() {
    var list = document.getElementById("jugadores");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function StartGame() {
    document.getElementById("error2").style.display = "none";
    var list = document.getElementById("jugadores");
    var seconds = document.getElementById("timer").value;
    game = new Game();
    players = [];
    list.childNodes.forEach(function(playername, i) {
        players.push(new Player(playername.innerHTML, seconds));
        players[i].setRosco();
    });
    if (players.length != 0) {
        game.setPlayers(players);
        games.push(game);
        document.getElementById("start").style.display = "none";
        document.getElementById("game").style.display = "block";
        document.getElementById("player").innerHTML = "Turno de: " + game.players[game.player].getName();
        document.getElementById("definicion").innerHTML = '<input id="turn" type="button" value="Empezar" onclick="PasaPalabra()">'
    } else {
        document.getElementById("error").style.display = " inline";
    }
}

function PasaPalabra() {
    document.getElementById("palabra").style.display = "inline";
    var game = games[games.length - 1];
    var definition = document.getElementById("definicion");
    var player = game.players[game.player];
    player.drawRosco();
    definition.innerHTML = player.rosco[player.round].question;
    document.getElementById("punt").innerHTML = "puntuación: "+player.points;
    document.getElementById("Pasapalabra").focus(); 
}

function nextTurn(){
    var game = games[games.length - 1];
    var player = game.players[game.player];
    var question = player.rosco[player.round];
    var answer = document.getElementById("Pasapalabra");
    question.status = 1;
    if(question.answer===answer.value.toLowerCase()){
        answer.value = "";   
        question.correct = 1;
        player.points++
        player.setStatus()?game.nextPlayer():player.nextQuest();
        PasaPalabra();
    }else{
        answer.value = "";
        pass();
    }
}

function pass(){
    var game = games[games.length - 1];
    var player = game.players[game.player];
    var gp=game.player;
    player.setStatus()?"":player.nextQuest();
    game.nextPlayer();
    document.getElementById("player").innerHTML = "Turno de: " + game.players[game.player].getName();
    if(game.activePlayers()==1&&gp==game.player){
        PasaPalabra();
    }else{
        document.getElementById("definicion").innerHTML = '<input id="turn" type="button" value="Continuar" onclick="PasaPalabra()">';
        document.getElementById("palabra").style.display = "none";
    }
}
function finishGame(){
    document.getElementById("start").style.display = "block";
    document.getElementById("game").style.display = "none";
}

function keyGame(event){
    switch(event.which){
        case 13:
            nextTurn();
            break;
        case 32:
            event.preventDefault();
            pass();
            break;
        case 0:
            finishGame();
            break;
    }
}
function keyStart(event){
    switch(event.which){
        case 13:
            AddPlayer();
            break;
        case 0:
            ClearPlayerList();
            break;
    }
}