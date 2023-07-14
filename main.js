const casillas = document.querySelectorAll(".casilla");
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
  console.log(val);
  console.log("hola, funciono :D");
}