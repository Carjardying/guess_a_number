function playerOneNumber (){
    let number = parseInt(prompt("Joueur 1 : Choisis un nombre entre 0 et 50"))
    if (number >= 0 && number <= 50 ) {
        return number;
    } else {
        playerOneNumber()
    }
}
let numberToGuess = playerOneNumber();


//on demande à l'utilisateur de choisir un nombre
function askNumber(){
    return parseInt(prompt("Joueur 2 : Devine le nombre")); //parseInt sur le prompt pour pas avoir à le faire la ligne en dessous
}
let givenNumber = askNumber(); //on enregistre le resultat du askNumber dans une variable pour l'appleer ensuite 
  
  
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
didIwin(givenNumber, numberToGuess); //on appele la fonction pour voir 1fois. 
//je rajoute false et true sur les resultats, plus petit, plus grand et égalité pour la prochaine fonction
function gamePlay (){ 
    if (didIwin(givenNumber, numberToGuess) == false) {
        givenNumber = askNumber();
        gamePlay();
    }
/*     while(!didIwin(givenNumber)){ //!givenNumber = "givenNumber = false" mais en plus simple
        givenNumber = askNumber();
    } */
}

gamePlay() //gameplay lance didIwin tant que givenNumber n'est pas true



