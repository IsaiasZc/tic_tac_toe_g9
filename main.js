const casillas = document.querySelectorAll(".casilla");
let jugador = "X";

const jugadasGanadoras = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];

const jugadas = {
  X: [],
  O: [],
};

// [1,2,3,4,5,6]
casillas.forEach(addEvent); // por cada elemento en las casillas, ejecuta una funcion

// for (let casilla of casillas) {
//   addEvent(casilla)
// }

function addEvent(casilla) {
  // a cada elemento casilla, añade un evento
  casilla.addEventListener("click", jugada);
}

function jugada(event) {
  const val = event.target.getAttribute("data-val");

  // Si el casillero está lleno, no continues
  if (event.target.innerHTML) return;

  event.target.innerHTML = jugador;

  guardarJugada(jugador, val);

  if (isWinner(jugador)) {
    alert(`Felicidades, ${jugador} haz ganado!`)
  }

  // cambiar turno
  cambiarJugador();
}

function cambiarJugador() {
  jugador = jugador === "X" ? "O" : "X";
}

function guardarJugada(jugador, val) {
  jugadas[jugador].push(val);
  console.log(jugadas);
}

// function isWinner(jugador) {
//   // recorre el array principal y ejecuta una logica por cada jugada ganadora
//   for (let jugadaGanadora of jugadasGanadoras) {
//     let coincidencias = 0;

//     // recorre la jugada ganadora para evaluar si cada jugada, existe dentro
//     // de los movimientos hechos por el usuario
//     for (let jugada of jugadaGanadora) {

//       // si encuentra la concidencia, suma uno a la variable coincidencia
//       if (jugadas[jugador].includes(jugada)) {
//         coincidencias++;
//       }
//     }

//     // al hallar 3 coincidencias, ha encontrado un ganador y 
//     // retorna true
//     if(coincidencias === 3) {
//       return true;
//     }
//   }

//   return false;
// }

function isWinner(jugador) {

  return jugadasGanadoras.some( jugadaGanadora => jugadaGanadora.every( jugada =>  jugadas[jugador].includes(jugada)) )

};