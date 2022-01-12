
//Computer's moves
function computerPlay(){
    let moves = ['Rock', 'Paper', 'Scissors'];
    return moves[getRndInteger(0, 2)];
}

//Random Integer Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function playRound(playerSelection, computerSelection){
    let strP = playerSelection.toLowerCase();
    let strC = computerSelection.toLowerCase();

    if (strP !== 'rock' && strP !== 'paper' && strP !== 'scissors') {
        return [playerSelection + " is not a valid choice. Please go again.", null];
    }

    if ((strP === 'rock' && strC === 'scissors') ||
        (strP === 'paper' && strC === 'rock') ||
        (strP === 'scissors' && strC === 'paper')) {
        return ['You Win! ' + strP + " beats " + strC, true];
    } else if ((strC === 'rock' && strP === 'scissors') ||
        (strC === 'paper' && strP === 'rock') ||
        (strC === 'scissors' && strP === 'paper')) {
        return ['You Lose! ' + strC + " beats " + strP, false];
    } else {
        return ['You Tie!', null];
    }
}

function game(){
    let computerWins = 0;
    let playerWins = 0;
    let move = '';
    let result = [];

    for (let i = 0; i < 5; i++) {
        move = window.prompt('Pick your move!');
        result = playRound(move, computerPlay());
        if (result[1] === true) playerWins++;
        else if (result[1] === false) computerWins++;
        else i--;

        console.log(result[0]);
    }

    if (playerWins > computerWins) return "You Win! " + playerWins + " to " + computerWins;
    else return "You Lose! " + playerWins + " to " + computerWins;
}

// const playerSelection = 'ScIsSoRs';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection)[0]);