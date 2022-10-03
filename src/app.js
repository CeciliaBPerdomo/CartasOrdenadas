/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generarCarta() {
    let palos = ["♦", "♥", "♠", "♣"];
    let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

    let palo = palos[Math.floor(Math.random() * palos.length)];
    let numero = numeros[Math.floor(Math.random() * numeros.length)];

    return numero + palo;
  }

  function dibujarCartas(array) {
    document.getElementById("nuevasCartas").innerHTML = "";
    for (let i = 0; i < array.length; i++) {
      // Chequea que el palo para pintar la carta de roja
      let color = array[i][1] == "♥" || array[i][1] == "♦" ? "color:red" : "";

      document.getElementById("nuevasCartas").innerHTML += `
        <div class="d-inline-block" id="cartaTamano">
          <div class="card fs-1 " id="carta" name="carta" style="width:9rem; height: 15rem; ${color}">       
            <div class="card-body">
                <p class="paloIzq card-text text-start" id="palo-izq">${array[i][1]}</p>
            </div> 
            <div>
                <p class="numeroBar card-text text-center" id="numerocard">${array[i][0]}</p>
            </div>
            <div class=" card-body">
                <p class="paloDer card-text text-end" id="palo-der">${array[i][1]}</p>
            </div>
          </div>
        </div>`;
    }
  }

  let arrCartas = [];

  // Creamos el nuevo array
  document.getElementById("boton").addEventListener("click", function() {
    arrCartas = [];
    document.getElementById("nuevasCartas").innerHTML = "";

    let cantidadCartas = document.getElementById("cantidad").value;

    for (let i = 0; i < cantidadCartas; i++) {
      let carta = generarCarta();
      arrCartas.push(carta);
    }
    dibujarCartas(arrCartas);
    return arrCartas;
  });

  //Ordena las cartas
  document.getElementById("ordenar").addEventListener("click", function() {
    let wall = arrCartas.length - 1;

    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        let temp = arrCartas[index].slice(0, 1);
        let temp1 = arrCartas[index + 1].slice(0, 1);

        //let temp1 = arrCartas[index + 1][1];

        if (temp == "A") {
          temp = 1;
        } else if (temp == "J") {
          temp = 10;
        } else if (temp == "Q") {
          temp = 11;
        } else if (temp == "K") {
          temp = 12;
        }

        if (temp1 == "A") {
          temp1 = 1;
        } else if (temp1 == "J") {
          temp1 = 10;
        } else if (temp1 == "Q") {
          temp1 = 11;
        } else if (temp1 == "K") {
          temp1 = 12;
        }

        if (temp > temp1) {
          let aux = arrCartas[index];
          arrCartas[index] = arrCartas[index + 1];
          arrCartas[index + 1] = aux;
        }
        index++;
      }
      wall--;
    }

    dibujarCartas(arrCartas);
    return arrCartas;
  });
};
