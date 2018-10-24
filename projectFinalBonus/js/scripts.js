var letters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var questions = [];
var games = [];
var url = "https://raw.githubusercontent.com/Veenders/skylab-precurs/master/projectFinalBonus/json/questionDB.json";
//"json/questionDB.json" //
/*
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var questionsDB = JSON.parse(this.responseText).questionDB;
            for (var i = 0; i < letters.length; i++) {
                questions[i] = questionsDB.filter(obj => {
                    return obj.letter === letters[i];
                });
            }
        }
    };
*/
function getQuestionsDB() {
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.onload = function() {
            if (xhttp.status == 200) {
                resolve(JSON.parse(xhttp.response));
            } else {
                reject();
            }
        };
        xhttp.send();
    })

}

getQuestionsDB().then(r => {
    var questionsDB = r.questionDB;
    for (var i = 0; i < letters.length; i++) {
        questions[i] = questionsDB.filter(obj => {
            return obj.letter === letters[i];
        });
    }
}).catch(r => {
    console.log(r);
})



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
    games[games.length - 1].players.forEach(function(player) {
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

function keyTurn(event) {
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