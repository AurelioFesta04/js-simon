const timerElem = document.getElementById("timer")
const formElem = document.getElementById("user-form")
let listaRandom = document.querySelectorAll(".lista-random li")
let listaUser = document.querySelectorAll(".lista-user li")
const confirmBtn = document.getElementById("conferma")
const finalResult = document.getElementById("result")

let randomNum = [];

for (let i = 0; i < 5; i++) {
    let curRandomNum = Math.floor(Math.random() * 50) + 1;
    randomNum.push(curRandomNum);
    listaRandom[i].innerHTML = curRandomNum;
}

let timer = 5;

    const countDown = setInterval(function () {
        console.log(timer);

        if (timer > 0) {
            timerElem.innerHTML = timer;
            timer--;
        } else if (timer === 0) {
            timerElem.innerHTML = "TEMPO ESAURITO!!!";
            clearInterval(countDown);
            lista1.classlist.add("d-none");
            lista2.classlist.remove("d-none");
        }

    }, 1000);