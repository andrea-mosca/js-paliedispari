// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


/**
 * funzione che genera un numero casuale
 * @param {number} max range massimo
 * @param {number} min range minimo
 * @returns {number} numero casuale generato
 */
function generateRandomNumber(max, min){
    max = parseInt(max);
    min = parseInt(min);

    if(isNaN(max)) throw new Error("max deve essere un numero");
    if(isNaN(min)) throw new Error("min deve essere un numero");

    const randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    return randomNumber;
}

/**
 * funzione che data la somma di due numeri, dichiara se questa è pari o dispari
 * @param {number} n1 numero 1 da sommare
 * @param {number} n2 numeri 2 da sommare
 * @returns {string} contiene l'output pari o dispari 
 */
function sumEvenOrOdd(n1, n2){
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    if(isNaN(n1)) throw new Error("n1 deve essere un numero");
    if(isNaN(n2)) throw new Error("n2 deve essere un numero");
    
    let result = n1 + n2;
    if (result % 2 === 0){
        return "pari";
    }else{
        return "dispari";
    }
}


const utentChoice = prompt("Scegli: pari o dispari?");
if(utentChoice !== "pari" && utentChoice !== "dispari") throw new Error("scrivere pari o dispari");
console.log("your choice: ", utentChoice);

const utentNumber = parseInt(prompt("Inserisci un mnumero da 1 a 5:"));
console.log("your number: ", utentNumber);

const computerNumber= generateRandomNumber(5, 1);
console.log("computer number: ", computerNumber);

if(sumEvenOrOdd(computerNumber, utentNumber) === utentChoice){
    alert("you win");
}else{
    alert("you lose");
}