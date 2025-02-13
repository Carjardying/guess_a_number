//on demande à l'utilisateur de choisir un nombre
function askNumber(){
    return parseInt(prompt("Choisis un nombre")); //parseInt sur le prompt pour pas avoir à le faire la ligne en dessous
}
let givenNumber = askNumber(); //on enregistre le resultat du askNumber dans une variable pour l'appleer ensuite 
  
  
function didIwin (givenNumber){
    if (givenNumber === 22) {
        alert("Bravo! Vous avez deviné le nombre");
        return true
    } else if (givenNumber > 22) {
        alert("Plus petit");
        return false ;
    } else if (givenNumber< 22){
        alert("plus grand");
        return false;
    }
}
didIwin(givenNumber); //on appele la fonction pour voir 1fois. 
//je rajoute false et true sur les resultats, plus petit, plus grand et égalité pour la prochaine fonction
function gamePlay (){ 
    if (didIwin(givenNumber) == false) {
        givenNumber = askNumber();
        gamePlay();
    }
/*     while(!didIwin(givenNumber)){ //!givenNumber = "givenNumber = false" mais en plus simple
        givenNumber = askNumber();
    } */
}

gamePlay() //gameplay lance didIwin tant que givenNumber n'est pas true

