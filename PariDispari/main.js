/* prima funzione, genera un numero casuale */
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* seconda funzione, capisco se è pari o dispari */
function pariDispari(numero) {
    return numero % 2 === 0;
}

/* inizio del game, chiedo un input all'utente */
const sceltaUtente = prompt('Scegli: pari o dispari?').toLowerCase();

/* altro input n.1-5 */
const numUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
