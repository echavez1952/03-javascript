// Objetos
// let persona = {
//     nombre: "Byron",
//     apellido: "Realpe",
//     edad: 28,
//     estadoCivil: "Soltero",
//     estatura: 1.70,
//     tieneHijos: true
// }
// console.log(persona);
// // document.getElementById("output").innerText = JSON.stringify(persona.edad);


// let carro1 = new Object();
// automovil.motor = 2.0;
// automovil.marca = "Chevrrolet";
// automovil.capacidad = 5;
// automovil.tipoGasolina = "Super";
// automovil.modelo = null;

// // console.log(automovil.motor);
// // console.log(automovil["marca"]);
// let carro1 = new Object();
// carro1.motor = 2.0;
// carro1.marca = "Chevrrolet";
// carro1.capacidad = 5;
// carro1.tipoGasolina = "Super";
// carro1.modelo = null;

// let carro1 = new Object();
// automovil.motor = 2.0;
// automovil.marca = "Chevrrolet";
// automovil.capacidad = 5;
// automovil.tipoGasolina = "Super";
// automovil.modelo = null;
 
// Crea un objeto con las propiedades: precio, color y memoria.
// Asígnale el objeto a una variable llamada computadora 
let computadora = {
    precio: 1.200,
    color: "black",
    memoria: "200GB"
    }
    console.log(computadora);

// Crea un objeto llamado Persona usando un constructor y dale las siguientes
// propiedades: nombre, apellido y edad.
// 2. Crea dos instancias del objeto
// a. Primera instancia p1 : “Michael”, “Jordan”, 49.
// b. Segunda instancia p2 : “Lara”, “bili”, 74

let persona1 = new Object(
    {
        firstName: "Michael",
        lastName: "Jordan"
        age: 49
});

let persona2 = new Object (
{
    firstName: "Lara",
    lastName: "Billy"
    age: 74
});

function Persona(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; 
}  
 let persona1 = new Persona("Michael", "Valdiviezo", 36);
 let persona2 = new Persona("Edwin", "Chavez", 72);
 console.log(persona1);
 console.log(persona2);

