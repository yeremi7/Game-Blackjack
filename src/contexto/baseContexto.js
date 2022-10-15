import React, { useState, useRef } from 'react';
import {shuffle} from 'underscore';

const base = React.createContext();

const ProovedorTema = ({children}) => {

    // Estados del mensaje del ganador
    const [estadoAlerta, cambiarEstadoAlerta] = useState();
    const [alerta, cambiarAlerta] = useState({});

    // Crear paquete de cartas
    const[paqueteCartas, cambiarPaqueteCartas] = useState(() => {
        
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

    //obtener la carta del deck
    const obtenerCarta = () => {
        return paqueteCartas.pop()
    };

    //Darle valor a la carta obtenida
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length-1)

        const darValor = (valor === 'A') ? 11:
        (valor === 'J' || valor === 'K' || valor === 'Q')? 10 : valor * 1; 
        return darValor;
    };

    // Referencia a los botones Nuevo Juego, Pedir, Detener y Opcion 2
    const nuevoJuego  = useRef();
    const pedir       = useRef();
    const detener     = useRef();
    const opcionJuego = useRef();
    
    return(
        <base.Provider value={{
            paqueteCartas,
            cambiarPaqueteCartas,
            obtenerCarta,
            valorCarta,
            nuevoJuego,
            pedir,
            detener,
            opcionJuego,
            estadoAlerta,
            cambiarEstadoAlerta,
            alerta,
            cambiarAlerta
        }}>
            {children}
        </base.Provider>
    )
};

export {base, ProovedorTema};

