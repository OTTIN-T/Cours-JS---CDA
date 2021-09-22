const cibleHTML = document.getElementById("cible");
const url = "https://api.punkapi.com/v2/beers/";

const listBeer = () => {
  fetch(url)
    .then((data) => data.json())
    .then((beer) => {
      console.log("premier fetch", beer);
      showBeers(beer);
    });
};
listBeer();

const showBeers = (params) => {
  cibleHTML.innerHTML = "";
  params.map((param) => {
    cibleHTML.innerHTML += `Name: ${param.name} <br>
     <button onclick="showDetail(${param.id})">Voir détail</button> <hr>`;
  });
};

const showDetail = (id) => {
  fetch(url + id)
    .then((data) => data.json())
    .then((beer) => {
      showBeer(beer);
    });
};

const showBeer = (param) => {
  cibleHTML.innerHTML = "";
  cibleHTML.innerHTML += `<button onclick="listBeer()">Retour</button><br>
                         Name: ${param[0].name} <br>
                         <img src="${param[0].image_url}"> <br>
                         Description: ${param[0].description}
                         <hr>`;
};
