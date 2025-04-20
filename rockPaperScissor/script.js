let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    //for random use math.random() - it can only generate random numbers not strings
    //to access the elements we used array so that we can access them bu using random numbers as index
    //any random number is multiplied by 3 we get ans between 0 to 2 i.e, 0.12,1.09,2.60,0.80,1.60 so on
    //to get range from 0 we have to multiply it with the next number
    //to get from 0-9 multiply random with 10
    //to get from 0-2 multiply random with 3
    //math.floor() is used to get whole number
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () =>{
    msg.innerText = "Game is Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost!. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            //userChoice = scissor
            //compChoice = rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        //calling playGame function and giving userChoice as a parameter
        playGame(userChoice);
    })
})