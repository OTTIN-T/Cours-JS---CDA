import Bar from "./barClass.js";

const cibleHTML = document.getElementById("cible");

let listBar = [
  new Bar("Le Belze", "0625634898", "18 rue st remy"),
  new Bar("Le Jean", "0652118985", "14 rue st remy"),
  new Bar("Le Flibustier", "0648778541", "1 rue st remy"),
  new Bar("Le Patrick", "0685369474", "8 rue st remy"),
  new Bar("Le Didier", "0674115596", "21 rue st remy"),
  new Bar("Le Bar", "0623654178", "36 rue st remy"),
];

const affichage = () => {
  listBar.map((bar) => {
    cibleHTML.innerHTML += `Nom: ${bar.getInfo()}<br><hr>`;
  });
};
affichage();
