// =========================== Dom-Elements-Level-1_9 ======================

// Dieses Mal sollst du eine Funktion schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
// Den HTML- und CSS-Code findest du im Code-Snippet.
// Nutze: addEventListener(), selectedIndex und remove().

const inputColor = document.body.querySelector("#farbeAuswahlen");

const btn = document.body.querySelector("#button");

const clear = () => {
  let selected = inputColor.selectedIndex;
  inputColor.remove(selected);
};

btn.addEventListener("click", clear);
