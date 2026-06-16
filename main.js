
let cdisplay = document.querySelector("#computer-choice");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let pdisplay = document.querySelector("#player-choice");
let displayArea = document.querySelector("#choice-display");
let resultArea = document.querySelector("#result-area");
let scoreBoard = document.querySelector("#score-board");
let restartBtn = document.querySelector("#replay");
let roundWinner = document.querySelector("#round-winner");


let computer = document.createElement("h5");
computer.textContent = "";
cdisplay.appendChild(computer);



let result= document.createElement("h3");
result.textContent = "";
result.style.fontSize="25px";
roundWinner.append(result);

let humanChoice = document.createElement("h5");
humanChoice.textContent = "";
pdisplay.appendChild(humanChoice);


let hscore = 0;
let cscore = 0;



let score = document.createElement("h4");
score.textContent = "Player: 0 | Tom: 0";
scoreBoard.appendChild(score);

function updateScore () {
    score.textContent = `Player: ${hscore} | Tom: ${cscore}`;
}
let matchWinner = document.createElement("h2")
resultArea.appendChild(matchWinner);

let gameOver = document.createElement("h4");
resultArea.appendChild(gameOver);

function checkWinner () {


if (cscore === 5) {
    matchWinner.textContent = "Tom Wins The Match GG!";
    matchWinner.style.color="red"
     rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        gameOver.textContent = "GAME OVER, BETTER LUCK NEXT TIME!!";
        
}else if (hscore === 5) {
    matchWinner.textContent = "You Won The Match GG!";
    matchWinner.style.color="green";


     rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        gameOver.textContent = "GAME OVER, LUCK IS ON YOUR SIDE!!";
}
};


function getComputerChoice () {
let computerChoice = Math.floor(Math.random()*3);

if (computerChoice === 0) {
      computer.textContent = "TOM CHOOSES ROCK";
} else if (computerChoice === 1){
    computer.textContent = "TOM CHOOSES PAPER";
}else if (computerChoice === 2){
    computer.textContent = "TOM CHOOSES SCISSORS";
} 

return computerChoice;
};


rockBtn.addEventListener("click" , () => {
    let computerChoice= getComputerChoice();
    humanChoice.textContent = "YOU CHOSE ROCK";

    if (computerChoice === 0) {
        result.textContent = "It's a tie!";
    }else if(computerChoice === 1) {
        result.textContent = "You Lost the round!";

        cscore++;
        updateScore();
        checkWinner();
    }else{
        result.textContent = "You win the round!";
        hscore++;
         updateScore();
         checkWinner();
    }


});

paperBtn.addEventListener("click" , () => {
   let computerChoice= getComputerChoice();
    humanChoice.textContent = "YOU CHOSE PAPER";

     if (computerChoice === 0) {
        result.textContent = "You win the round!";
        hscore++;
         updateScore();
         checkWinner();
    }else if(computerChoice === 1) {
        result.textContent = "It's a tie!";
    }else{
        result.textContent = "You lost the round!";
        cscore++;
         updateScore();
         checkWinner();
    }

});

scissorsBtn.addEventListener("click" , () => {
    let computerChoice= getComputerChoice();
    humanChoice.textContent = "YOU CHOSE SCISSORS";  
    
     if (computerChoice === 0) {
        result.textContent = "You Lost the round!";
        cscore++;
         updateScore();
         checkWinner();
    }else if(computerChoice === 1) {
        result.textContent = "You Won the round!";
        hscore++;
         updateScore();
         checkWinner();
    }else{
        result.textContent = "It's a tie";
    }

});

    function restartGame () {
        hscore= 0;
        cscore= 0;

        updateScore();

        humanChoice.textContent = "";
        computer.textContent = "";
        result.textContent="";
        matchWinner.textContent="";
        gameOver.textContent="";

        rockBtn.disabled=false;;
        paperBtn.disabled=false;
        scissorsBtn.disabled=false;
    }

    restartBtn.addEventListener("click" , restartGame);

