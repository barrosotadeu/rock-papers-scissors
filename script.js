
const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const computerChoiceIndex = Math.floor(Math.random() * options.length)
    return options[computerChoiceIndex]

}






function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats rock")
        return "computer"
        
    }

    if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats Scissors")
        return "player"
        
    }

    if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats rock")
        return "player"

    }

    if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lose! Scissors beats paper")
        return "computer"
    }

    if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose! Rock beats Scissors")
        return "computer"
    }

    if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! Scissors beats paper")
        return "player"
    }

    if(playerSelection == computerSelection){
        console.log(`Both players choose ${playerSelection}! It's a draw`)
    }     

}




function game(){
    let round = 1
    let computerVictories = 0
    let playerVictories = 0
    while(round <= 5){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose Rock, Paper or Scissor: ")
        
        let result = playRound(playerSelection, computerSelection)        
        if(result == "player"){
            playerVictories++
        } else if(result == "computer"){
            computerVictories++
        }
        
        round++      
    }
    if(playerVictories > computerVictories){
        console.log(`You had ${playerVictories} victories and the computer had ${computerVictories} victories. You win!`)
    }
    else if(computerVictories > playerVictories){
        console.log(`You had ${playerVictories} victories and the computer had ${computerVictories} victories. You lose!`)
    }else {
        console.log(`You had ${playerVictories} victories and the computer had ${computerVictories} victories. Its a draw!`)

    }
    
}

game()






