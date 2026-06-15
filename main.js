
let cdisplay = document.querySelector("#computer-choice");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let pdisplay = document.querySelector("#player-choice");
let displayArea = document.querySelector("#choice-display");


let computer = document.createElement("h5");
computer.textContent = "";
cdisplay.appendChild(computer);


function getComputerChoice () {
let computerChoice = Math.floor(Math.random()*3);

if (computerChoice === 0) {
      computer.textContent = "COMPUTER CHOOSES ROCK";
} else if (computerChoice === 1){
    computer.textContent = "COMPUTER CHOOSES PAPER";
}else if (computerChoice === 2){
    computer.textContent = "COMPUTER CHOOSES SCISSORS";
} 

return computerChoice;
};

let result= document.createElement("h3");
result.textContent = "Result";
displayArea.append(result);

let humanChoice = document.createElement("h5");
humanChoice.textContent = "";
pdisplay.appendChild(humanChoice);

rockBtn.addEventListener("click" , () => {
    let computerChoice= getComputerChoice();
    humanChoice.textContent = "YOU CHOSE ROCK";

    if (computerChoice === 0) {
        result.textContent = "It's a tie!";
    }else if(computerChoice === 1) {
        result.textContent = "You Lost!"
    }else{
        result.textContent = "You win!";
    }


});

paperBtn.addEventListener("click" , () => {
   let computerChoice= getComputerChoice();
    humanChoice.textContent = "YOU CHOSE PAPER";

     if (computerChoice === 0) {
        result.textContent = "You win!";
    }else if(computerChoice === 1) {
        result.textContent = "It's a tie!";
    }else{
        result.textContent = "You lost!";
    }

});

scissorsBtn.addEventListener("click" , () => {
    let computerChoice= getComputerChoice();
    humanChoice.textContent = "YOU CHOSE SCISSORS";  
    
     if (computerChoice === 0) {
        result.textContent = "You Lost!";
    }else if(computerChoice === 1) {
        result.textContent = "You Won!";
    }else{
        result.textContent = "It's a tie";
    }

});


