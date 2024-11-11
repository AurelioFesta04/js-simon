const timerElem = document.getElementById("timer")
const formElem = document.getElementById("user-form")
let listaRandom = document.querySelectorAll(".lista-random .row-col .d-flex .justify-content-between .align-items-center .p-4 li")
let listaUser = document.querySelectorAll(".lista-user .row-col .d-flex .justify-content-between .align-items-center .p-1 li")
const confirmBtn = document.getElementById("conferma")
const finalResult = document.getElementById("result")


let randomNum = []

for (i = 0; i < randomNum[i]; i++) {
    randomNum[i]= Math.floor(Math.random() *50) + 1;
}

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

const switchList = setInterval(function () {

    if (timerElem.innerHTML !== "TEMPO ESAURITO!!!") {
        listaRandom = parseInt(randomNum);
    } else if (timerElem.innerHTML === "TEMPO ESAURITO!!!") {
    }

}, 1000);

