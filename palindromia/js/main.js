// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


/**
 * funzione che stabilisce se una parola è palindroma
 * @param {string} palindromeWord parola da verificare
 * @returns {boolean} output della funzione(vero o falso)
 */
function isPalindromeWord(palindromeWord){
    let wordInverted = "";
    for(let i = palindromeWord.length - 1; i >= 0; i--){
        currentLetter = palindromeWord[i];
        wordInverted += currentLetter;
    }
    if(wordInverted === palindromeWord){
        return true;
    }
    return false;
}

const userWord = prompt("inserisci una parola");

if (/^[a-zA-Z]+$/.test(userWord)){ // condizione che controlla se l'imput inserito è composto solo da lettere
    alert("la parola è palindroma: " + isPalindromeWord(userWord));
}else{
    throw new Error("inserire una parola");
} 
    
