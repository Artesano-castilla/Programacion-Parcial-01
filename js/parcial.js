"use strict";

/*
 * AMENDOLARE, JOEL | GARCIA, RICARDO
 */

let discos = [
  {
    nombre: "Disco 1",
    autor: "Autor 1",
    codigo: 101,
    pistas: [
      { nombre: "Pista 1", duracion: 180 },
      { nombre: "Pista 2", duracion: 900 },
      { nombre: "Pista 3", duracion: 210 },
    ],
  },
  {
    nombre: "Disco 2",
    autor: "Autor 2",
    codigo: 102,
    pistas: [
      { nombre: "Pista A", duracion: 300 },
      { nombre: "Pista B", duracion: 360 },
    ],
  },
  {
    nombre: "Disco 3",
    autor: "Autor 3",
    codigo: 103,
    pistas: [
      { nombre: "Track 1", duracion: 200 },
      { nombre: "Track 2", duracion: 220 },
      { nombre: "Track 3", duracion: 240 },
      { nombre: "Track 4", duracion: 180 },
    ],
  },
];

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
      validar =
        isNaN(pista.duracion) || pista.duracion < 0 || pista.duracion > 7200;
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

const mostrarDiscos = () => {
  let contadorDiscos = 0;
  let respuesta = "";
  let promedio;
  let discoMayorDuracion = discos.reduce(
    (max, disco) =>
      disco.pistas.reduce((total, pista) => total + pista.duracion, 0) >
      max.pistas.reduce((total, pista) => total + pista.duracion, 0)
        ? disco
        : max,
    discos[0]
  );

  // Recorremos cada disco en el array 'discos'
  discos.forEach((disco) => {
    const cantidadPistas = disco.pistas.length;
    const duracionTotal = disco.pistas.reduce(
      (total, pista) => total + pista.duracion,
      0
    );
    promedio = duracionTotal / cantidadPistas;
    const pistaMax = disco.pistas.reduce(
      (max, pista) => (max.duracion > pista.duracion ? max : pista),
      disco.pistas[0]
    );
    // Mostrar información del disco
    respuesta += `<div class="disco-info">
                    <h3>Disco: ${disco.nombre}</h3>
                    <p>Autor: ${disco.autor}</p>
                    <p>Código: ${disco.codigo}</p>
                    <p>Pistas:</p><ul>`;
    // Recorremos cada pista del disco   
    disco.pistas.forEach((pista) => {
      respuesta += `<li>${pista.nombre} <ul><li `;
      if (pista.duracion > 180) {
        respuesta += `class="rojo-texto"`;
      }
      respuesta += `>Duración: ${pista.duracion} segundos</li></ul></li>`;
    });
    respuesta += `</ul>
                  <p><strong>Cantidad de pistas:</strong> ${cantidadPistas}</p>
                  <p><strong>Promedio del disco:</strong> ${promedio} segundos</p>
                  <p><strong>Pista con mayor duración:</strong> ${pistaMax.nombre} con ${pistaMax.duracion} segundos</p>
                  <p `;  

    if (discoMayorDuracion === disco) {
      respuesta += `class="rojo-texto"`;
    }
    respuesta += `><strong>Duración total del disco:</strong> ${duracionTotal} segundos</p>
              </div>`;

    contadorDiscos++;
  });

  // Finalmente, mostramos la respuesta en el elemento con id 'respuesta'
  document.getElementById("respuesta").innerHTML = respuesta;
};

// Función que recorre el disco buscando un elemento por codigo
const buscarDisco = () => {
  let respuesta = "";
  let codigo = +prompt("Ingrese el codigo del disco a buscar") ?? "";
  let disco = discos.find((disco) => disco.codigo === codigo);
  if (disco) {
    respuesta += `     
        <div class="disco-info">
          <h3>Disco:${disco.nombre}</h3>
          <p><strong>Autor:</strong> ${disco.autor}</p>
          <p><strong>Código:</strong> ${disco.codigo}</p>
          <h3>Pistas del disco:</h3>
          <ul class="pistas-list">
    `;

    // Recorremos cada pista del disco
    respuesta += "<ul>";
    disco.pistas.forEach((pista) => {
      respuesta += `<li><strong>${pista.nombre}:</strong> ${pista.duracion} segundos</li>`;
    });

    respuesta += `
          </ul>
        </div>     
    `;
  } else {
    respuesta += `
    <div class="no-disco">
      <h1>El disco buscado no se encuentra</h1>
    </div>
  `;
  }
  // Ejemplo de cómo generar contenido:

  // Sentencia que busca la etiqueta #respuesta y le cambia el contenido interno por la variable "respuesta"
  document.getElementById("respuesta").innerHTML = respuesta;
};