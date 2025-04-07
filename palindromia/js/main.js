// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const userWord = prompt("inserisci una parola");

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

alert("la parola è palindroma: " + isPalindromeWord(userWord));