var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

function Welcome(name) {
    return "Welcome " + name + " to Skylab Airlines"
}

function FlyInformation(flight) {
    var message = flight.id + " El vuelo con origen en: " + flight.from + " y destino " + flight.to + " tienen un precio de " + flight.cost + "€";
    if (flight.scale) {
        message += " y tiene escalas en otros aeropuertos.";
    } else {
        message += " y no realiza ninguna escala";
    }
    return message;
}

function FlightsInformation(flights) {
    var message = "";
    flights.forEach(function(obj) {
        message += FlyInformation(obj) + "\n";
    });
    return message;
}

function MediumCost(flights) {
    var cost = 0;
    var number = 0;

    flights.forEach(function(obj) {
        cost += obj.cost;
        number++;
    });
    var mediumCost = cost / number;
    return "El coste medio de los vuelos es: " + mediumCost.toFixed(2) + "€";
}

function FlightsWithScale(flights) {
    var message = "Los vuelos con Escala son:\n";
    flights.forEach(function(obj) {
        if (obj.scale) {
            message += FlyInformation(obj) + "\n";
        }
    });
    return message;
}

function Last5Flights(flights) {
    var message = "Los últimos 5 vuelos del dia son:\n";
    var lastFlights = flights.slice(-5);
    lastFlights.forEach(function(obj) {
        message += FlyInformation(obj) + "\n";
    });
    return message;
}
var name = prompt("What's you're name?/¿Cual es su nombre?");
console.log(Welcome(name));
console.log(FlightsInformation(flights));
console.log(MediumCost(flights));
console.log(FlightsWithScale(flights));
console.log(Last5Flights(flights));
var user = prompt("What kind of user you are?/¿Que tipo de usuario eres?(ADMIN/USER)");
var cont = "y";

while (cont == "y") {
    switch (user) {
        case "ADMIN":
            console.log("Es usted Administrador");
            break;
        case "USER":
            console.log("Es usted usuario");
            break;
        default:
            console.log("Selección erronea");
    }
    cont = prompt("Do you want to do another accion?¿Desea realizar otra operación(y/n)?")
}