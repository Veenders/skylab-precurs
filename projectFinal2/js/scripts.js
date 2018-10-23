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
    this.setClass = function() {
        var clase = "";
        if (this.status == 0) {
            clase = "active";
        } else {
            this.correct == 1 ? clase = "success" : clase = "error";
        }
        return clase;
    }
}

function Player(name, seconds) {
    this.name = name;
    this.points = 0;
    this.game = 0;
    this.round = 0;
    this.finished = false;
    this.rosco = [];
    this.seconds = seconds;
    this.timer;
    this.getName = function() {
        return this.name;
    }
    this.setRosco = function() {
        for (var i = 0; i < questions.length; i++) {
            var num = parseInt(Math.random() * questions[i].length);
            this.rosco.push(new question(questions[i][num]));
        }
    }
    this.drawRosco = function() {
        var rosco = document.getElementById("rosco").querySelectorAll("div");
        this.rosco.forEach(function(question, i) {
            rosco[i].className = question.setClass();
        })
    }
    this.nextQuest = function() {
        var j = 0;
        this.round == this.rosco.length - 1 ? j = 0 : j = this.round + 1;
        if (!this.setStatus()) {
            for (var i = j; i != this.round; i++) {
                if (this.rosco[i].status == 0) {
                    this.round = i;
                    break;
                }
                i == this.rosco.length - 1 ? i = 0 : "";
            }
        }
    }
    this.setStatus = function() {
        if (this.finished) {
            return this.finished;
        }
        var status = 0;
        this.rosco.forEach(function(question) {
            question.status ? status++ : "";
        });
        this.rosco.length == status ? this.finished = true : this.finished = false;
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
        var finished = 0;
        players.forEach(function(player) {
            player.finished ? finished++ : "";
        });
        if (this.players.length == finished) {
            return true;
        }
        return false;
    }
    this.nextPlayer = function() {
        var j = 0;
        clearInterval(this.players[this.player].timer);
        this.player === this.players.length - 1 ? j = 0 : j = this.player + 1;
        if (!this.finish()) {
            for (var i = j; i != this.player; i++) {
                if (!this.players[i].finished) {
                    this.player = i;
                    break;
                }
                if (i == this.players.length - 1) {
                    i = 0;
                }
            }
        } else {
            finishGame();
        }
    }
    this.activePlayers = function() {
        var notfinished = 0;
        players.forEach(function(player) {
            player.finished ? "" : notfinished++;
        });
        return notfinished;
    }
}
A.push(new questionDB("abducir", "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"));
A.push(new questionDB("anaranjear", "CON LA A. Tirar o arrojar naranjas contra alguien"));
B.push(new questionDB("bingo", "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"));
B.push(new questionDB("boson", "CON LA B. Partícula elemental que, como el fotón, ejerce la interacción entre fermiones."));
C.push(new questionDB("churumbel", "CON LA C. Niño, crío, bebé"));
C.push(new questionDB("cosa", "CON LA C. Objeto inanimado, por oposición a ser viviente. Todo lo que tiene entidad, ya sea corporal o espiritual, natural o artificial, real o abstracta."));
D.push(new questionDB("diarrea", "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"));
D.push(new questionDB("distopia", "CON LA D. Representación ficticia de una sociedad futura de características negativas causantes de la alienación humana."));
E.push(new questionDB("ectoplasma", "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"));
E.push(new questionDB("enigma", "CON LA E. Realidad, suceso o comportamiento que no se alcanzan a comprender, o que difícilmente pueden entenderse o interpretarse."));
F.push(new questionDB("facil", "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"));
F.push(new questionDB("favor", "CON LA F. Ayuda o socorro que se concede a alguien. Honra, beneficio, gracia."));
G.push(new questionDB("galaxia", "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"));
G.push(new questionDB("gato", "CON LA G. Animal félido en general."));
H.push(new questionDB("harakiri", "CON LA H. Suicidio ritual japonés por desentrañamiento"));
H.push(new questionDB("hoy", "CON LA H. El día en que estamos. El día presente."));
I.push(new questionDB("iglesia", "CON LA I. Templo cristiano"));
I.push(new questionDB("idea", "CON LA I. Representación mental de una cosa"));
J.push(new questionDB("jabali", "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"));
J.push(new questionDB("javascript", "CON LA J. Lenguaje de programación con el que se inicia el precurso en Skylab"));
K.push(new questionDB("kamikaze", "CON LA K. Persona que se juega la vida realizando una acción temeraria"));
K.push(new questionDB("kafkiano", "CON LA K. Dicho de una situación: Absurda, angustiosa"));
L.push(new questionDB("licantropo", "CON LA L. Hombre lobo"));
L.push(new questionDB("libre", "CON LA L. Dicese del software cuyo código fuente puede ser estudiado, modificado, y utilizado libremente con cualquier fin y redistribuido con o sin cambios o mejoras"));
M.push(new questionDB("misantropo", "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"));
M.push(new questionDB("mujer", "CON LA M. Persona de sexo femenino. Señora, componente humano femenino."));
N.push(new questionDB("necedad", "CON LA N. Demostración de poca inteligencia"));
N.push(new questionDB("nanotecnologia","CON LA N. Tecnología de los materiales y de las estructuras en la que el orden de magnitud se mide en nanómetros, con aplicación a la física, la química y la biología."))
Ñ.push(new questionDB("señal", "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."));
Ñ.push(new questionDB("guiño", "CONTIENE LA Ñ. Gesto que denota aprobación. Emoticono muy usado"));
O.push(new questionDB("orco", "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"));
O.push(new questionDB("obstar", "CON LA O. Dicho de una cosa: Ser un obstáculo o un impedimento"));
P.push(new questionDB("protoss", "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"));
P.push(new questionDB("padre", "CON LA P. Progenitor, creador, cura"));
Q.push(new questionDB("queso", "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"));
Q.push(new questionDB("quinto", "CON LA Q. Ejercicio sobre HTML. Cinco partes de una unidad. Que ocupa el lugar número cinco en una serie ordenada."));
R.push(new questionDB("raton", "CON LA R. Roedor"));
R.push(new questionDB("rio", "CON LA R. Torrente constante de agua."));
S.push(new questionDB("stackoverflow", "CON LA S. Comunidad salvadora de todo desarrollador informático"));
S.push(new questionDB("software", "CON LA S. Conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora."));
T.push(new questionDB("terminator", "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"));
T.push(new questionDB("timon", "CON LA T. Suricato amigo de Pumba en el Rey Leon. Dirección o gobierno de un negocio"));
U.push(new questionDB("unamuno", "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"));
U.push(new questionDB("undefined", "CON LA U. Valor de una variable cuando no esta definida en Javascript"));
V.push(new questionDB("vikingos", "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"));
V.push(new questionDB("verdad", "CON LA V. Cierto"));
W.push(new questionDB("sandwich", "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"));
W.push(new questionDB("hardware", "CONTIENE LA W. Equipo. conjunto de aparatos de una computadora."));
X.push(new questionDB("botox", "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"));
X.push(new questionDB("exito", "CONTIENE LA X. Lo que nos espera al acabar el curso de Skylabs. Resultado feliz de una actuación, negocio, etc."));
Y.push(new questionDB("peyote", "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"));
Y.push(new questionDB("ayahuasca", "CONTIENE LA Y. Liana de la selva de cuyas hojas se prepara un brebaje de efectos alucinógenos, empleado por chamanes con fines curativos."));
Z.push(new questionDB("zen", "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"));
Z.push(new questionDB("paz", "CONTIENE LA Z. Concordia. Tranquilidad y sosiego del ánimo, contrarios a la turbación que producen las pasiones."));

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
        document.getElementById("definicion").innerHTML = '<input id="turn" type="button" value="Empezar" onclick="PasaPalabra()" autofocus onkeypress="keyTurn(event)">'
    } else {
        document.getElementById("error").style.display = " inline";
    }
}

