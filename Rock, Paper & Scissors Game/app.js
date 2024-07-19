let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetButton = document.querySelector("#reset");



const genComChoice = ()=>{
const options = ["rock", "paper", "scissors"];
 let randIdx = Math.floor(Math.random()*3);
return options[randIdx];
}

let draw = ()=>{
console.log("Game was draw.");
 msg.innerText = "Game was draw, Play again.";
 msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice)=>{
   if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   }else {
        compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;

    msg.style.backgroundColor = "red";
    }

}

let playGame = (userChoice)=>{
    console.log(`User choice is ${userChoice}`);
 const compChoice = genComChoice();
 console.log(`Computer choice is ${compChoice}`);

 if(userChoice === compChoice){
   //Draw Game
    draw();
 }else {
    let userWin = true;
    if(userChoice === "rock" ){
        // scissors, paper
         userWin = compChoice  === "paper" ? false : true;
    } else if(userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    }else {
        // rock, paper
        userWin = compChoice == "rock" ? false : true;
    }
        showWinner(userWin,userChoice,compChoice);
 }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);

    })
})

resetButton.addEventListener("click", () => {
    userScore = 0;  // Reset user score
    compScore = 0;  // Reset computer score
    userScorePara.innerText = userScore;  // Update user score display
    compScorePara.innerText = compScore;  // Update computer score display
    msg.innerText = "Play your move";  // Reset message
    msg.style.backgroundColor = "";  // Reset message background color
    console.clear();
});

