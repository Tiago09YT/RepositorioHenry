var listaDeCompras = [];
listaDeCompras[3]="Tomates";
listaDeCompras[1]="Lechuga";
//console.log(listaDeCompras.length);
var elementoDeArray = listaDeCompras[1];
// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
//console.log(nombres); //así también me muestra el length del array

var colores = ["amarillo","azul"]
colores.push("rojo") //añade al final
colores.unshift("verde") //añade al inicio
colores.pop(); //borra el último elemento
colores.shift(); //elimina el primer elemento

var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var incluyeDalí = pintores.includes("Dalí"); //ver si incluye un dato del array

var numeros = [1,6,8,9];
var cumplenCondición = numeros.every((num)=>{
    return num>5; // false o true si cumple con una condición/mayor a 5
})
//console.log(cumplenCondición)

var palabra = "Henri";
var palabraSeparada = palabra.split(""); //"" le indica al metodo que separe por cada caracter
//console.log(palabraSeparada)
palabraSeparada.pop();
palabraSeparada.push("y");

var palabraArreglada = palabraSeparada.join(""); //lo une todo, queda como una palabra
console.log(palabraArreglada)

var nuumeros1= [1,2,3,4];
nuumeros1.forEach((num)=>console.log(num)); //pasa por todos los elementos
nuumeros1.forEach((num)=>{
if(num===3){
    console.log(num)
}})

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno); //suma +1 a cada elemnto