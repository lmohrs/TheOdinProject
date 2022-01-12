
//Computer's moves
function computerPlay(){
    let moves = ['Rock', 'Paper', 'Scissors'];
    return moves[getRndInteger(0, 2)];
}

//Random Integer Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function playRound(playerSelection, computerSelection, score){
    let strP = playerSelection.toLowerCase();
    let strC = computerSelection.toLowerCase();

    if (strP !== 'rock' && strP !== 'paper' && strP !== 'scissors') {
        return [playerSelection + " is not a valid choice. Please go again.", null];
    }

    if ((strP === 'rock' && strC === 'scissors') ||
        (strP === 'paper' && strC === 'rock') ||
        (strP === 'scissors' && strC === 'paper')) {
        score[0]++;
        return ['You Win! ' + strP + " beats " + strC, true, score];
    } else if ((strC === 'rock' && strP === 'scissors') ||
        (strC === 'paper' && strP === 'rock') ||
        (strC === 'scissors' && strP === 'paper')) {
        score[1]++;
        return ['You Lose! ' + strC + " beats " + strP, false, score];
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
    }

    if (playerWins > computerWins) return "You Win! " + playerWins + " to " + computerWins;
    else return "You Lose! " + playerWins + " to " + computerWins;
}

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
const originalMessage = document.querySelector('#scoreMessage')
const score = document.querySelector('#scoreMessage')
let points = [0, 0];

rock.addEventListener('click', () => {
    alert(playRound('Rock', computerPlay(), points)[0]);
    score.innerHTML = "The score is " + points[0] + " to " + points[1];
    if (points[0] === 5 || points[1] === 5) {
        if (points[0] > points[1]) {
            alert("You Win! " + points[0] + " to " + points[1]);
        }
        else {
            alert("You Lose! " + points[0] + " to " + points[1]);
        }
        points[0] = 0;
        points[1] = 0;
        score.innerHTML = originalMessage.innerHTML;
    }
})

paper.addEventListener('click', () => {
    alert(playRound('Paper', computerPlay(), points)[0]);
    score.innerHTML = "The score is " + points[0] + " to " + points[1];
    if (points[0] === 5 || points[1] === 5) {
        if (points[0] > points[1]) {
            alert("You Win! " + points[0] + " to " + points[1]);
        }
        else {
            alert("You Lose! " + points[0] + " to " + points[1]);
        }
        points[0] = 0;
        points[1] = 0;
        score.innerHTML = originalMessage.innerHTML;
    }
})

scissors.addEventListener('click', () => {
    alert(playRound('Scissors', computerPlay(), points)[0]);
    score.innerHTML = "The score is " + points[0] + " to " + points[1];
    if (points[0] === 5 || points[1] === 5) {
        if (points[0] > points[1]) {
            alert("You Win! " + points[0] + " to " + points[1]);
        }
        else {
            alert("You Lose! " + points[0] + " to " + points[1]);
        }
        points[0] = 0;
        points[1] = 0;
        score.innerHTML = originalMessage.innerHTML;
    }
})