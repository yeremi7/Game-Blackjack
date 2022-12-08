import { useContext } from 'react';
import { stateContext } from "../contexto/EstadosContexto";
import { useTurnoComputadora } from "./useTurnoComputadora";
import { useMensaje } from "./useMensaje";
import { desactivarBtn3 } from "../funciones/botones";

const useDetenerJuego = () => {

    const {
            puntosJugador,
            puntosComputadora,
            btnNuevoJuego,
            btnPedir,
            btnDetener,
            btnOpcion,
    } = useContext(stateContext);

    const [logicaComputadora] = useTurnoComputadora();
    const [mensajeDelJuego] = useMensaje();
    
    const detenerJuego = () => {
        
        if (btnOpcion.current.innerText === 'Opcion 1') {
            
            logicaComputadora(puntosJugador.contador);
            mensajeDelJuego(puntosJugador.contador, puntosComputadora.contador);
            desactivarBtn3(btnNuevoJuego, btnPedir, btnDetener);

        }else{

            mensajeDelJuego(puntosJugador.contador, puntosComputadora.contador);
            desactivarBtn3(btnNuevoJuego, btnPedir, btnDetener);
        };
    };

    return[detenerJuego];

};
 
export {useDetenerJuego};