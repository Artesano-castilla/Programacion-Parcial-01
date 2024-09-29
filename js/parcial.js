'use strict';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Ejemplo de la estructura de un disco:
/*let disco = {
  nombre: 'El lado oscuro de la Programación',
  autor: 'Los Programadores Anónimos',
  codigo: 1,
  pistas: [
    {
      nombre: 'Esa cajita loca llamada variablecita',
      duracion: 200,
    },
    {
      nombre: 'Nunca quise ser un NaN',
      duracion: 180,
    },
    {
      nombre: 'No quiero programar',
      duracion: 90,
    },
    {
      nombre: 'Bajo presión',
      duracion: 240,
    },
    {
      nombre: 'La odisea de las variables privadas',
      duracion: 120,
    },
    {
      nombre: 'Sr. Programador',
      duracion: 720,
    },
  ],
};*/

// Array que almacenará los discos agregados por el usuario:
let discos = [];

// Función que solicita los datos del disco al usuario y lo guarda:
const cargarNuevoDisco = () => {
  // Cositas:
};

// Función que recorre todos los discos y los muestra en la etiqueta #respuesta:
const mostrarDiscos = () => {
  // Variable que almacenará el contenido a mostrar dentro de #respuesta:
  let respuesta = '';

  // Ejemplo de cómo generar contenido:
  respuesta += '<h1>Soy una etiqueta de ejemplo</h1>'

  // Sentencia que busca la etiqueta #respuesta y le cambia el contenido interno por la variable "respuesta"
  document.getElementById('respuesta').innerHTML = respuesta;
};

// Todas las funciones que necesites:
