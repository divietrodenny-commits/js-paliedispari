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

/* creo una variabile per darle il valore random del pc */
const numPC = generaRandom(1, 5);

/* addizione tra i 2 */
const somma = numUtente + numPC;

/* inizializzo il risultato */
let risultato;

/* se la somma è pari, imposto risultato a pari */
if (pariDispari(somma)) {
    risultato = 'pari';
}
/* altrimenti imposto dispari */
else {
    risultato = 'dispari';
}

/* stampo in console */
console.log(`tu hai scelto ${sceltaUtente}, numero: ${numUtente}`);
console.log(`pc: ${numPC}, somma: ${somma}, risultato: ${risultato}`);

/* determino in vincitore, se il risultato è = alla scelta utente stampa hai vinto */
if (risultato === sceltaUtente) {
    console.log('Hai vinto');
    alert('Hai vinto')
}

/* Altrimenti stampa hai perso */
else {
    console.log('Hai perso');
    alert('Hai perso')
}