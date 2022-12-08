import {useContext} from 'react';
import { stateContext } from "../contexto/EstadosContexto";
import * as funciones from "../funciones/crearPaquetesCartas";
import {desactivarBtn2} from "../funciones/botones";
import { useMensaje } from "../hooks/useMensaje";

const useTurnoComputadora = () => {

    const {
            puntosComputadora,
            deckCartas,
            btnPedir, 
            btnDetener,
            btnOpcion,
            small_computadora,
            insertarCartaComputadora,
    } = useContext(stateContext);

    const [mensajeDelJuego] = useMensaje();

    const logicaComputadora = (puntosDelJugador) => {

        if (btnOpcion.current.innerText === 'Opcion 1') {

            do {
                const carta = funciones.obtenerCarta(deckCartas);
                puntosComputadora.contador = puntosComputadora.contador + funciones.valorCarta(carta);
                small_computadora.current.innerText = puntosComputadora.contador;
                
                const imgComputadora = document.createElement('img');
                imgComputadora.src = process.env.PUBLIC_URL + `/assets/cartas/${carta}.png`;
                insertarCartaComputadora.current.append(imgComputadora);
                
            } while (puntosComputadora.contador  <= puntosDelJugador && puntosDelJugador <= 21);

        } else if (btnOpcion.current.innerText === 'Opcion 2') {

            do {
                const carta = funciones.obtenerCarta(deckCartas);
                puntosComputadora.contador = puntosComputadora.contador + funciones.valorCarta(carta);   

                if (puntosDelJugador >= 21) {
                    puntosComputadora.contador = small_computadora.current.lastChild.textContent;
                    small_computadora.current.innerText = puntosComputadora.contador;
                } else{
                    small_computadora.current.innerText = puntosComputadora.contador;
                };

                const imgComputadora = document.createElement('img');
                imgComputadora.src = (puntosDelJugador >= 21) ? '' : process.env.PUBLIC_URL + `/assets/cartas/${carta}.png`;
                insertarCartaComputadora.current.append((puntosDelJugador >= 21) ? '' : imgComputadora);

            } while (puntosDelJugador < (10 <= 2) && puntosComputadora.contador <= puntosDelJugador && puntosDelJugador <= 21);

            if (puntosComputadora.contador >= 21) {

                mensajeDelJuego(puntosDelJugador, puntosComputadora.contador);
                desactivarBtn2(btnPedir, btnDetener);
            };
        };
    };

    return[logicaComputadora, puntosComputadora];

}

export {useTurnoComputadora}