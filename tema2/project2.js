//Variable amb les Dades de Vols.
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

//Funció per donar la Benvinguda al programa.
function Welcome(name) {
    return "Welcome " + name + " to Skylab Airlines"
}

//Funció per tornaqr el missatge amb la informació de cada vol.
function FlyInformation(flight) {
    var message = flight.id + " El vuelo con origen en " + flight.from + " y destino " + flight.to + " tienen un precio de " + flight.cost.toFixed(2) + "€";
    if (flight.scale) {
        message += " y tiene escalas en otros aeropuertos.";
    } else {
        message += " y no realiza ninguna escala";
    }
    return message;
}

//Funció que rep tots els vols i retorna tots els vols sense filtre.
function FlightsInformation(flights) {
    var message = "";
    flights.forEach(function(obj) {
        message += FlyInformation(obj) + "\n";
    });
    return message;
}

//Funció per treure el Cost Mig dels Vols.
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

//Funció per retornar els vols que tenen escales.
function FlightsWithScale(flights) {
    var message = "Los vuelos con Escala son:\n";
    flights.forEach(function(obj) {
        if (obj.scale) {
            message += FlyInformation(obj) + "\n";
        }
    });
    return message;
}

//Funció per retornar els últims 5 vols del dia.
function Last5Flights(flights) {
    var message = "Los últimos 5 vuelos del dia son:\n";
    var lastFlights = flights.slice(-5);
    lastFlights.forEach(function(obj) {
        message += FlyInformation(obj) + "\n";
    });
    return message;
}

//Funció per afegir Vols
function createFlight(){
    var flight = {};
    var id = parseInt(prompt("Que identificador desea utilizar?"));
    if(isNaN(id)){
        console.log("lo sentimos el identificador ha de ser un número");
        return createFlight();
    }else{
        flight.id = id;
    }
    var to = prompt("Destino del vuelo?");
    flight.to = to;
    var from = prompt("Origen del vuelo?");
    flight.from = from;
    var cost = parseInt(prompt("Coste del Billete?"));
    if(isNaN(cost)){
        console.log("lo sentimos el coste tiene un valor erroneo");
        return createFlight();
    }else{
        flight.cost = cost;
    }
    var scale = prompt("Tiene Escalas en otros aeropuertos?(true/false)");
    if(scale=="true"){
        flight.scale = true;
    }else if(scale=="false"){
        flight.scale = false;
    }else{
        console.log("Lo sentimos pero el valor de Escala es incorrecto");
        flight = createFlight();
    }
    return flight;
}

//Funció per eliminar vols
function DeleteFlight(){
    console.log(FlightsInformation(flights));
    var id = prompt("Indique el identificador del vuelo que desea eliminar:")
    flights.forEach(function(obj,i) {
        if (obj.id==id) {
            flights.splice(i,1);
        }
    });
}

//Opcions d'administració
function AdminOptions(){
    var opcion = prompt("Que desea hacer con los vuelos?(Crear/Eliminar)");
    switch(opcion){
        case "Crear":
            if(flights.length<=15){
                flights.push(createFlight());
            }else{
                alert("Lo sentimos ha llegado al màximo de 15 vuelos");
            }
            break;
        case "Eliminar":
            DeleteFlight();
            break;
        default:
            console.log("Lo sentimos, opción erronea.");
            return;
    }
    console.log(FlightsInformation(flights));
}

//Buscar Vuelo
function SearchFlight(){
    console.log(FlightsInformation(flights));
    var option = prompt("Indique si quiere encontrar billetes: 1.- igual a, 2.- mayor que, 3.- menor que");
    var cost = parseInt(prompt("Indique el coste del billete"));
    var message = "";
    var total = 0;
    flights.forEach(function(obj) {
        switch(option){
            case "1":
                if (obj.cost == cost) {
                    message += FlyInformation(obj) + "\n";
                    total++;
                }
                break;
            case "2":
                if (obj.cost >= cost) {
                    message += FlyInformation(obj) + "\n";
                    total++;
                }
                break;
            case "3":
                if (obj.cost <= cost) {
                    message += FlyInformation(obj) + "\n";
                    total++
                }
                break;
        }
    });
    if(total==0){
        message = "Lo sentimos, però no hemos encontrado vuelos con esas características."
    }
    return [message,total];
}

//Opción de Usuario
function UserOptions(){
    var userMessage = SearchFlight();
    if(userMessage[1]!=0){
        console.log("Hemos encontrado "+userMessage[1]+" vuelos:");
        console.log(userMessage[0]);
        prompt("Indique el identificador del vuelo que desea comprar?");
        console.log("Gracias por su compra, vuelva pronto");
    }else{
        console.log(userMessage[0]);
    }
}

//Programa Principal.
function SkylabAirlines(){
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
                AdminOptions()
                break;
            case "USER":
                UserOptions()
                break;
            default:
                console.log("Selección erronea");
                var user = prompt("What kind of user you are?/¿Que tipo de usuario eres?(ADMIN/USER)");
        }
        cont = prompt("Do you want to do another accion?¿Desea realizar otra operación(y/n)?")
    }
}

//Inicialització del programa.
SkylabAirlines();