"use strict";

/*
 * AMENDOLARE, JOEL | GARCIA, RICARDO
 */

//+prompt(`Ingrese el código numérico del disco`) ?? ''
// Array que almacenará los discos agregados por el usuario:
let discos = [];

// Función que solicita los datos del disco al usuario y lo guarda:
const cargarNuevoDisco = () => {
 // do {
    let disco = {
      nombre: prompt(`Ingrese el nombre del disco`) ?? "",
      autor: prompt(`Ingrese el autor del disco`) ?? "",
      // codigo: agregarCodigo,//agregar y validar codigo unico
      // pistas: agregarPistas //Se crea un arreglo con un objeto pista con nombre  y duracion
    };
    discos.push(disco);
  //} while (condition);//desea ingresar otro disco???confirm

  // console.table(discos.disco[0]);
};

// Función que recorre todos los discos y los muestra en la etiqueta #respuesta:
const mostrarDiscos = () => {
  // Variable que almacenará el contenido a mostrar dentro de #respuesta:
  let respuesta = "";

  // Ejemplo de cómo generar contenido:
  respuesta += "<h1>Soy una etiqueta de ejemplo</h1>";

  // Sentencia que busca la etiqueta #respuesta y le cambia el contenido interno por la variable "respuesta"
  document.getElementById("respuesta").innerHTML = respuesta;
};

// Todas las funciones que necesites:
