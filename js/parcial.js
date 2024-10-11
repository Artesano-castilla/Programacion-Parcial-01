"use strict";

/*
 * AMENDOLARE, JOEL | GARCIA, RICARDO
 */

let discos = [];

const cargarNuevoDisco = () => {
  let disco = {}; // Objeto de disco

  // Solicitar el nombre
  do {
    disco.nombre = prompt("Ingrese el nombre del disco") ?? "";
    if (disco.nombre.trim() === "") {
      alert("El nombre del disco no puede estar vacío.");
    }
  } while (disco.nombre.trim() === "");

  // Solicitar el autor
  do {
    disco.autor = prompt("Ingrese el autor del disco") ?? "";
    if (disco.autor.trim() === "") {
      alert("El autor del disco no puede estar vacío.");
    }
  } while (disco.autor.trim() === "");

  disco.codigo = solicitarCodigo();
  disco.pistas = solicitarPistas();

  discos.push(disco);
  console.table(disco.pistas);
  console.table(discos);
};

function solicitarCodigo() {
  let codigoValido = false;
  let codigoIngresado;

  while (!codigoValido) {
    codigoIngresado = parseInt(
      prompt("Ingrese el código numérico del disco (entre 1 y 999)")
    );
    if (isNaN(codigoIngresado)) {
      alert("Ingrese un número válido.");
    } else if (codigoIngresado < 1 || codigoIngresado > 999) {
      alert("El código debe estar entre 1 y 999.");
    } else if (discos.find((disco) => disco.codigo === codigoIngresado)) {
      alert("El código ya existe. Ingrese otro.");
    } else {
      codigoValido = true;
    }
  }
  return codigoIngresado;
}

function solicitarPistas() {
  let pistas = [];
  let continuar = true;

  while (continuar) {
    let pista = {};
    let validar;
    // Solicitar nombre de la pista
    do {
      pista.nombre = prompt("Ingrese el nombre de la pista") ?? "";
      validar = pista.nombre.trim() === "";
      if (validar) {
        alert("El nombre de la pista no puede estar vacío.");
      }
    } while (validar);

    do {
      // Solicitar duración de la pista
      pista.duracion = parseInt(
        prompt("Ingrese la duración de la pista en segundos (entre 0 y 7200)")
      );
      validar = isNaN(pista.duracion) || pista.duracion < 0 || pista.duracion > 7200;
      if (validar) {
        alert("La duración debe ser un número entre 0 y 7200 segundos.");
      }
    } while (validar);

    // Agregar la pista al array
    pistas.push(pista);

    // Preguntar si desea continuar agregando pistas
    continuar = confirm("¿Desea ingresar otra pista?");
  }

  return pistas;
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
