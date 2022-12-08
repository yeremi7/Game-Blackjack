const mostrarCartaJugador = (deckCartas, obtenerCarta, valorCarta, puntosJugador, small_jugador, insertarCartaJugador) => {
        
        const carta = obtenerCarta(deckCartas);
        puntosJugador.contador = puntosJugador.contador + valorCarta(carta);
        small_jugador.current.innerText = puntosJugador.contador;

        const imgJugador = document.createElement('img');
        imgJugador.src   = process.env.PUBLIC_URL + `/assets/cartas/${carta}.png`;
        insertarCartaJugador.current.append(imgJugador);
};
 
export {mostrarCartaJugador};