import {useContext} from 'react';
import { stateContext } from "../contexto/EstadosContexto";

const useMensaje = () => {
   
    const{
            setEstadoMensaje,
            setMensaje,
    } = useContext(stateContext);

    const mensajeDelJuego = (puntosJugador, puntosComputadora) => {

        setTimeout(() => {
            if (puntosJugador === puntosComputadora) {
                setEstadoMensaje(true);
                setMensaje({
                    tipo: 'Empate',
                    mensaje: 'Guao empataron, hagan la revancha'
                }) 
            }
            else if (puntosJugador >= 21 && puntosComputadora <= 0 ) {
                setEstadoMensaje(true);
                setMensaje({
                    tipo: 'Error',
                    mensaje: 'Espera el turno de la computadora'
                }) 
            }
            else if (puntosComputadora === 21) {
                setEstadoMensaje(true);
                setMensaje({
                    tipo: 'Perder',
                    mensaje: 'Lo siento, Gana la computadora'
                })
            }
            else if (puntosJugador === 21) {
                setEstadoMensaje(true);
                setMensaje({
                    tipo: 'Ganar',
                    mensaje: 'Felicitaciones Ganaste'
                })
            }
            else if (puntosJugador > 21) {
                setEstadoMensaje(true);
                setMensaje({
                tipo: 'Perder',
                mensaje: 'Lo siento, Gana la computadora'
                })
            }
            else if (puntosComputadora > 21 ) {
                setEstadoMensaje(true);
                setMensaje({
                    tipo: 'Ganar',
                    mensaje: 'Felicitaciones Ganaste'
                })
            }
            else if (puntosComputadora > puntosJugador ) {
                setEstadoMensaje(true);
                setMensaje({
                tipo: 'Perder',
                mensaje: 'Lo siento, Gana la computadora'
                })
            } 
            else if (puntosComputadora < puntosJugador ) {
                setEstadoMensaje(true);
                setMensaje({
                tipo: 'Ganar',
                mensaje: 'Felicitaciones Ganaste'
                })
            }   
        }, 500);
    };

    return[mensajeDelJuego];
};
 
export {useMensaje};