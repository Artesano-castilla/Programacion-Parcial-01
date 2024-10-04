"use strict";

/*
 * AMENDOLARE, JOEL | GARCIA, RICARDO
 */

//+prompt(`Ingrese el código numérico del disco`) ?? ''
// Array que almacenará los discos agregados por el usuario:

let discos = [];
// Función que solicita los datos del disco al usuario y lo guarda:
const cargarNuevoDisco = () => {
    let posDisco;
    let disco = {
      nombre: prompt(`Ingrese el nombre del disco`) ?? "",
      autor: prompt(`Ingrese el autor del disco`) ?? "",
      codigo: solicitarCodigo,//agregar y validar codigo unico //!joel
      pistas: solicitarPistas //!richard
    };
    //agregar ordenado
    discos.push(disco);
    //

  console.table(discos);
  //console.table(discos[0].pistas);

};

const solicitarCodigo = () => {//!joel
  //agregamos codigo del disco
  //posDisco= discos[i]
  // hola hola hola
  // hola hola hola
  // hola hola hola

  return codigoIngresado

}


const solicitarPistas = () => {//!Richard
  let pistas = [];
 
  do {
    let pista = {
      nombre: prompt(`Ingrese el nombre de la pista`) ?? "",
      duracion: prompt(`Ingrese el duracion de la pista`) ?? "",        
    };
    //validacion pista max
  } while (condition);//confirm
pi
  
  
//Se crea un arreglo con un objeto pista con nombre  y duracion
//pistaMax:-infinity ,

}
// Función que recorre todos los discos y los muestra en la etiqueta #respuesta:
const mostrarDiscos = () => {
  //cantidad de pistas = pistas.length -1
  // Variable que almacenará el contenido a mostrar dentro de #respuesta:
  let duracionTotal;
  let promedioDuracion;
  let pistaMax = -Infinity;
  let respuesta = "";

  // Ejemplo de cómo generar contenido:
  respuesta += "<h1>Soy una etiqueta de ejemplo</h1>";

  // Sentencia que busca la etiqueta #respuesta y le cambia el contenido interno por la variable "respuesta"
  document.getElementById("respuesta").innerHTML = respuesta;
};

// Todas las funciones que necesites:
