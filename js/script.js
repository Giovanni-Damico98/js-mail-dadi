/**Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// Preparazione
const max = 6;

// Raccolta dati
const firstPlayerNumb = Math.floor(Math.random() * max) + 1;
const secondPlayerNumb = Math.floor(Math.random() * max) + 1;

console.log("il primo giocatore ha fatto: ", firstPlayerNumb);
console.log("il secondo giocatore ha fatto: ", secondPlayerNumb);

