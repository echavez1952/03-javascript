//  let myArray = ["rojo", "verde", "azul"];
//  console.log(myArray);

//  let arrayMixto = [9, "hola mundo", false, NaN, undefined];
//  console.log(arrayMixto);

// let emptyArray = [];
// console.log(emptyArray);

// let tamanio = 2000;
// let myCustomArray = [];
// myCustomArray.length = tamanio;
// console.log(myCustomArray);

// let myNewArray = [];
// for (let i = 0; i < 10; i++) {
//   myNewArray[i] = i + 1;
// }
// console.log(myNewArray); // ¨
// console.log(myNewArray[4]);  // 5

// let array1 = ['a', 'b', 'c'];
// let array2 = ['d', 'e', 'f'];
// let array3 = array1.concat(array2);
// console.log(array3);


//The toString() method returns an array as a comma separated string:
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString()); // es lo mismo

// // let cars = new Array(100);
// //let tamanio = 100;
// let cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars);

// // let arrayJoin = new Array(100); 
// let arrayJoin = new Array("Hola", "mi", "nombre", "es", "Edwin");
// let myString = arrayJoin.join();
// //let myString = arrayJoin.join("-");
// console.log(myString);

// // Tomar el último elemento del array y quitarlo
// let arr1 = [1,2,3,4,5,6,7,8,9];
// console.log(arr1);
// let stringPop = arr1.pop();
// console.log(stringPop);
// console.log(arr1);

// let plants = ['broccoli' , 'cauliflower' , 'cabbage' , 'kale', 'tomato' ];
// console.log(plants.pop());
// // expected output: "tomato"
// console.log(plants);
// // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
// plants.pop();
// console.log(plants);
// // expected output: Array ["broccoli", "cauliflower", "cabbage"]

// // // Push insertar un elemento en la ultima posicion del array
// let arr2 = [1,2,3,4,5,6,7,8];
// console.log(arr2);
// arr2.push(9);
// console.log(arr2);
// // Otra forma de insertar un item al final
//  let frutas1 = ["Banana", "Orange", "Apple", "Mango", "Peach"];
//  console.log(frutas1);
//  //frutas1.length = "Kiwi";
//  console.log(frutas1.length);
//  frutas1[frutas1.length] = "Kiwi";
//  console.log(frutas1);
 

// // Reversar un array
// arr2 = arr2.reverse();
// console.log(arr2);

// //Ordenar un array
// arr2.sort();
// console.log(arr2);

// let arry3 =  ["casa", "edificio", "color"];
// console.log(arry3);
// arry3.sort();
// console.log(arry3);

// // Eliminar el primer elemento del array
// let arr4 = [1,2,3,4,5,6,7,8];
// console.log(arr4);
// arr4.shift();
// console.log(arr4);

// //Saber el indice de un elemento
// console.log(arr2);
// console.log(arr2.indexOf(7)); // 6
// console.log(arr2.indexOf(11)); // -1 no localiza el elemento

// console.log(arr2);
// let position = arr2.indexOf(7);
// console.log(position);
// arr2.splice(position,2);
// console.log(arr2);

// arr2.splice(0, 0, "1");
// console.log(arr2);

// let animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'tiger', 'leon'];
// console.log(animals);    
// console.log(animals.slice(2));
// // resultado esperado: Array (5) ['camel', 'duck', 'elephant', 'tiger', 'leon']
// console.log(animals.slice(2, 4));
// // resultado esperado : Array (2) ['camel', 'duck']
// console.log(animals.slice(1, 5));
// // resultado esperado : Array (4) ['bison', 'camel', 'duck', 'elephant']
// console.log(animals.slice(-2));
// // resultado esperado : Array (2) ['tiger', 'leon']
// console.log(animals.slice(2, -1));
// // resultado esperado : Array (4) ['camel', 'duck', 'elephant', 'tiger']  
// console.log(animals.slice(-3,-1)) ;    
//     // resultado esperado: Array (2) ['elephant', 'tiger']

