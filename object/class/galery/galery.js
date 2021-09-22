import Galery from "./galeryClass.js";

const cibleHTML = document.getElementById("cible");

let imagesList = [
  new Galery("https://source.unsplash.com/collection/190728"),
  new Galery("https://source.unsplash.com/user/erondu"),
  new Galery("https://source.unsplash.com/random"),
  new Galery("https://source.unsplash.com/collection/190725"),
];

let start = 0;
const affichage = (index) => {
  cibleHTML.innerHTML = `<img src="${imagesList[index].url}">`;
};

affichage(start);

const prevImg = () => {
  if (start === 0) {
    start = imagesList.length - 1;
  } else {
    start--;
  }
  affichage(start);
};

const nextImg = () => {
  if (start === imagesList.length - 1) {
    start = 0;
  } else {
    start++;
  }
  affichage(start);
};

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);
