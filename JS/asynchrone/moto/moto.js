const cibleHTML = document.getElementById("cible");
const infoFormHTML = document.getElementById("info-form");
const showFormHTML = document.getElementById("show-form");
const showImgHTML = document.getElementById("img-moto");
const sliderImgHTML = document.getElementById("slider");

const clearInnerHTML = () => {
  showImgHTML.innerHTML = "";
  showFormHTML.innerHTML = "";
  cibleHTML.innerHTML = "";
  infoFormHTML.innerHTML = "";
  sliderImgHTML.innerHTML = "";
};

const url =
  "https://cd2a-dc76e-default-rtdb.europe-west1.firebasedatabase.app/motos";

const showmotos = () => {
  fetch(`${url}.json`)
    .then((data) => data.json())
    .then((motos) => {
      //     Object.entries(motos).map((motos) => {
      //       console.log("motos", motos);
      //     });
      clearInnerHTML();
      cibleHTML.innerHTML = "Pas de motos à afficher !";
      showFormHTML.innerHTML = `<button onclick="showForm()">+</button>`;
      if (motos != null) {
        cibleHTML.innerHTML = "";
        Object.entries(motos).map(([key, value]) => {
          cibleHTML.innerHTML += `<p>${value.model.name}</p>
                                   <button onclick="motoDetail('${key}', '0')">Detail</button><br><br>
                                   <hr>`;
        });
      }
    })
    .catch((error) => console.log("error", error));
};
showmotos();

const showForm = () => {
  clearInnerHTML();
  cibleHTML.innerHTML = `<button onclick="showmotos()">Retour</button><br>
                         <form action="" onsubmit="submitForm(event)" id="form">
                              <div>Modèle:
                              <label for="manufacturer">Marque:</label>
                              <input name="manufacturer" type="text" id="manufacturer" placeholder="Yamaha">
                              <label for="name">Nom:</label>
                              <input name="name" type="text" id="name" placeholder="Yamaha">
                              </div>
                              <label for="year">Année:</label>
                              <input name="year" type="text" id="year">
                              <label for="cylinder">Cylindre:</label>
                              <input name="cylinder" type="text" id="cylinder" placeholder="...cm3">                              
                              <div id="add-pictures-list">
                                   <label for="images">Images:</label>
                                   <input name="images" type="text" class="images" placeholder="url">
                              </div>
                              <button id="add-picture" onclick="addPicture(event)">Ajouter une photo</button>
                              <button type="submit" id="submit">Envoyer</button>
                         </form>`;
};

const removeInputImgForm = (event) => {
  let eventButton = event.target;
  let eventInput = eventButton.previousSibling;

  eventButton.remove();
  eventInput.remove();
};

const addPicture = (event) => {
  event.preventDefault();

  const addPicturesListHTML = document.getElementById("add-pictures-list");
  const child = document.createElement("input");

  child.setAttribute("name", "images");
  child.setAttribute("type", "text");
  child.setAttribute("class", "images");
  child.setAttribute("placeholder", "url");


  const childButton = document.createElement("button");
  childButton.setAttribute("onclick", "removeInputImgForm(event)")
  childButton.innerHTML = "X"

  addPicturesListHTML.appendChild(child);
  addPicturesListHTML.insertBefore(childButton, child.nextSibling)
};

