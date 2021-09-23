const cibleHTML = document.getElementById("cible");
const msgFormHTML = document.getElementById("msg-form");

const url =
  "https://cd2a-dc76e-default-rtdb.europe-west1.firebasedatabase.app/users.json";

const showUsers = () => {
  fetch(url)
    .then((data) => data.json())
    .then((users) => {
      //     Object.entries(users).map((users) => {
      //       console.log("users", users);
      //     });
      cibleHTML.innerHTML = "";
      Object.entries(users).map(([key, value]) => {
        cibleHTML.innerHTML += `${value.name} <button onclick="userDetail('${key}')">Detail</button><br><hr>`;
      });
    })
    .catch((error) => console.log("error", error));
};
showUsers();

const submitForm = (evt) => {
  evt.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    class: document.getElementById("class").value,
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(() => (msgFormHTML.innerHTML = "Bien ajouté !"))
    .catch(() => (msgFormHTML.innerHTML = "Erreur !"));
};

const userDetail = (id) => {
  fetch(
    `https://cd2a-dc76e-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`
  )
    .then((data) => data.json())
    .then((user) => {
      cibleHTML.innerHTML = "";
      cibleHTML.innerHTML = `<button onclick="showUsers()">Retour</button><br>
                              Name: ${user.name}<br>
                              Age: ${user.age}<br>
                              Classe: ${user.class}<br>
                              <hr>`;
    })
    .catch();
};

/*
     simple:
     recupèrer une liste de moto
     l'afficher
     CRUD
     option1:
     au click sur un element de la liste on va dans le détails
     option 2:
     le detail de la moto contient un slider de photo
     option 3:
     nombre de photo illimité par moto
     options 4:
     mettre du css
     option 5:
     ajout de filtre (marque puissance etc)
*/