let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*9)
}
function compareGuesses(humanGuess,computerGuess,secretTarget){
    let differenceHuman =  Math.abs(humanGuess - secretTarget)
    console.log(differenceHuman)
    let differenceComputer = Math.abs(computerGuess - secretTarget)
    console.log(differenceComputer)

    if ( differenceHuman < 2 ){
        return true
    } else if ( differenceComputer < 2){
        return false
    } else if (humanGuess < 2  && computerGuess < 2){
        return true
    }
    else if (humanGuess===secretTarget && computerGuess===secretTarget){
        return true
    }
    else if (differenceHuman > 2 ){
        return false
    } else if (differenceComputer > 2){
        return true
    }
}
function updateScore(winner){
 if(winner==='human'){
   humanScore++ 
 } 
 else if (winner==='computer'){
    computerScore ++
 }
}
function advanceRound(){
    currentRoundNumber++ 
}