// // Arrays
// Hazlo tú mismo 4
// A. Escribe una función de declaración que acepte un arreglo y retorne el número
// más grande.
// B. Invoca la función de A usando arr = [1, 6, 2, 9] y alerta el número más grande. -->
// function getMaxNumber(arreglo) {
//  let maxNumber = Math.max(...arreglo);
//  console.log(maxNumber);
//  return maxNumber;
// }

// const getMaxNumber1 = function (array) {
//   //return max 
// }

// FUNCIONES
// 
// Funcion de declaracion - hazlo tu mismo 1
// function maxBetween3Numbers(n1,n2,n3) {
//   let maxNumber = Math.max(n1,n2,n3);
//   console.log(maxNumber); 
// }

// Funcion de expresion - hazlo tu mismi 2
// const maxBetween3Numbers = function(n1,n2,n3) {
//   let maxNumber = Math.max(n1,n2,n3);
//   console.log(maxNumber);  
// }

// Funcion de flecha - hazlo tu mismo 3
// const maxBetween3Numbers = (n1,n2,n3) => {
//   let maxNumber = Math.max(n1,n2,n3);
//   console.log(maxNumber);
// }
/*
Funcion de declaracion, expresion y flecha con arreglo
Escribe una funcion de declaracion que acepte un arreglo y
retorne el numero mas grande
Invoca la funcion uisando arr = [1, 6, 2, 9] y alerta el numero mas grande
*/
/* Hazlo tu mismo 4 - declaracion de funcion*/

function getMaxNumber(arreglo) {
  let maxNumber = Math.max(...arreglo); // utliza una funcion spread (...)
  console.log(maxNumber); // 6
  return maxNumber;
  // return Math.max(arreglo); // es mas eficiente
}

/* Hazlo tu mismo 5 - funcion de expresion */
const getMaxNumber1 = function(array) {
  console.log(Math.max(...array));
  alert(Math.max(...array));
  return Math.max(...array);
}

/* Hazlo tu mismo 6 - funcion flecha */
const getMaxNumber2 = (array) => {
  console.log(Math.max(...array));
  alert(Math.max(...array));
  return Math.max(...array);
}

/*
A. Escribe una función de declaración que acepta un arreglo y un número. La
función retornará true si el número existe en el arreglo.
B. Invoca la función de A usando arr = [1, 6, 2, 9] y num = 6, y alerta si el número
existe en el arreglo.
*/ 

/* Hazlo tu mismo 7 - funcion de declaracion */
function findNumberIntoArray(array, number) {
  let isNumberPresent = array.indexOf(number);
  if(isNumberPresent >= 0) {
    console.log(true);
    return false;
  }
  console.log(false);
  return false;
}

/* Hazlo tu mismo 7 - Otra manera mas facil*/
function findNumberIntoArray(array, number) {
  let isNumberPresent = array.indexOf(number);
  return isNumberPresent >= 0 ? console.log(true) : console.log(false); 
}

/* Hazlo tu mismo 7 - Otra manera utilizando la funcion find*/
function findNumberIntoArray2(array, number) {
  let isNumberPresent = array.find((elemento) => elemento == number);
  return isNumberPresent >= 0 ? console.log(true) : console.log(false);
} 

/* Hazlo tu mismo 8 - funcion de expresion*/
const findNumberIntoArray3 = function(array, number) {
  let isNumberPresent = array.find((elemento) => elemento == number);
  return isNumberPresent >= 0 ? console.log(true) : console.log(false);
}

/* Hazlo tu mismo 9 - funcion de flecha */
const findNumberIntoArray4 = (array, number) => {
  let isNumberPresent = array.find((elemento) => elemento == number);
  return isNumberPresent >= 0 ? console.log(true) : console.log(false);
}

/* Hazlo tu mismo 10 */
function minBetween3Numbers(n1, n2, n3) {
  let minNumber = Math.min(n1, n2, n3);
  console.log(minNumber);
} 