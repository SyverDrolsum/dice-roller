function RollIndividualDice() {
    return Math.floor(Math.random()*6) + 1;
}

function rollDice() {   
    document.getElementById("dice1").value = RollIndividualDice();
    document.getElementById("dice2").value = RollIndividualDice();
    document.getElementById("dice3").value = RollIndividualDice();
    document.getElementById("dice4").value = RollIndividualDice();
    document.getElementById("dice5").value = RollIndividualDice();
}
