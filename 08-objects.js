// OBJETOS

let familia = new Object();  // inicializa un objeto
console.log(familia); //  {}   objeto vacío

 let persona = {
     nombre: 'Byron',
     apellido: 'Realpe',
     edad: 28,
     estadoCivil: 'Soltero',
     estatura: 1.70,
     tieneHijos: true
 }
console.log(persona);
// document.getElementById("output").innerText = persona; // esto no funciona
document.getElementById("output").innerText = JSON.stringify(persona);
// Salida en el div de la pantalla
// {"nombre":"Byron","apellido":"Realpe","edad":28,"estadoCivil":"Soltero","estatura":1.7,"tieneHijos":true}
document.getElementById("output").innerText = JSON.stringify(persona.edad);
// 28   sale en pantalla
// JavaScript Object Notation (JSON) es un formato de texto estándar para el intercambio de datos.



let automovil = new Object();
 automovil.motor = 2.0;
 automovil.marca = 'Chevrrolet';
 automovil.capacidad = 5;
 automovil.tipoGasolina = 'Super';
 automovil.modelo = null;

    console.log(automovil); // {motor: 2, marca: 'Chevrrolet', capacidad: 5, tipoGasolina: 'Super', modelo: null}  
    console.log(automovil.motor); // 2
    console.log(automovil['marca']); // Chevrolet

let carro1 = {
    "motor": 2.0,
    "marca": "Chevrrolet",
    "capacidad": 5,
    "tipoGasolina": "Super",
    "modelo": "Sail"
}

let carro2 = {
    "motor": 4,
    "marca": "Ford",
    "capacidad": 8,
    "tipoGasolina": "Super",
    "modelo": "Explorer"
}

// array de objetos
let carros =  [];  // inicializa el arreglo carros[];
carros.push(carro1);
carros.push(carro2);
console.log(carros); // (2) [{…}, {…}] es un arreglo con 2 objetos
// 0 :  {motor: 2, marca: 'Chevrrolet', capacidad: 5, tipoGasolina: 'Super', modelo: 'Sail'}
// 1 :  {motor: 4, marca: 'Ford', capacidad: 8, tipoGasolina: 'Super', modelo: 'Explorer'}

let personax = {
    nombre: 'Byron',
    apellido: 'Realpe',
    edad: 28,
    estadoCivil: 'Soltero',
    estatura: 1.70,
    tieneHijos: true,
    hijos: [
      {
        nombre: 'Luis'
      },
      {
        nombre: 'Paola'
      }
    ]
 }
    console.log(personax.hijos[0].nombre); // Luis
    console.log(personax.hijos[1].nombre); // Paola


// Hazlo tu mismo 1
// Crea un objeto con las propiedades: precio, color y memoria.
// Asígnale el objeto a una variable llamada computadora 
let computadora = {
     precio: 1.200,
     color: "black",
     memoria: "200GB"
     }
     console.log(computadora); // {precio: 1.2, color: 'black', memoria: '200GB'}

// Hazlo tu mismo 2
// 1. Crea un objeto llamado Persona usando un constructor y dale las siguientes
//    propiedades: nombre, apellido y edad.
// 2. Crea dos instancias del objeto
//    a. Primera instancia p1 : “Michael”, “Jordan”, 49.
//    b. Segunda instancia p2 : “Lara”, “bili”, 74

let persona1 = new Object(
   {
    firstName: "Michael",
    lastName: "Jordan",
    age: 49
 });

let persona2 = new Object (
{
   firstName: "Lara",
   lastName: "bili",
   age: 74
});

// Usando constructor
function Persona(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; 
 }  
 let person1 = new Persona("Michael", "Valdiviezo", 36);
 let person2 = new Persona("Edwin", "Chavez", 72);
 console.log(person1); // Persona {firstName: 'Michael', lastName: 'Valdiviezo', age: 36}Persona {firstName: 'Michael', lastName: 'Valdiviezo', age: 36}
 console.log(person2); // Persona {firstName: 'Edwin', lastName: 'Chavez', age: 72}

