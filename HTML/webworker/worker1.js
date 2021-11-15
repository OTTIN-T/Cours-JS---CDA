onmessage = function (e) {
  console.log("Worker: Message reçu du thread principal");
  const result = e.data[0] * e.data[1];
  if (result == 0 || isNaN(result)) {
    postMessage("Donnez deux nombres");
  } else {
    const workerResult = "Result: " + result;
    console.log("Worker: Renvoi du message au thread principal.");
    postMessage(workerResult);
  }
};
