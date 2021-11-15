const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result = document.querySelector(".result");

if (window.Worker) {
  // Création du worker et affectation du script
  const myWorker = new Worker("worker1.js");

  first.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log(
      "main: Message envoyé au worker: valeur1=" +
        first.value +
        ",valeur2=" +
        second.value
    );
  };

  second.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log(
      "main: Message envoyé au worker: valeur1=" +
        first.value +
        ",valeur2=" +
        second.value
    );
  };

  myWorker.onmessage = function (e) {
    result.textContent = e.data;
    console.log("main: Message reçu depuis le worker, data=" + e.data);
  };
} else {
  console.log("Votre navigateur ne supporte pas les web workers.");
}
