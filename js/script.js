/**Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// Preparazione
const max = 6;
const resultElement = document.getElementById("result");

// Raccolta dati
const firstPlayerNumb = Math.floor(Math.random() * max) + 1;
const secondPlayerNumb = Math.floor(Math.random() * max) + 1;

console.log("il primo giocatore ha fatto: ", firstPlayerNumb);
console.log("il secondo giocatore ha fatto: ", secondPlayerNumb);

// Elaborazione
let message = "La partita è finita in pareggio";

if (firstPlayerNumb > secondPlayerNumb) {
  message = "Il primo giocatore ha vinto la partita";
} else if (firstPlayerNumb < secondPlayerNumb) {
  message = "Il secondo giocatore ha vinto la partita";
}

console.log(message);

// Output del risultato
resultElement.innerHTML = `
<p>Il primo giocatore ha fatto: ${firstPlayerNumb}</p>
<p>Il secondo giocatore ha fatto: ${secondPlayerNumb}</p>
<p>${message}<p>
`;
