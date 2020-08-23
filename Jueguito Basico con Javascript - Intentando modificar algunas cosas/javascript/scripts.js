function main(){
  mainGame(); // Esto nos pondra la pantalla de Comenzar.

  document.getElementById('player').addEventListener("click", sumarPuntos); // Cuando se haga click al elemento player, ejecutar funcion sumarPuntos.
  
  document.getElementById('reset').addEventListener("click", resetearPuntos); // Cuando se haga click al elemento reset, ejecutar funcion resetearPuntos
  // sumarPuntos

  document.getElementById('startgame').addEventListener("click", empezarJuego); // Cuando demos click en elemento startgame se ejecutara la funcion empezarJuego, que ejecuta la funcion de restar tiempo y nos habilita a jugar.
}

main(); // Ejecutamos funcion main.


let tiempo=61; // Variable tiempo, el tiempo del juego en cuenta regresiva.
let puntos=0; // Puntos comienza en cero.
let necesarios=30; // Necesarios para ganar: 30.


function mainGame(){
  document.getElementById("start").style.zIndex = 2;
}
function sumarPuntos(){ // Funcion principal que suma los puntos y mueve la bolita.
  // Contador de puntos
  
  puntos++;
  document.getElementById("puntos").innerHTML = 'Puntos: ' + puntos + "/" + necesarios;
  // Mover la bola.
  randNum = Math.round(Math.random() * 460);
  randNum2=Math.round(Math.random()*460);
  document.getElementById("player").style.marginTop = randNum + "px"; // Cuando se haga click a player, le otorgara a player un margin-top al azar, determinado anteriormente por randNum
  document.getElementById("player").style.marginLeft = randNum2 + "px"; // Cuando se haga click a player, le otorgara a player un margin.left al azar, determinado anterior mente por randNum2
  // Alertas al ganar o perder

  if (puntos === necesarios) { // Cuando llegamos a 30, mostrar alerta de has ganado, y resetear puntos.
    alert("Felicidades, has ganado.");
    resetearPuntos();
    //document.getElementById("start").style.zIndex = 2;             // Tambien ejecutara la funcion de abajo, resetear puntos, que nos vuelve a empezar el juego.

  }  //                       ------      ---         FIN DE SUMAR PUNTOS


}
function resetearPuntos(){
  clearInterval(cuentaRegresiva);
  tiempo = 60;
  document.getElementById("tiempo").innerHTML = "Tiempo: " + tiempo;
  mainGame();
  puntos = 0;
  document.getElementById("puntos").innerHTML = 'Puntos: ' + puntos + "/" + necesarios;
  document.getElementById("player").style.marginTop = 0 + 'px';
  document.getElementById("player").style.marginLeft = 0 + 'px';
  
}

// --  - - -- - - - - - -- - - Funcion Restar Tiempo y Set Interval que la ejecuta cada 1000 milisegundos.
var cuentaRegresiva;
function empezarJuego(){
  cuentaRegresiva=setInterval(restarTiempo, 1000); //Esto le dice a la maquina: Cada 1000 milisegundos ejecutame la funcion Restar tiempo.
  document.getElementById("start").style.zIndex = 0;
  
}


function restarTiempo(){      // Esta funcion nos resta el tiempo. Se ejecutara cada 1000 milisegundos gracias al setInterval de abajo.

  tiempo--; //Tiempo = Tiempo - 1. (seteado para iniciar en 60 arriba)
  document.getElementById("tiempo").innerHTML = "Tiempo: "+tiempo; //Insertar tiempo


  if (tiempo === 0) { //Si tiempo llega a cero, alerta de has perdido y resetearpuntos de vuelta.
    alert("Lo siento, has perdido.")
    resetearPuntos();
  }
}

// setInterval(restarTiempo, 1000);     //Esto le dice a la maquina: Cada 1000 milisegundos ejecutame la funcion Restar tiempo.





// Por hacer:

// Start Button.
// Dificultad que nos achique o agrande a player.
// Modo loco que haga crecer al azar a la pelotita en un rango de width razonable (que no sea gigante ni diminuto)
// Grafica que nos muestre puntuaciones anteriores.


// Necesitamos que al apretar START (id start game) se ejecute la funcion comenzar juego.
// La funcion comenzar juego, ademas, nos debera setear el z-index del id start en 0, asi queda en primera plana el contenedor del juego que tiene z-index de 1. Esto lo podemos hacer dentro de la misma funcion, no es necesario crear otra.

// Muy bien, todo bien hasta aca. El problema ahora viene con el tema del set interval que me ejecuta la cuenta atras del tiempo. Primero deberia ver donde esta escrito, porque siempre seme ejecuta dos veces y va de dos en dos o de tres en tres.
// Luego, como hago para detener el set interval, para hacer que al ganar eel juego el tiempo no siga corriendo?


// SOLUCIONADO LO DEL SET INTERVAL, SE PUEDE DETENER LLAMANDO A UNA VARIABLE ADENTRO.
// IGUALE LA VARIABLE cuentaRegresiva a la funcion setInterval(function)
// Y con eso ya es suficiente para ejecutar la variable reloj, la ejecuta sola al igualarla, por lo que directamente reemplaze al setInterval(function) por var cuentaRegresiva=setInterval(function);