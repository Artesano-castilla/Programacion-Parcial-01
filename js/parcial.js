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
    codigo: solicitarCodigo()//agregar y validar codigo unico //!joel
    
  }

 pistas: solicitarPistas //!richard
};
//agregar ordenado
discos.push(disco);
//

console.table(discos);
//console.table(discos[0].pistas);

;

function solicitarCodigo() {//!joel
  //agregamos codigo del disco
  //posDisco= discos[i]

  let codigoValido = false;
  let codigoIngresado;

  while (!codigoValido) {
    codigoIngresado = parseInt(prompt("Ingrese el código numérico del disco (entre 1 y 999)"));
    if (isNaN(codigoIngresado)) {
      alert("Ingrese un número válido.");
    } else if (codigoIngresado < 1 || codigoIngresado > 999) {
      alert("El código debe estar entre 1 y 999.");
    } else if (discos.find(disco => disco.codigo === codigoIngresado)) {
      alert("El código ya existe. Ingrese otro.");
    } else {
      codigoValido = true;
    }
  }
  return codigoIngresado; //! No se si estará bien richard?
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
