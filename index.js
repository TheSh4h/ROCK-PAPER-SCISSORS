const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
    
    player = button.textContent;
    coumputerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    console.log(computer + '\n' + player);
} ));

function coumputerTurn(){

    let randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!";
    }

}