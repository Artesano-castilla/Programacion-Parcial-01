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
      { nombre: "Pista 2", duracion: 240 },
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
  {
    nombre: "Disco 4",
    autor: "Autor 4",
    codigo: 104,
    pistas: [
      { nombre: "Canción 1", duracion: 150 },
      { nombre: "Canción 2", duracion: 190 },
      { nombre: "Canción 3", duracion: 210 },
    ],
  },
  {
    nombre: "Disco 5",
    autor: "Autor 5",
    codigo: 105,
    pistas: [
      { nombre: "Tema 1", duracion: 230 },
      { nombre: "Tema 2", duracion: 250 },
    ],
  },
  {
    nombre: "Disco 6",
    autor: "Autor 6",
    codigo: 106,
    pistas: [
      { nombre: "Melodía 1", duracion: 170 },
      { nombre: "Melodía 2", duracion: 200 },
      { nombre: "Melodía 3", duracion: 220 },
      { nombre: "Melodía 4", duracion: 210 },
    ],
  },
  {
    nombre: "Disco 7",
    autor: "Autor 7",
    codigo: 107,
    pistas: [
      { nombre: "Pista Uno", duracion: 280 },
      { nombre: "Pista Dos", duracion: 300 },
    ],
  },
  {
    nombre: "Disco 8",
    autor: "Autor 8",
    codigo: 108,
    pistas: [
      { nombre: "Canción A", duracion: 260 },
      { nombre: "Canción B", duracion: 320 },
      { nombre: "Canción C", duracion: 290 },
    ],
  },
  {
    nombre: "Disco 9",
    autor: "Autor 9",
    codigo: 109,
    pistas: [
      { nombre: "Track Alpha", duracion: 240 },
      { nombre: "Track Beta", duracion: 270 },
    ],
  },
  {
    nombre: "Disco 10",
    autor: "Autor 10",
    codigo: 110,
    pistas: [
      { nombre: "Song X", duracion: 200 },
      { nombre: "Song Y", duracion: 250 },
      { nombre: "Song Z", duracion: 300 },
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

// Función que recorre todos los discos y los muestra en la etiqueta #respuesta:
const mostrarDiscos = () => {
  let contadorDiscos = 0;
  let respuesta = "";
  // Recorremos cada disco en el array 'discos'
  discos.forEach((disco) => {
    respuesta += `<h2>Disco: ${disco.nombre}</h2>`;
    respuesta += `<p>Autor: ${disco.autor}</p>`;
    respuesta += `<p>Código: ${disco.codigo}</p>`;

    // Recorremos cada pista del disco
    respuesta += "<ul>";
    disco.pistas.forEach((pista) => {
      respuesta += `<li>${pista.nombre} (${pista.duracion} segundos)</li>`;
    });
    respuesta += "</ul>";
    contadorDiscos++;
  });

  respuesta += `<h2>Se han cargado ${contadorDiscos} discos</h2>`; // Contador de discos

  document.getElementById("respuesta").innerHTML = respuesta;

  //cantidad de pistas = pistas.length -1
  // Variable que almacenará el contenido a mostrar dentro de #respuesta:
  let duracionTotal;
  let promedioDuracion;
  let pistaMax = -Infinity;

  // Sentencia que busca la etiqueta #respuesta y le cambia el contenido interno por la variable "respuesta"
  document.getElementById("respuesta").innerHTML = respuesta;
};

// Función que recorre el disco buscando un elemento por codigo
const buscarDisco = () => {
  let respuesta = "";
  let codigo = +prompt("Ingrese el codigo del disco a buscar") ?? "";
  let disco = discos.find((disco) => disco.codigo === codigo);
  if (disco) {
    respuesta += `
      <div class="discos-grid">
        <div class="disco-info">
          <h2>${disco.nombre}</h2>
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
