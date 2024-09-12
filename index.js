let hScore = document.getElementById("home-score")
let aScore = document.getElementById("away-score")

let hTotal = parseInt(hScore.textContent = 0)
let aTotal = parseInt(aScore.textContent = 0)


function hAdd1() {
    hTotal += 1;
    hScore.innerText = hTotal;
}

function hAdd2() {
    hTotal += 2;
    hScore.innerText = hTotal;
}

function hAdd3() {
    hTotal += 3;
    hScore.innerText = hTotal;
}

function aAdd1() {
    aTotal += 1;
    aScore.innerText = aTotal;
}

function aAdd2() {
    aTotal += 2;
    aScore.innerText = aTotal;
}

function aAdd3() {
    aTotal += 3;
    aScore.innerText = aTotal;
}