// Inventa una lista di email autorizzate
// Chiedi all’utente la sua email, con un piccolo form.
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Preparazione
const resultElement = document.getElementById("result");
const emailField = document.getElementById("email");
const form = document.querySelector("form");

// Lista mail autorizzate
const allowedEmail = [
  "alessandro.rossi@example.com",
  "maria.bianchi@testmail.com",
  "giovanni.verdi@demo.net",
  "francesca.neri@sample.org",
  "luca.martini@mail.com",
  "simona.galli@webmail.net",
];

// Eventi dinamici
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Raccolta dati
  const email = emailField.value.trim();

  // Validazione
  if (!email) return;

  // Fase di elaborazione
  let isAllowed = false;

  for (let i = 0; i < allowedEmail.length; i++) {
    const emailToCheck = allowedEmail[i];

    if (email === emailToCheck) {
      isAllowed = true;
    }
  }

  const message = isAllowed ? "Benvenuto!" : "Accesso negato!";

  resultElement.innerText = message;
});
