const timerElem = document.getElementById("timer")

const formElem = document.getElementById("user-form")

let randomElem = document.querySelector(".random")
let userNumElem = document.querySelector(".user-num")

const confirmBtn = document.getElementById("conferma")
const finalResult = document.getElementById("result")

let numbers = [0, 0, 0, 0, 0];

for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    numbers.push(randomElem);
}

let timer = 3;

const intervalTime = setInterval(function () {
    timerElem.innerHTML = timer;
    timer--;

    if (timer < 0) {
        timerElem.innerHTML = "TEMPO FINITO";
        clearInterval(intervalTime);
    } else if (timerElem.innerHTML === "TEMPO FINITO") {
        randomElem.add("d-none")
        clearInterval(intervalTime);
        intervalTime = null;
        randomElem.classList.add("d-none");
        userNumElem.classList.remove("d-none");
    }
}, 1000);

formElem.addEventListener("submit", function(event) {
    event.preventDefault();

    const userNum = document.querySelectorAll("input");
    for (let i = 0; i < userNum.length; i++) {
        curItem = userNum[i];
        if (randomCount.includes(curItem)) {
            userNum.push(curItem);
        }
    }

    
    finalResult.classList.remove("d-none");
    finalResult.innerHTML = `Hai indovinato ${userNum.length} numeri (${userNum})`;
});



// function generaNumeri() {

//     

//     for (i = 0; i < numbers.length; i++) {
//         numbers[i] = Math.floor(Math.random() * 50) + 1;
//         randomElem.innerHTML +=  `<li class="random col mx-5">${numbers}</li>`
//     }
//     return numbers;
    
// }