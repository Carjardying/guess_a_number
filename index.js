function playerOneNumber (){
    let number = parseInt(prompt("Joueur 1 : Choisis un nombre entre 0 et 50"))
    if (number >= 0 && number <= 50 ) {
        return number;
    } else {
        playerOneNumber()
    }
}

//on demande à l'utilisateur de choisir un nombre
function askNumber(){
    return parseInt(prompt("Joueur 2 : Devine le nombre")); //parseInt sur le prompt pour pas avoir à le faire la ligne en dessous
}
  
  
function didIwin (givenNumber, numberToGuess){
    if (givenNumber === numberToGuess) {
        alert("Bravo! Vous avez deviné le nombre");
        return true
    } else if (givenNumber > numberToGuess) {
        alert("Plus petit");
        return false ;
    } else if (givenNumber< numberToGuess){
        alert("plus grand");
        return false;
    }
}
//je rajoute false et true sur les resultats, plus petit, plus grand et égalité pour la prochaine fonction
function gamePlay (){ 
    if (didIwin(givenNumber, numberToGuess) == false) {
        givenNumber = askNumber();
        gamePlay();
    } else {
        alert("Bravo")
    }
/*     while(!didIwin(givenNumber)){ //!givenNumber = "givenNumber = false" mais en plus simple
        givenNumber = askNumber();
    } */
}

let numberToGuess = playerOneNumber();
let givenNumber = askNumber(); //on enregistre le resultat du askNumber dans une variable pour l'appleer ensuite 

gamePlay() //gameplay lance didIwin tant que givenNumber n'est pas true