function timer(player) {
    player.timer = setInterval(function() {
        player.seconds--;
        document.getElementById("time").innerHTML = player.seconds;
        if (player.seconds <= 0) {
            clearInterval(timer);
            player.finished = true;
            games[games.length - 1].nextPlayer();
        }
    }, 1000);
}

function PasaPalabra() {
    document.getElementById("palabra").style.display = "inline";
    var game = games[games.length - 1];
    var definition = document.getElementById("definicion");
    var player = game.players[game.player];
    clearInterval(player.timer);
    player.drawRosco();
    definition.innerHTML = player.rosco[player.round].question;
    document.getElementById("player").innerHTML = "Turno de: " + game.players[game.player].getName();
    document.getElementById("punt").innerHTML = "puntuación: " + player.points;
    document.getElementById("Pasapalabra").focus();
    timer(player);
}

function nextTurn() {
    var game = games[games.length - 1];
    var player = game.players[game.player];
    var question = player.rosco[player.round];
    var answer = document.getElementById("Pasapalabra");
    question.status = 1;
    if (question.answer === answer.value.toLowerCase()) {
        answer.value = "";
        question.correct = 1;
        player.points++
            player.setStatus() ? game.nextPlayer() : player.nextQuest();
        PasaPalabra();
    } else {
        answer.value = "";
        pass();
    }
}

function pass() {
    var game = games[games.length - 1];
    var player = game.players[game.player];
    clearInterval(player.timer);
    var gp = game.player;
    player.setStatus() ? "" : player.nextQuest();
    game.nextPlayer();
    document.getElementById("player").innerHTML = "Turno de: " + game.players[game.player].getName();
    if (game.activePlayers() == 1 && gp == game.player) {
        PasaPalabra();
    } else {
        document.getElementById("definicion").innerHTML = '<input id="turn" type="button" value="Continuar" onclick="PasaPalabra()" autofocus onkeypress="keyTurn(event)">';
        document.getElementById("palabra").style.display = "none";
    }
}

function scoreBoard() {
    var finishresults = [];
    for (var i = 0; i < games.length; i++) {
        games[i].players.forEach(function(player) {
            player.game = i;
            finishresults.push(player);
        });
    }
    finishresults.sort(function(a, b) {
        return b.points - a.points;
    });
    return finishresults;
}

function drawScoreBoard(finishresults) {
    var inHTML = "<table><tr><th>Game</th><th>Player</th><th>Points</th></tr>";
    finishresults.forEach(function(player) {
        inHTML += "<tr><td>" + player.game + "</td><td>" + player.getName() + "</td><td>" + player.points + "</td></tr>";
    });
    inHTML += "</table>";
    document.getElementById("gameresult").innerHTML = inHTML;
    document.getElementById("gameresult").style.display = "block";
}

function finishGame() {
    games[games.length-1].players.forEach(function(player){
        clearInterval(player.timer);
    });
    document.getElementById("palabra").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("start").style.display = "flex";
    var finishResults = scoreBoard();
    drawScoreBoard(finishResults);
}

function keyGame(event) {
    switch (event.which) {
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

function keyStart(event) {
    switch (event.which) {
        case 13:
            AddPlayer();
            break;
        case 0:
            ClearPlayerList();
            break;
    }
}

function keyTurn(event){
    console.log("Entra");
    switch (event.which) {
        case 13:
        case 32:
            PasaPalabra();
            break;
        case 0:
            finishGame();
            break;
    }
}