const submitForm = (evt) => {
  evt.preventDefault();

  const imagesHTML = document.getElementsByClassName("images");
  const manufacturerData = document.getElementById("manufacturer").value;
  const nameData = document.getElementById("name").value;
  const yearData = document.getElementById("year").value;
  const cylinderData = document.getElementById("cylinder").value;
  const imagesTable = [];

  if (
    (manufacturerData === "",
    nameData === "",
    yearData === "",
    cylinderData === "")
  ) {
    return (infoFormHTML.innerHTML = "Certains champs sont vide !");
  }

  Object.entries(imagesHTML).map(([key, value]) => {
    if (value.value === "") {
      return (infoFormHTML.innerHTML = "Champ vide !");
    }
    imagesTable.push({ url: value.value });
  });

  if (imagesTable.length === 0) {
    return (infoFormHTML.innerHTML = "Merci de mettre une photo !");
  }

  const data = {
    model: {
      manufacturer: manufacturerData,
      name: nameData,
    },
    year: yearData,
    cylinder: cylinderData,
    images: imagesTable,
  };
  fetch(`${url}.json`, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(() => showmotos())
    .catch(() => (infoFormHTML.innerHTML = "Erreur !"));
};

const motoDelete = (id) => {
  fetch(`${url}/${id}.json`, {
    method: "DELETE",
  })
    .then(() => showmotos())
    .catch((error) => console.log("error", error));
};

const removeImg = (event) => {
  let eventButton = event.target;
  let eventInput = eventButton.previousSibling.previousSibling;

  eventButton.remove();
  eventInput.remove();
};

const motoUpdate = (id) => {
  fetch(`${url}/${id}.json`)
    .then((data) => data.json())
    .then((moto) => {
      clearInnerHTML();
      moto.images.map((image) => {
        showImgHTML.innerHTML += `<input name="images" type="text" id="images" class="images" placeholder="url" value="${image.url}">
                                    <button onclick="removeImg(event)">X</button>
                                  `;
      });
      cibleHTML.innerHTML = ` <div>
                                   <button onclick="showmotos()">Retour</button><br>
                                   <button onclick="motoDelete('${id}')">X</button><br>
                              </div>
                              <form action="" onsubmit="submitUpdate(event, '${id}')" id="update-form">
                                   <div>
                                        <p>Modèle:
                                        <label for="manufacturer">Marque:</label>
                                        <input name="manufacturer" type="text" id="manufacturer" placeholder="Yamaha" value="${moto.model.manufacturer}">
                                        <label for="name">Nom:</label>
                                        <input name="name" type="text" id="name" placeholder="Yamaha" value="${moto.model.name}">
                                        </p>
                                   </div>
                                   <label for="year">Année:</label>
                                   <input name="year" type="text" id="year" value="${moto.year}">
                                   <label for="cylinder">Cylindre:</label>
                                   <input name="cylinder" type="text" id="cylinder" placeholder="...cm3" value="${moto.cylinder}">                              
                                   <label for="images">Images:</label>

                                   <div id="add-pictures-list">
                                        <label for="images">Images:</label>
                                        <input name="images" type="text" class="images" placeholder="url">
                                   </div>
                                   <button id="add-picture" onclick="addPicture(event)">Ajouter une photo</button>

                                   <button type="submit" id="submit">Envoyer</button>
                              </form>`;
    })
    .catch((error) => console.log("error", error));
};

const submitUpdate = (evt, id) => {
  evt.preventDefault();

  const imagesHTML = document.getElementsByClassName("images");
  const manufacturerData = document.getElementById("manufacturer").value;
  const nameData = document.getElementById("name").value;
  const yearData = document.getElementById("year").value;
  const cylinderData = document.getElementById("cylinder").value;
  const imagesTable = [];

  if (
    (manufacturerData === "",
    nameData === "",
    yearData === "",
    cylinderData === "")
  ) {
    return (infoFormHTML.innerHTML = "Certains champs sont vide !");
  }

  Object.entries(imagesHTML).map(([key, value]) => {
    if (value.value === "") {
      return (infoFormHTML.innerHTML = "Champ vide !");
    }
    imagesTable.push({ url: value.value });
  });

  if (imagesTable.length === 0) {
    return (infoFormHTML.innerHTML = "Merci de mettre au moins une photo !");
  }

  const data = {
    model: {
      manufacturer: manufacturerData,
      name: nameData,
    },
    year: yearData,
    cylinder: cylinderData,
    images: imagesTable,
  };

  fetch(`${url}/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(data),
  })
    .then(() => motoDetail(id, 0))
    .catch((error) => console.log("error", error));
};

const sliderImg = (id, index) => {
  fetch(`${url}/${id}/images/${index}.json`)
    .then((data) => data.json())
    .then((url) => {
      if (url === null) {
        return motoDetail(id, 0);
      }
      showImgHTML.innerHTML = `<img src='${url.url}'>`;
      motoDetail(id, Number(index));
    })
    .catch((error) => console.log("error", error));
};

const motoDetail = (id, indexTest) => {
  let index = Number(indexTest);
  fetch(`${url}/${id}.json`)
    .then((data) => data.json())
    .then((moto) => {
      clearInnerHTML();
      sliderImgHTML.innerHTML = `<div>
                                  <button onclick="sliderImg(
                                     '${id}',
                                     '${index - 1}')"
                                     >Prev
                                  </button>
                                  ${index + 1}/${moto.images.length}
                                  <button onclick="sliderImg(
                                     '${id}',
                                     '${index + 1}')"
                                     >Next
                                  </button>
                              </div>`;
      showImgHTML.innerHTML = `<img src=
                                  '${moto.images[index].url}'
                                >`;
      cibleHTML.innerHTML = `<div>
                                   <button onclick="showmotos()">Retour</button><br>
                                   <button onclick="motoDelete('${id}')">X</button><br>
                                   <button onclick="motoUpdate('${id}')">Modifier</button><br>
                              </div> 
                              <p>
                                   Model: 
                                   <p>
                                        marque : ${moto.model.manufacturer}<br>
                                        nom : ${moto.model.name}<br>
                                   </p>
                                   Cylindre: ${moto.cylinder} cm3<br>
                                   Année: ${moto.year}<br>                                   
                              </p>
                              <hr>`;
    })
    .catch((error) => console.log("error", error));
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
