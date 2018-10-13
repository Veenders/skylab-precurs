function Welcome(name) {
    return "Hello " + name + ", Welcome to our Bingo Game!!";
}

function Bye(message) {
    var otherGame = confirm(message)
    return otherGame;
}

function RandomNumber(numbers) {
    var cont = true;
    while (cont) {
        var number = Math.floor(Math.random() * 10) + 1;
        if (numbers.indexOf(number) == -1) {
            cont = false;
        }
    }
    return number;
}

function initialNumbers(length) {
    var numbers = [];
    for (i = 0; i < length; i++) {
        numbers.push(RandomNumber(numbers));
    }
    return numbers.sort();
}

function Carton() {
    this.length = 5;
    this.numbers = initialNumbers(this.length);
    this.getNumbers = function() {
        return this.numbers;
    }
    this.setNumbers = function(numbers) {
        this.numbers = numbers;
    }
    this.finishGame = function() {
        var i = 0;
        this.numbers.forEach(function(number) {
            number === "X" ? i++ : i = i;
        });
        if (i === this.numbers.length) {
            return true;
        } else {
            return false;
        }
    }
}

function Player(name) {
    this.name = name;
    this.points = 0;
    this.carton = new Carton();
    this.getName = function() {
        return this.name;
    }
    this.getCarton = function() {
        return this.carton.getNumbers();

    }
    this.setCarton = function(numbers) {
        this.carton.setNumbers(numbers);
    }
    this.finishGame = function() {
        return this.carton.finishGame();
    }
    this.resultGame = function() {
        return "The Player " + this.name + ", the player's carton remains " + this.getCarton() + " and has " + this.points + " points.";
    }
}

function startGame() {
    var cont = true;
    var players = [];
    while (cont) {
        players.push(new Player(prompt('What\'s your name?')));
        var name = players[players.length - 1].getName();
        console.log(Welcome(name));
        cont = Bye("Do you want to add another player?");
    }
    return players;
}

function numberFinded(carton, position, player) {
    console.log(player.getName() + " tiene este número en su carton.");
    player.points += 10;
    carton.splice(position, 1, "X");
    console.log("el estado del carton de " + player.getName() + " es :" + carton);
    return carton;
}

function playTurn(player, number) {
    var carton = player.getCarton();
    var exist = carton.indexOf(number);
    exist === -1 ? console.log("no esta en el carton de " + player.getName()) : player.setCarton(numberFinded(carton, exist, player));
    return player.finishGame();
}

function playGame(players) {
    var cont = true
    var turn = 0;
    var numbers = []
    while (cont) {
        numbers.push(RandomNumber(numbers));
        console.log("El numero es: " + numbers[numbers.length - 1]);
        players.forEach(function(player) {
            var finishgame = playTurn(player, numbers[numbers.length - 1]);
            if (finishgame) {
                cont = false;
                player.points += 100;
                console.log("Bingo!!! El jugador " + player.getName() + " ha acabado el Carton y ha ganado.");
            }
        });
        if (cont) { cont = Bye("Do you want to play another turn?") }
        turn++;
    }
    players.forEach(function(player) {
        player.points = player.points - turn;
    });
    return { players: players, turn: turn };
}

function GameResults(games) {
    for (i = 0; i < games.length; i++) {
        console.log("En la partida " + games[i].partida + " ha durado " + games[i].game.turn + " turnos y los resultados son:");
        games[i].game.players.forEach(function(player) {
            console.log(player.resultGame());
        });
    }
}
//Programa Principal
function Bingo() {
    var games = [];
    var partida = 1;
    var cont = true;
    while (cont) {
        var players = startGame();
        game = playGame(players);
        games.push({ game: game, partida: partida });
        cont = Bye("Do you want to start a new Game?");
        partida++;
    }
    GameResults(games);
}

//Inicialització del Programa
Bingo();