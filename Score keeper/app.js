const pointToP1 = document.querySelector('#pointToP1')
const pointToP2 = document.querySelector('#pointToP2')
const scoreP1 = document.querySelector('#scoreP1')
const scoreP2 = document.querySelector('#scoreP2')
const reset = document.querySelector('#reset')
const playingTo = document.querySelector('#playingTo')

let pointsP1 = 0;
let pointsP2 = 0;
let winningScore = 0;

playingTo.addEventListener('input', function () {
    console.log(playingTo.value);
    winningScore = parseInt(playingTo.value);
})

pointToP1.addEventListener('click', function () {

    pointsP1++;
    scoreP1.textContent = pointsP1;
    playingTo.disabled = true;

    if (pointsP1 < playingTo.value)
    {
        console.log("Point to P1: " + pointsP1);
    }
    else
    {
        pointToP1.disabled = true;
        pointToP2.disabled = true;
        scoreP1.classList.add('has-text-success');
        scoreP2.classList.add('has-text-danger');
    }

})

pointToP2.addEventListener('click', function () {
    pointsP2++;
    scoreP2.textContent = pointsP2;
    playingTo.disabled = true;

    if (pointsP2 < playingTo.value)
    {
        console.log("Point to P2: " + pointsP2);
    }
    else
    {
        pointToP1.disabled = true;
        pointToP2.disabled = true;
        scoreP2.classList.add('has-text-success');
        scoreP1.classList.add('has-text-danger');
    }
})

reset.addEventListener('click', function () {
    console.log("Reset")
    playingTo.disabled = false;
    pointToP1.disabled = false;
    pointToP2.disabled = false;
    scoreP1.textContent = 0;
    scoreP2.textContent = 0;
    pointsP1 = 0;
    pointsP2 = 0;
    scoreP2.classList.remove('has-text-success', 'has-text-danger');
    scoreP1.classList.remove('has-text-success', 'has-text-danger');
})