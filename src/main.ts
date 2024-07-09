import "./style.css";

let puntos = 0



const muestraPuntuacion = (puntos: number) => {
    const elementoPuntos = document.getElementById("puntuacion");
    if (elementoPuntos && elementoPuntos instanceof HTMLOutputElement){
        elementoPuntos.innerHTML = puntos.toString()
    }
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const mostrarCarta = (numeroCarta: number) : void => {

        switch(numeroCarta){
            case 1:
                
        }
}

function generarCarta() {
  const numero = Math.floor(Math.random() * 10) + 1;
  if (numero > 7) {
    return numero + 2;
  }
  return numero;
}



const handleButtom () => {
    const numeroCarta = generarCarta();
    mostrarCarta(numeroCarta);

};

const botonRobar = document.getElementById("robar");
if (botonRobar && botonRobar instanceof HTMLButtonElement) {
  botonRobar.addEventListener("click", handleButtom);
}



console.log(numeroCarta);
