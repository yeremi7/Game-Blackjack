import React, { useRef, useState } from 'react';
import {crearPaquetesCartas} from "../funciones/crearPaquetesCartas";

const stateContext = React.createContext();

const ProovedorState = ({children}) => {

    //estado del juego
    const [deckCartas , setDeckCartas] = useState(crearPaquetesCartas());

    //Marcador
    const puntosJugador     = {contador:0};
    const puntosComputadora = {contador:0};

    //estado mensaje
    const [estadoMensaje, setEstadoMensaje] = useState(false);
    const [mensaje, setMensaje] = useState({});

    //referencias botones
    const btnNuevoJuego = useRef();
    const btnPedir      = useRef();
    const btnDetener    = useRef();
    const btnOpcion     = useRef();

    // referencias al cuerpo del juego
    const small_jugador            = useRef();
    const small_computadora        = useRef();
    const insertarCartaJugador     = useRef();
    const insertarCartaComputadora = useRef();

    return(
        <stateContext.Provider value={{
            //estado del juego
            deckCartas,
            setDeckCartas,

            //Marcador
            puntosJugador,
            puntosComputadora,

            //estado mensaje
            estadoMensaje,
            setEstadoMensaje,
            mensaje,
            setMensaje,

            //referencias botones
            btnNuevoJuego,
            btnPedir,
            btnDetener,
            btnOpcion,

            // referencias al cuerpo del juego
            small_jugador,
            small_computadora,
            insertarCartaJugador,
            insertarCartaComputadora,
        }}>
            {children}
        </stateContext.Provider>
    )
};

export {stateContext, ProovedorState};

