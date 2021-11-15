let ws = "";
const message = document.getElementById("message");
const btnConnect = document.getElementById("btn-connect");
const btnDeconnect = document.getElementById("btn-deconnect");
const btnSend = document.getElementById("btn-send");
const userName = document.getElementById("user-name");
const texte = document.getElementById("texte");

function connecte() {
  ws = new WebSocket(`ws://192.168.1.15:1299/chat/${userName.value}`);

  btnConnect.disabled = true;

  ws.onopen = function (event) {
    console.log("event", event);
    message.innerHTML = "Connexion établie !";
    btnSend.disabled = false;
    btnDeconnect.disabled = false;
  };

  ws.onerror = function (event) {
    message.innerHTML = "Erreur !";
  };

  ws.onmessage = function (message) {
    console.log("message", message);

    let textes = document.getElementById("textes");
    //     textes.append(new Option(message.data, ""));
    let p = document.createElement("p");
    p.setAttribute("class", "card");
    //   if (userName.value === message.data) {

    //   }
    p.innerHTML = message.data;
    textes.appendChild(p);
  };
}

function send() {
  let data = JSON.stringify({
    user: userName.value,
    message: texte.value,
  });

  ws.send(data);
  message.innerHTML = "Message envoyé";
}

function deconnect() {
  if (ws != null) {
    btnConnect.disabled = false;
    btnSend.disabled = true;
    btnDeconnect.disabled = true;

    ws.close();
    message.innerHTML = "Connexion terminée !";
  }
}
