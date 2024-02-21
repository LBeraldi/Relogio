const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const dia = document.getElementById('dia')
const mes = document.getElementById('mes')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let d = dateToday.getDate();
    let m = dateToday.getMonth() + 1;

    if (hrs < 10) { hrs = '0' + hrs }

    if (min < 10) { min = '0' + min }

    if (s < 10) { s = '0' + s }

    if (d < 10) { d = '0' + d }

    if (m < 10) { m = '0' + m }

    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = s;
    dia.textContent = 'Dia ' + d;
    mes.textContent = 'Mês ' + m ;

})

//Funcao para mudar o temo ao anoitecer.

function isNight() {
    const now = new Date();
    const hours = now.getHours();
    return hours < 6 || hours >= 18; 
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark', isNight());
}
document.addEventListener('DOMContentLoaded', toggleTheme);

setInterval(toggleTheme, 60 * 60 * 1000); 
