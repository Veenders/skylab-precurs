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
var iplayer = 0;

function questionDB(answer, question) {
    this.answer = answer;
    this.question = question;
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

function question(questionDB) {
    this.answer = questionDB.answer;
    this.question = questionDB.question;
    this.status = 0;
    this.correct = 0;
}

function Player(name, seconds) {
    this.name = name;
    this.points = 0;
    this.rounds = 0;
    this.status = 0;
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

}

function Game() {
    this.players = [];
    this.setPlayers = function(players) {
        this.players = players;
    }
    this.setStatus = function() {
        var status
        questions.forEach(function(question) {
            question.status ? status++ : "";
        });
        this.status = status;
    }
}


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
        iplayer = 0;
        game.setPlayers(players);
        games.push(game);
        document.getElementById("start").style.display = "none";
        document.getElementById("game").style.display = "block";
        document.getElementById("player").innerHTML = "Turno de: " + game.players[iplayer].getName();
        document.getElementById("definicion").innerHTML = '<input id="turn" type="button" value="Empezar" onclick="PasaPalabra()">'
    } else {
        document.getElementById("error").style.display = " inline";
    }
}

function PasaPalabra() {
    var cont = true;
    var game = games[games.length - 1];
    var definition = document.getElementById("definicion");
    document.getElementById("palabra").style.display = "inline";
    var j = 0;
    while (cont) {
        var player = game.players[iplayer];
        definition.innerHTML = player.rosco[j].question;
        j == player.rosco.length - 1 ? cont = false : j++;
    }

}