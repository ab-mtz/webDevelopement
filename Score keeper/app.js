const pointToP1 = document.querySelector('#pointToP1')
const pointToP2 = document.querySelector('#pointToP2')
const reset = document.querySelector('#reset')
const playingTo = document.querySelector('#playingTo')

let pointsP1 = 0;
let pointsP2 = 0;

playingTo.addEventListener('input', function () {
    console.log(playingTo.value);
})

pointToP1.addEventListener('click', function () {

    pointsP1++;
    document.querySelector('#scoreP1').innerHTML = pointsP1;

    if (pointsP1 < playingTo.value)
    {
        console.log("Point to P1: " + pointsP1);
    }
    else
    {
        pointToP1.disabled = true;
        pointToP2.disabled = true;
        console.log("Player 1 Wins")
    }

})
pointToP2.addEventListener('click', function () {
    pointsP2++;
    document.querySelector('#scoreP2').innerHTML = pointsP2;

    if (pointsP2 < playingTo.value)
    {
        console.log("Point to P2: " + pointsP2);
    }
    else
    {
        pointToP1.disabled = true;
        pointToP2.disabled = true;
        console.log("Player 2 Wins")
    }
})

reset.addEventListener('click', function () {
    console.log("Reset")
    pointToP1.disabled = false;
    pointToP2.disabled = false;
    document.querySelector('#scoreP1').innerHTML = 0;
    document.querySelector('#scoreP2').innerHTML = 0;
    pointsP1 = 0;
    pointsP2 = 0;
})