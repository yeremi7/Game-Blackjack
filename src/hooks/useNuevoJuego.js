import { useContext } from 'react';
import { stateContext } from "../contexto/EstadosContexto";
import { crearPaquetesCartas } from "../funciones/crearPaquetesCartas";
import * as funciones from "../funciones/botones";

const useNuevoJuego = () => {

    const {setDeckCartas} = useContext(stateContext)

    const {
            btnPedir,
            btnDetener,
            btnOpcion,
            small_jugador,
            small_computadora,
            insertarCartaJugador,
            insertarCartaComputadora,
    } = useContext(stateContext);

    const nuevoJuego = () => {
        setDeckCartas(crearPaquetesCartas());
        funciones.resetMarcador(small_jugador, small_computadora, insertarCartaJugador, insertarCartaComputadora)
        funciones.activarBtn(btnPedir, btnDetener, btnOpcion);
    };

    return[nuevoJuego];
};
 
export {useNuevoJuego};