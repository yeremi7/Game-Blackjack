import React, {useContext} from 'react';
import { base } from "../contexto/baseContexto";
import {shuffle} from 'underscore';

const HeaderButton = ({logicaJugador, btnDetener, small_jugador, insertar_carta_jugador, small_computadora, insertar_carta_computadora}) => {

    const {cambiarPaqueteCartas, nuevoJuego, pedir, detener ,opcionJuego} = useContext(base);

    //Reiniciar el juego con un nuevo paquete de cartas
    const btnNuevoJuego = () => {

        cambiarPaqueteCartas(() => {
            let letras_1 = ['A','J','K','Q']; 
            let letras_2 = ['C','D','H','S'];
            let arr_juegos = [];

            for (let i=2; i <= 10; i++ ) {
                for (const sumar in letras_2) {
                    arr_juegos.push(i+ letras_2[sumar])
                }
            }

            for (const suma_1 in letras_1) {
                for (const suma_2  in letras_2) {
                    arr_juegos.push( letras_1[suma_1] + letras_2[suma_2] )
                }
            }

            arr_juegos = shuffle(arr_juegos);
            return arr_juegos;
        });

        small_jugador.current.innerText='0';
        small_computadora.current.innerText='0';

        insertar_carta_jugador.current.innerText = '';
        insertar_carta_computadora.current.innerText = '';

        pedir.current.disabled = false;
        pedir.current.style='none';
        
        detener.current.disabled = false;
        detener.current.style='none';

        opcionJuego.current.disabled = false;
        opcionJuego.current.style='none';
    };

    const btnOptionDelJuego = () => {
        (opcionJuego.current.innerText === 'Opcion 1') ? opcionJuego.current.innerText='Opcion 2' : opcionJuego.current.innerText='Opcion 1';
    };

    return ( 

        <section className ="container_headerButton" >
            <h1 className="title" > BlackJack </h1>

            <div className="container_buttons">
                <button onClick={btnNuevoJuego}     ref={nuevoJuego}     className="nuevoJuego">  Nuevo Juego </button>
                <button onClick={logicaJugador}     ref={pedir}          className="pedir">       Pedir       </button>
                <button onClick={btnDetener}        ref={detener}        className="detener">     Detener     </button>
                <button onClick={btnOptionDelJuego} ref={opcionJuego}    className="mismoTiempo"> Opcion 1    </button>
            </div> 
        </section>

     );
};
 
export {HeaderButton};