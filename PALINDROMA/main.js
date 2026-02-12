/* PALINDROMA */

/* Inizio la funzione */
function Palindroma(parola) {

    /* rendo la parola tutta minuscola */
    const parolaNorm = parola.toLowerCase();

    /* divido la stringa in array a singoli caratteri, inverto l'ordine
    dei caratteri eriunisco la parola */
    const parolaInvertita = parolaNorm.split('').reverse().join('');

    /* confronto per avere il risultato */
    return parolaNorm === parolaInvertita;
}

/* chiedo input all'utente */
const inputUtente = prompt('Inserisci una parola');

/* se è paslindroma stampo è */
if (Palindroma(inputUtente)) {
    console.log('La parola è palindroma');

    /* altrimenti stampo non è */
} else {
    console.log('La parola non è palindroma');
}


