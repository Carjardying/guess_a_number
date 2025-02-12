let givenNumber = parseInt(prompt("Choisis un nombre"));
  
  
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
didIwin(givenNumber); 
