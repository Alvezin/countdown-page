'use strict';

let intervalo = setInterval(atualizar, 1000)

function atualizar(){
    const dt = new Date(2022, 2, 14, 10, 23, 10 );
        const time = new Date();
        const mili = dt - time; //valor em milisegundos
        
        const sec = Math.floor((mili/1000)%60);
        const min = Math.floor((mili/60000)%60);
        const hours = Math.floor((mili/3600000)%24);
        const days = Math.floor((mili/86400000));
        
        const segundo = document.getElementById('sec');
        const minuto = document.getElementById('min');
        const hora = document.getElementById('hora');
        const dia = document.getElementById('dia');

    if (mili <= 0){
        clearInterval(intervalo)
    } else{
        segundo.textContent = sec < 10 ? '0' + sec : sec
        minuto.textContent = min < 10 ? '0' + min : min
        hora.textContent = hours < 10 ? '0' + hours : hours
        dia.textContent = days < 10 ? '0' + days : days
    }
}





