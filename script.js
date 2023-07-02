
const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const computerChoiceIndex = Math.floor(Math.random() * options.length)
    return options[computerChoiceIndex]

}







function playRound(playerSelection, computerSelection){
    const result = document.querySelector('#round-result');
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "rock" && computerSelection == "paper"){
        result.textContent  = "You lose! Paper beats rock!";
        return "computer"
        
    }

    if(playerSelection == "rock" && computerSelection == "scissors"){
        result.textContent = "You win! Rock beats Scissors!";
        return "player"
        
    }

    if(playerSelection == "paper" && computerSelection == "rock"){
        result.textContent  = "You win! Paper beats rock!";
        return "player"

    }

    if(playerSelection == "paper" && computerSelection == "scissors"){
        result.textContent  = "You lose! Scissors beats paper!";
        return "computer"
    }

    if(playerSelection == "scissors" && computerSelection == "rock"){
        result.textContent = "You lose! Rock beats Scissors!";
        return "computer"
    }

    if(playerSelection == "scissors" && computerSelection == "paper"){
        result.textContent  = "You win! Scissors beats paper!";
        return "player"
    }

    if(playerSelection == computerSelection){
        result.textContent = `Both players choose ${playerSelection}! It's a draw!`;
    }     

}

function updateScore(playerVictories, computerVictories){
    const score = document.querySelector("#score");
    score.textContent = `Score: Player: ${playerVictories}, Computer: ${computerVictories} wins`
}


function endGame(playerVictories, computerVictories){
    const finalResult = document.querySelector("#final-result");
    playerVictories > computerVictories? finalResult.textContent = `You get 5 wins! You are the winner!` : finalResult.textContent = `The computer get 5 wins! The computer is the winner!`
        
    
}




function game(){
    
    let computerVictories = 0
    let playerVictories = 0
    

        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => button.addEventListener('click', () =>{
            document.querySelector("#final-result").textContent = '';
            let result = playRound(button.textContent, getComputerChoice());           
            if(result == "player"){
                playerVictories++
            } else if(result == "computer"){
                computerVictories++
            }
            updateScore(playerVictories, computerVictories);
            if(playerVictories === 5 || computerVictories === 5){
                endGame(playerVictories, computerVictories);
                playerVictories = 0;
                computerVictories = 0;

            }

        }));    
    
}

game()







