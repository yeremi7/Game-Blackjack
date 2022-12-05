import React, {useContext, useRef} from 'react';
import { base } from "../contexto/baseContexto";
import { HeaderButton } from "./headerButton";

const LogicaDelJuego = () => {

    const {obtenerCarta, valorCarta, nuevoJuego, detener, pedir, opcionJuego, cambiarEstadoAlerta ,cambiarAlerta} = useContext(base);
    
    // Referencia para el jugador 
    let   puntajeDelJugador      = 0;
    const small_jugador          = useRef();
    const insertar_carta_jugador = useRef();

    // Referencia para la computadora
    let   puntajeComputadora         = 0;
    const small_computadora          = useRef();
    const insertar_carta_computadora = useRef();

    const logicaJugador = () => {

        nuevoJuego.current.disabled  = true;
        nuevoJuego.current.style.backgroundColor ='#d1463c';

        opcionJuego.current.disabled = true;
        opcionJuego.current.style.backgroundColor='#119247';

        //Opcion 1
        if (opcionJuego.current.innerText === 'Opcion 1') {
            
            const carta = obtenerCarta();
            puntajeDelJugador = puntajeDelJugador + valorCarta(carta);
            small_jugador.current.innerText = puntajeDelJugador;

            const img_jugador = document.createElement('img');
            img_jugador.src = process.env.PUBLIC_URL + `/assets/cartas/${carta}.png`;
            insertar_carta_jugador.current.append(img_jugador);

            if (puntajeDelJugador >= 21) {
                logicaComputadora(puntajeDelJugador);
                mensajeGanador()
                
                pedir.current.disabled = true;
                pedir.current.style.backgroundColor='#119247';
            
                detener.current.disabled = true;
                detener.current.style.backgroundColor='#119247';
            };

        //Opcion 2
        } else if (opcionJuego.current.innerText === 'Opcion 2') {
           
            const carta = obtenerCarta();
            puntajeDelJugador = puntajeDelJugador + valorCarta(carta);
            small_jugador.current.innerText = puntajeDelJugador;

            const img_jugador = document.createElement('img');
            img_jugador.src = process.env.PUBLIC_URL + `/assets/cartas/${carta}.png`;
            insertar_carta_jugador.current.append(img_jugador);

            if (puntajeDelJugador >= 21) {
                mensajeGanador();
                
                pedir.current.disabled = true;
                pedir.current.style.backgroundColor='#119247';
                
                detener.current.disabled = true;
                detener.current.style.backgroundColor='#119247';
            };

            setTimeout(() => {logicaComputadora(puntajeDelJugador)}, 500);
        }
    };

    const logicaComputadora = (puntosDelJugador) => {

        //Opcion 1
        if (opcionJuego.current.innerText === 'Opcion 1') {

            do {
                const carta = obtenerCarta();
                puntajeComputadora = puntajeComputadora + valorCarta(carta);
                small_computadora.current.innerText = puntajeComputadora;
    
                const img_computadora = document.createElement('img');
                img_computadora.src = process.env.PUBLIC_URL + `/assets/cartas/${carta}.png`;
                insertar_carta_computadora.current.append(img_computadora);
                       
            } while (puntajeComputadora <= puntosDelJugador && puntosDelJugador <= 21);

        //Opcion 2
        } else if (opcionJuego.current.innerText === 'Opcion 2') {

            do {
                const carta = obtenerCarta();
                puntajeComputadora = puntajeComputadora + valorCarta(carta);    

                if (puntajeDelJugador >= 21) {
                    puntajeComputadora = small_computadora.current.lastChild.textContent;
                    small_computadora.current.innerText = puntajeComputadora;
                } else{
                    small_computadora.current.innerText = puntajeComputadora;
                };

                const img_computadora = document.createElement('img');
                img_computadora.src = (puntajeDelJugador >= 21) ? '' : process.env.PUBLIC_URL + `/assets/cartas/${carta}.png`;
                insertar_carta_computadora.current.append((puntajeDelJugador >= 21) ? '' : img_computadora);

            } while (puntosDelJugador < (10 <= 2) && puntajeComputadora <= puntosDelJugador && puntosDelJugador <= 21);

            if (puntajeComputadora >= 21) {
                mensajeGanador();
                
                pedir.current.disabled = true;
                pedir.current.style.backgroundColor='#119247';
                
                detener.current.disabled = true;
                detener.current.style.backgroundColor='#119247';
            };
        };
    };

    const mensajeGanador = () => {
        setTimeout(() => {
            if (puntajeDelJugador >= 21 && puntajeComputadora <= 0 ) {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                    tipo: 'Error',
                    mensaje: 'Espera el turno de la computadora'
                }) 
            }
            else if (puntajeDelJugador === puntajeComputadora) {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                    tipo: 'Empate',
                    mensaje: 'Guao empataron, hagan la revancha'
                }) 
              }
            else if (puntajeComputadora === 21) {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                    tipo: 'Perder',
                    mensaje: 'Lo siento, Gana la computadora'
                })
              }
            else if (puntajeDelJugador === 21) {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                    tipo: 'Ganar',
                    mensaje: 'Felicitaciones Ganaste'
                })
              }
            else if (puntajeDelJugador > 21) {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                  tipo: 'Perder',
                  mensaje: 'Lo siento, Gana la computadora'
                })
              cambiarEstadoAlerta(true)
              }
            else if (puntajeComputadora > 21 ) {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                    tipo: 'Ganar',
                    mensaje: 'Felicitaciones Ganaste'
                })
              }
            else if (puntajeComputadora > puntajeDelJugador ) {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                  tipo: 'Perder',
                  mensaje: 'Lo siento, Gana la computadora'
                })
              } 
            else if (puntajeComputadora < puntajeDelJugador ) {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                  tipo: 'Ganar',
                  mensaje: 'Felicitaciones Ganaste'
                })
              }   
        }, 500);
    };

    const btnDetener = () => {
        if (opcionJuego.current.innerText === 'Opcion 1') {
            logicaComputadora(puntajeDelJugador);
            mensajeGanador();

            nuevoJuego.current.disabled  = true;
            nuevoJuego.current.style.backgroundColor ='#d1463c';

            pedir.current.disabled = true;
            pedir.current.style.backgroundColor='#119247';
            
            detener.current.disabled = true;
            detener.current.style.backgroundColor='#119247';
        }else{
            mensajeGanador();

            nuevoJuego.current.disabled  = true;
            nuevoJuego.current.style.backgroundColor ='#d1463c';

            pedir.current.disabled = true;
            pedir.current.style.backgroundColor='#119247';
            
            detener.current.disabled = true;
            detener.current.style.backgroundColor='#119247';
        };
    };

    return ( 
        <>
            <HeaderButton
                logicaJugador              = {logicaJugador}
                btnDetener                 = {btnDetener}
                small_jugador              = {small_jugador}
                small_computadora          = {small_computadora}
                insertar_carta_jugador     = {insertar_carta_jugador}
                insertar_carta_computadora = {insertar_carta_computadora}
            />

            <section className="container_jugadores" >

                <h2 className  ="puntos" > Jugador - <small ref={small_jugador} >0</small> </h2>

                <div ref={insertar_carta_jugador}  className="img_cartas altura"></div>
            
                <h2 className="puntos" > Computadora - <small ref={small_computadora} >0</small> </h2>

                <div ref={insertar_carta_computadora} className="img_cartas altura"></div>
                
            </section>
        </>
    );
};
 
export {LogicaDelJuego};