import {shuffle} from 'underscore';

const crearPaquetesCartas = () => {
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
};

const obtenerCarta = (obtenerCarta) => {
    return obtenerCarta.pop();
};

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1);

    const darValor = (valor === 'A') ? 11:
    (valor === 'J' || valor === 'K' || valor === 'Q')? 10 : valor * 1; 
    return darValor;
};
 
export {crearPaquetesCartas, obtenerCarta, valorCarta};