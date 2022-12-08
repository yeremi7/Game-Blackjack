
const activarBtn = (btnPedir, btnDetener, btnOpcion) => {
    btnPedir.current.disabled = false;
    btnPedir.current.style='none';
    
    btnDetener.current.disabled = false;
    btnDetener.current.style='none';

    btnOpcion.current.disabled = false;
    btnOpcion.current.style='none';
};

const desactivarBtn1 = (btnNuevoJuego, btnOpcion) => {
    btnNuevoJuego.current.disabled  = true;
    btnNuevoJuego.current.style.backgroundColor ='#d1463c';
    
    btnOpcion.current.disabled = true;
    btnOpcion.current.style.backgroundColor='#119247';
};

const desactivarBtn2 = (btnPedir, btnDetener,) => {
    btnPedir.current.disabled = true;
    btnPedir.current.style.backgroundColor='#119247';
    
    btnDetener.current.disabled = true;
    btnDetener.current.style.backgroundColor='#119247';
};

const desactivarBtn3 = (btnNuevoJuego, btnPedir, btnDetener) => {
    btnNuevoJuego.current.disabled  = true;
    btnNuevoJuego.current.style.backgroundColor ='#d1463c';

    btnPedir.current.disabled = true;
    btnPedir.current.style.backgroundColor='#119247';
            
    btnDetener.current.disabled = true;
    btnDetener.current.style.backgroundColor='#119247';
};

const btnOption = (btnOpcion) => {
    (btnOpcion.current.innerText === 'Opcion 1') ? 
    btnOpcion.current.innerText='Opcion 2' :
    btnOpcion.current.innerText='Opcion 1';
};

const resetMarcador = (small_jugador, small_computadora, insertarCartaJugador, insertarCartaComputadora) =>{
    small_jugador.current.innerText='0';
    small_computadora.current.innerText='0';

    insertarCartaJugador.current.innerText = '';
    insertarCartaComputadora.current.innerText = '';
}

export{
    activarBtn,
    desactivarBtn1,
    desactivarBtn2,
    desactivarBtn3,
    btnOption,
    resetMarcador
};