import  {useContext} from 'react';
import { stateContext } from "../contexto/EstadosContexto";
import { useTurnoComputadora } from "../hooks/useTurnoComputadora";
import { useMensaje } from "../hooks/useMensaje";
import * as funciones from "../funciones/crearPaquetesCartas";
import * as funcionesBtn from "../funciones/botones";
import {mostrarCartaJugador} from "../funciones/mostrarCartaJugador";


const useTurnoJugador = () => {
    
    const {
            puntosJugador,
            puntosComputadora,
            btnNuevoJuego,
            btnPedir,
            btnDetener,
            btnOpcion,
            small_jugador,
            deckCartas,
            insertarCartaJugador,
    } = useContext(stateContext);

    const [logicaComputadora] = useTurnoComputadora();
    const [mensajeDelJuego]   = useMensaje();

    const pedirCarta = () => {
        
        funcionesBtn.desactivarBtn1(btnNuevoJuego, btnOpcion)
        
        if (btnOpcion.current.innerText === 'Opcion 1') {

            mostrarCartaJugador(
                deckCartas, 
                funciones.obtenerCarta, 
                funciones.valorCarta, 
                puntosJugador, 
                small_jugador, 
                insertarCartaJugador
            );

            if (puntosJugador.contador >= 21) {

                logicaComputadora(puntosJugador.contador);
                mensajeDelJuego(puntosJugador.contador, puntosComputadora.contador);
                
                funcionesBtn.desactivarBtn2(btnPedir, btnDetener);
            };

        } else if (btnOpcion.current.innerText === 'Opcion 2') {

            mostrarCartaJugador(
                deckCartas, 
                funciones.obtenerCarta, 
                funciones.valorCarta, 
                puntosJugador, 
                small_jugador, 
                insertarCartaJugador
            );

            if (puntosJugador.contador >= 21) {

                mensajeDelJuego(puntosJugador.contador, puntosComputadora.contador);
                funcionesBtn.desactivarBtn2(btnPedir, btnDetener);
            };

            setTimeout(() => {logicaComputadora(puntosJugador.contador)}, 500);

        };
    };
    
    return[pedirCarta, puntosJugador];
}
 
export {useTurnoJugador};

