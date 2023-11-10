// =========================== Dom-Elements-Level-1_3 ======================

// Schreibe eine Funktion, die beim Anklicken der Buttons jeweils den Inhalt der Elemente anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.
// Den HTML- und CSS-Code findest du im Code-Snippet.
// Nutze: firstElementChild, lastElementChild, nextElementSibling, previousElementSibling, innerHTML, querySelectorAll, querySelector und addEventListener.

const games = document.body.querySelector("ul");

const output = document.body.querySelector("output");

const buttonFec = document.body.querySelector("button:nth-of-type(1)");
const buttonLec = document.body.querySelector("button:nth-of-type(2)");
const buttonFecNext = document.body.querySelector("button:nth-of-type(4)");
const buttonLecPrevious = document.body.querySelector("button:nth-of-type(3)");

buttonFec.addEventListener(`click`, () => {
  output.textContent = games.firstElementChild.textContent;
});

buttonLec.addEventListener("click", () => {
  output.textContent = games.lastElementChild.textContent;
});

buttonFecNext.addEventListener(`click`, () => {
  output.textContent = games.firstElementChild.nextElementSibling.textContent;
});

buttonLecPrevious.addEventListener("click", () => {
  output.textContent =
    games.lastElementChild.previousElementSibling.textContent;
});
