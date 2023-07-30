const player1 = {
    score: 0,
    button: document.querySelector('#pointToP1'),
    display: document.querySelector('#scoreP1')
}

const player2 = {
    score: 0,
    button: document.querySelector('#pointToP2'),
    display: document.querySelector('#scoreP2')
}

const reset = document.querySelector('#reset');
const playingToSelect = document.querySelector('#playingTo');
let playingTo = playingToSelect.value;
console.log(playingTo)


function updateScores(player, opponent) {
    player.score++;
    player.display.textContent = player.score;
    playingToSelect.disabled = true;

    if (player.score === playingTo)
    {
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
    }

}

playingToSelect.addEventListener('input', function () {
    playingTo = parseInt(this.value);
    console.log(playingTo);
})

player1.button.addEventListener('click', function () {
    updateScores(player1, player2)
    // pointsP1++;
    // scoreP1.textContent = pointsP1;
    // playingTo.disabled = true;

    // if (pointsP1 < playingTo.value)
    // {
    //     console.log("Point to P1: " + pointsP1);
    // }
    // else
    // {
    //     pointToP1.disabled = true;
    //     pointToP2.disabled = true;
    //     scoreP1.classList.add('has-text-success');
    //     scoreP2.classList.add('has-text-danger');
    // }

})

pointToP2.addEventListener('click', function () {
    updateScores(player2, player1)
    // pointsP2++;
    // scoreP2.textContent = pointsP2;
    // playingTo.disabled = true;

    // if (pointsP2 < playingTo.value)
    // {
    //     console.log("Point to P2: " + pointsP2);
    // }
    // else
    // {
    //     pointToP1.disabled = true;
    //     pointToP2.disabled = true;
    //     scoreP2.classList.add('has-text-success');
    //     scoreP1.classList.add('has-text-danger');
    // }
})

reset.addEventListener('click', function () {
    console.log("Reset")
    playingToSelect.disabled = false;
    player1.button.disabled = false;
    player2.button.disabled = false;
    player1.display.textContent = 0;
    player2.display.textContent = 0;
    player1.score = 0;
    player2.score = 0;
    player2.display.classList.remove('has-text-success', 'has-text-danger');
    player1.display.classList.remove('has-text-success', 'has-text-danger');
})