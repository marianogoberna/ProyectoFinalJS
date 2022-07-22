


const personajes = [
    {
        nombre: "Yoda",
        midiclorians: 17700,
        exp: 10,
        forma: "Ataru"
    },
    {
        nombre: "Anakin",
        midiclorians: 27700,
        exp: 5,
        forma: "Shien"
    },
    {
        nombre: "Palpatine",
        midiclorians: 21700,
        exp: 10,
        forma: "Niman"
    },
    {
        nombre: "Luke",
        midiclorians: 14500,
        exp: 7,
        forma: "Soresu"
    },
    {
        nombre: "Dooku",
        midiclorians: 13500,
        exp: 10,
        forma: "Makashi"
    },
    {
        nombre: "Obi-Wan",
        midiclorians: 13400,
        exp: 9,
        forma: "Soresu"
    },
    {
        nombre: "Mace",
        midiclorians: 12000,
        exp: 8,
        forma: "Juyo"
    },
    {
        nombre: "Qui-gon",
        midiclorians: 10000,
        exp: 8,
        forma: "Ataru"
    },

];


var personaje1 = prompt("Ingrese el nombre del primer personaje. Las opciones son Yoda, Anakin, Palpatine, Luke, Dooku, Obi-Wan, Mace, Qui-gon");

while (!personajes.find((personaje) => personaje.nombre === personaje1)){
    alert("Ingrese un nombre válido");
    personaje1 = prompt("Ingrese el nombre del primer personaje. Las opciones son Yoda, Anakin, Palpatine, Luke, Dooku, Obi-Wan, Mace, Qui-gon");

}

var personaje2 = prompt("Ingrese el nombre del segundo personaje. Las opciones son Yoda, Anakin, Palpatine, Luke, Dooku, Obi-Wan, Mace, Qui-gon");

while (!personajes.find((personaje) => personaje.nombre === personaje2)){
    alert("Ingrese un nombre válido");
    personaje2 = prompt("Ingrese el nombre del segundo personaje. Las opciones son Yoda, Anakin, Palpatine, Luke, Dooku, Obi-Wan, Mace, Qui-gon");

}

fight (personaje1, personaje2);

function fight(pj1, pj2){
    let p1 = personajes.find((personaje) => personaje.nombre === pj1);
    let p2 = personajes.find((personaje) => personaje.nombre === pj2);
    console.log(p1);
    if (p1.midiclorians > p2.midiclorians){
        alert(`El ganador es ${p1.nombre}`);
    }
    else if(p1.nombre === p2.nombre){
        alert(`El personaje no puede luchar contra si mismo!`);
    }
    else{
        alert(`El ganador es ${p2.nombre}`);
    }
};












