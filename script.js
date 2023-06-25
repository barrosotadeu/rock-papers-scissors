
const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const computerChoiceIndex = Math.floor(Math.random() * options.length)
    return options[computerChoiceIndex]

}






function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats rock"
    }

    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats Scissors"
    }

    if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock"
    }

    if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats paper"
    }

    if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats Scissors"
    }

    if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats paper"
    }

    if(playerSelection == computerSelection){
        return `Both players choose ${playerSelection}! It's a draw`
    }  

}
let computerChoice = getComputerChoice();
console.log(computerChoice)
let playerChoice = "ROCK"
console.log(playRound(playerChoice, computerChoice))

