import React, {useContext, useEffect, useRef} from 'react';
import style, {keyframes} from "styled-components";
import { stateContext } from "../contexto/EstadosContexto";

const slideDown = keyframes`
0%{
    transform: translateY(-0.80rem);
    opacity: 0;
}
10%{
    transform: translateY(0.80rem);
    opacity: 1;
}
40%{
    transform: translateY(0.80rem);
    opacity: 1;
}
70%{
    transform: translateY(0.80rem);
    opacity: 1;
}
100%{
    transform: translateY(0.80rem);
    opacity: 0;
}`;

const ContenedorAlerta = style.div`
        font-family: 'Source Sans Pro', sans-serif;
        position: fixed;
        display: flex;
        justify-content: center;
        z-index: 1000;
        width: 100%;
        margin-top: 5rem;
        padding-right: 5%;
        animation: ${slideDown} 3s ease forwards;
        
        p{
            box-shadow: 0px 0px 10px rgb(190, 187, 187);
            color: white;
            font-size: 15px;
            background-color: ${(props) => {
                if (props.mensaje.tipo === 'Ganar') {
                    return '#38c950'
                }
                else if (props.mensaje.tipo === 'Perder') {
                    return '#8792F1'
                }
                else if (props.mensaje.tipo === 'Empate') {
                    return '#989945'
                }else{
                    return '#E34747'
                }
            }};
            border-radius: 5%;
            padding: 7px 7px; 
        }
        @media screen and (max-width: 480px){
            p{
                font-size: 14px;
            }
        }
        @media screen and (max-width: 350px){
            p{
                font-size: 12px;
            }
        }
`

const MensajeGanador = () => {

    const {
            estadoMensaje,
            setEstadoMensaje,
            mensaje,
            btnNuevoJuego
    } = useContext(stateContext);

    const refMensaje = useRef();

    useEffect(() => {
        if (estadoMensaje === true) {

            refMensaje.current.addEventListener('animationend', (e) => {
                setEstadoMensaje(false);
                btnNuevoJuego.current.disabled = false;
                btnNuevoJuego.current.style='none';
            });
        };
    },[estadoMensaje, setEstadoMensaje, btnNuevoJuego])

    return(
        <>
        {estadoMensaje &&
            <ContenedorAlerta ref={refMensaje} mensaje={mensaje}>
                <p>{mensaje.mensaje}</p>
            </ContenedorAlerta> 
        }
        </>
    )
};

export {MensajeGanador};