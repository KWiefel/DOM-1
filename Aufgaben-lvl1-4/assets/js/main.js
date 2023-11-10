// =========================== lev1_4: createElement ======================

// Erstelle eine einfache Website auf der dynamisch eine Einkaufsliste erzeugt werden soll.
//  Schau dir hierzu die Ergebnisvorschau an.
// Schreibe die Funktion “addElement”. Beim Klicken auf den Button sollte das eingegebene Element der Liste hinzugefügt werden. Nutze hierfür JS um dynamisch neue Listenelemente hinzuzufügen.
// Das Eingabefeld soll nach jedem Hinzufügen geleert werden.
// Nutze gerne das HTML aus dem Kommentarbereich.

const input = document.body.querySelector("#inputText");
const list = document.body.querySelector("#myList");
const btn = document.body.querySelector("button");
// btn.addEventListener("click", addElement);

const addElement = () => {
  const li = document.createElement("li");
  li.textContent = `${input.value}`;
  list.appendChild(li);
  input.value = "";
  console.log(input.value);
};

const deleat = () => {
  list.innerHTML = "";
};
