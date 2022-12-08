import React, { useContext } from 'react';
import { stateContext } from "../contexto/EstadosContexto";
import { useTurnoJugador } from "../hooks/useTurnoJugador";
import { useNuevoJuego } from "../hooks/useNuevoJuego";
import { useDetenerJuego } from "../hooks/useDetenerJuego";
import { MensajeGanador } from "../elementos/MensajeGanador";
import { btnOption } from "../funciones/botones";

const CuerpoDelJuego = () => {

    const{ 
            btnNuevoJuego, 
            btnPedir, 
            btnDetener, 
            btnOpcion,
            small_jugador,
            small_computadora,
            insertarCartaJugador,
            insertarCartaComputadora,
        } = useContext(stateContext);

    const [pedirCarta]   = useTurnoJugador();
    const [nuevoJuego]   = useNuevoJuego();
    const [detenerJuego] = useDetenerJuego();

    return ( 
        <>
            <MensajeGanador/>

            <section className ="container_headerButton" >
                <h1 className="title" > BlackJack </h1>

                <div className="container_buttons">
                    <button onClick={() => nuevoJuego()}         ref={btnNuevoJuego} className="nuevoJuego"> Nuevo Juego </button>
                    <button onClick={() => pedirCarta()}         ref={btnPedir}      className="pedir">      Pedir       </button>
                    <button onClick={() => detenerJuego()}       ref={btnDetener}    className="detener">    Detener     </button>
                    <button onClick={() => btnOption(btnOpcion)} ref={btnOpcion}     className="opcion">     Opcion 1    </button>
                </div> 
            </section>

            <section className="container_jugadores" >

                <h2 className  ="puntos" > Jugador - <small ref={small_jugador} >0</small> </h2>

                <div ref={insertarCartaJugador}  className="img_cartas altura"></div>
            
                <h2 className="puntos" > Computadora - <small ref={small_computadora} >0</small> </h2>

                <div ref={insertarCartaComputadora} className="img_cartas altura"></div>
                
            </section>
        </>
    );
};
 
export {CuerpoDelJuego};