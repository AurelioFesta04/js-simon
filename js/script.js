// imposto le variabili
const timerElem = document.getElementById("timer")
const formElem = document.getElementById("user-form")
const listaRandom = document.querySelectorAll(".lista-random li")
const listaUser = document.querySelectorAll(".lista-user li")
const confirmBtn = document.getElementById("conferma")
const finalResult = document.getElementById("result")

// creo un countdown

let timer = 5;

const countDown = setInterval(function () {
    console.log(timer);

    if (timer > 0) {
        timerElem.innerHTML = timer;
        timer--;
    } else if (timer = -1) {
        timerElem.innerHTML = "TEMPO ESAURITO!!!";
        clearInterval(countDown);
    }
}, 1000);

