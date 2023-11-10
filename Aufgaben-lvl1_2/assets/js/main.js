// =========================== Dom-Elements-Level-1_2 ======================

// Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
// HTML- und CSS-Code findest du im Code-Snippet.
// Nutze zum Beispiel: getElementsByClassName, for-loop oder length.

const myFunction = () => {
  const allBtn = document.body.querySelectorAll(".example");
  //   console.log(allBtn);

  for (let btn of allBtn) {
    btn.style.background = "red";
  }
};
