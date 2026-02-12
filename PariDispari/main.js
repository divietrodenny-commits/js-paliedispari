/* prima funzione, genera un numero casuale */
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* seconda funzione, capisco se è pari o dispari */
function pariDispari(numero) {
    return numero % 2 === 0;
}

