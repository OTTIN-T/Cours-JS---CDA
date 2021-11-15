const cible = document.getElementById("cible");

const url = "https://randomuser.me/api/?results=10";
fetch(url)
  .then((data) => data.json())
  .then((users) => {
    users.results.map((user) => {
      cible.innerHTML += `<img src="${user.picture.thumbnail}"><br>
                              ${user.gender}<br>
                              ${user.name.title}<br>
                              ${user.name.first}<br>
                              ${user.name.last}
                              <hr>`;
    });
  });