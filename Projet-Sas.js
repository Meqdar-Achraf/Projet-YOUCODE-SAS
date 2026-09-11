const prompt= require(`prompt-sync`)();

// variables
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 00
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];
let trajet;
let ticket, j = 1 ;
let choix;



function menu(){
    console.log("======================================================");
    console.log(" RAILWAY MANAGER");
    console.log("======================================================");
    console.log("1.Afficher les trajets");
    console.log("2.Acheter un ticket");
    console.log("3.Afficher les tickets");
    console.log("4.Annuler un ticket");
    console.log("5.Rechercher un ticket");
    console.log("6.Filtrer le trajets");
    console.log("7.Trier les Trajets");
    console.log("8.Statistiques (Bonus)");    
    console.log("0.Quitter");
}// menu 

function operation1(){
    console.log("=== TRAJETS DISPONIBLES ==");    
    for (let i = 0 ; i < trips.length ; i++){

        console.log(`#${trips[i].id} ${trips[i].departure} -> ${trips[i].destination} 
            \nDépart : ${trips[i].departureTime}
            \nArrivée : ${trips[i].arrivalTime}
            \nPrix : ${trips[i].price}
            \nPlaces disponibles : ${trips[i].availableSeats}
            \n--------------------------------------`);
    }
}//Afficher les trajets

function verificationDeTrajets(ticID){
    let available = false    
    for (let i = 0 ; i< trips.length ; i++){
        if (ticID == trips[i].id){
            trajet = trips[i]
            available = true;
    // break;
        }
    }
    return available;
}//verifier l'existence du trajet 

function trajetdest(loop){
    const trajet_trip=trips.find((trjt) => trjt.id === tickets[loop].tripID)
    
    return trajet_trip;
}//retrouver le trip associer au tickets

function ticketavecsucces(){
    console.log("Ticket acheté avec succès.");
    console.log(`ticket #${ticket.id}`);
    console.log(`passager : ${ticket.passengerName}`);
    console.log(`trajet : ${trajet.departure} -> ${trajet.destination}`);
    console.log(`place : ${ticket.seatnumber}`);
    console.log(`prix : ${ticket.price}`)
}// logs de la creation du tickets

function seat(tid){
    for (let i = 1 ;i<=50 ; i++){
        let isdisponible= true
        for  (let k=0; k < tickets.length; k++ ){
            if( tickets[k].tripID === tid){
                if (i == tickets[k].seatnumber){
                    isdisponible = false
                }
            }
        }       
        if (isdisponible == true){
            return i;
        }
    }
}//retrouver le numero de place disponible pour l'attribuer au ticket 

function affichagedestickets(){
    for(let i = 0; i < tickets.length ;i++){
        let trajet_trip = trajetdest(i)
        console.log(`#ticket: ${tickets[i].id}`);
        console.log(`Passager : ${tickets[i].passengerName}`);
        console.log(`Trajet : ${trajet_trip.departure} -> ${trajet_trip.destination}`);
        console.log(`Place : ${tickets[i].seatnumber}`);
        console.log(`Prix : ${tickets[i].price}`);                    
    }
}//afficher de tous les tickets creer

function creationdeticket(name, ID, seat){
    ticket = {
        id : j++,
        passengerName : name,
        tripID : ID,
        seatnumber : seat,
        price : trajet.price
    }  
}// creer object (ticket)

do{
menu()

choix = Number(prompt("Vouillez entrer le numero d'operation : "))


switch(choix){
    case 1: //affichage des trajet
        operation1()
        break;
    case 2: // creation des tickets
        let passager = prompt("Vouillez entrer votre nom : ");
        let trajetID = Number(prompt("vouillez entrer l'ID de trajet : "));
        let place = seat(trajetID);


        if (verificationDeTrajets(trajetID) == true && trajet.availableSeats > 0){

            creationdeticket(passager, trajetID, place)

            trajet.availableSeats--

            tickets.push(ticket)

            ticketavecsucces()
            
        }else if (verificationDeTrajets(trajetID) == false){
            console.log("Trajet introuvable.");

        }else{
            console.log("Train complet.")
        }

        break;
    case 3: // affichage des tickets creer
        if (tickets.length == 0){
            console.log("Aucun ticket enregistré.")
        }
        affichagedestickets()

        break;
    case  4: //annulation d'un ticket
        let Annulerticket = Number(prompt("vouillez entrer l'ID du ticket pour l'annuler : "));
        const Annul = tickets.find((tick) => tick.id == Annulerticket);

        if(!Annul){ 
            console.log ("Ticket introuvable")
            return
        };
        const trip = trips.find((obj) => obj.id == Annul.tripID)
        
        let index = tickets.findIndex((condition) => condition == Annul)
        tickets.splice(index, 1)
  
        console.log("ticket annuler avec succes.")
        ++trip.availableSeats
        
        break;
    case  5: // recherche du ticket par nom 
        let recherche = prompt("vouillez entrer le nom de passager : ");

        for(let i =0; i < tickets.length ; i++ ){
            var isthere =false 
            if(tickets[i].passengerName === recherche){

                isthere = !isthere                    
            }
            if(isthere){
                console.log(`Ticket#${tickets[i].id}`)
                console.log(`passager : ${tickets[i].passengerName}`)
                console.log(`${trajetdest(i).departure} --> ${trajetdest(i).destination}`)
                console.log(`place : ${tickets[i].seatnumber}`)
                console.log(`Pix : ${tickets[i].price}`)
            }
        }
        if(!isthere){console.log(`tickets introuvable !! `)}


        break;
    case 6: //filtrage des trajet par ville
        let ville =prompt("vouillez entrer la ville de depart : ")
        const filtr = trips.filter((objet)=> objet.departure == ville)
        for (let i= 0; i < filtr.length ; i++){        
        console.log(`${filtr[i].departure} --> ${filtr[i].destination} : ${filtr[i].price} Dh`)
        }
        break;

    case 7://tri des trajets selo leur prix 

        for (let i = 0 ;i < trips.length ; i++){
           for (let k = 0 ; k < trips.length - i-1 ;k++){
            if (trips[k].price > trips[k + 1].price){
                [trips[k], trips[k+1]] = [trips[k+1], trips[k] ]
            }
           } 
        }
        for(let i = 0 ; i < trips.length;i++){
            console.log(`${trips[i].departure} --> ${trips[i].destination} : ${trips[i].price} Dh`)
        }

        break;
    case 8:
        console.log("===BONUS===")
        console.log(`le nombre des tickets vendus : ${tickets.length}`)
        let somme = 0
        for(let i = 0 ; i < tickets.length ; i++){
            somme += tickets[i].price
        }
        console.log(`Chiffre d'affaires total : ${somme} Dh`)
        break;
    case 0:
        console.log("Quitter le programme....")
        break;
        
    default:
        console.log("Invalide option.");
}

}while(choix != 0)

