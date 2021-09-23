const cibleHTML = document.getElementById("cible");
const msgFormHTML = document.getElementById("msg-form");
const showFormHTML = document.getElementById("show-form");
const showImgHTML = document.getElementById("img-moto");

const url =
  "https://cd2a-dc76e-default-rtdb.europe-west1.firebasedatabase.app/motos";

const showmotos = () => {
  fetch(`${url}.json`)
    .then((data) => data.json())
    .then((motos) => {
      //     Object.entries(motos).map((motos) => {
      //       console.log("motos", motos);
      //     });
      cibleHTML.innerHTML = "";
      msgFormHTML.innerHTML = "";
      showImgHTML.innerHTML = "";
      showFormHTML.innerHTML = `<button onclick="showForm()">+</button>`;
      if (motos != null) {
        Object.entries(motos).map(([key, value]) => {
          cibleHTML.innerHTML += `<p>${value.model.name}</p>
                                   <button onclick="motoDetail('${key}')">Detail</button><br><br>
                                   <hr>`;
        });
      }
    })
    .catch((error) => console.log("error", error));
};
showmotos();

const showForm = () => {
  showImgHTML.innerHTML = "";
  showFormHTML.innerHTML = "";
  cibleHTML.innerHTML = "";
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

const addPicture = (event) => {
  event.preventDefault();
  const addPicturesListHTML = document.getElementById("add-pictures-list");
  const child = document.createElement("input");
  child.setAttribute("name", "images");
  child.setAttribute("type", "text");
  child.setAttribute("class", "images");
  child.setAttribute("placeholder", "url");
  addPicturesListHTML.appendChild(child);
};

const submitForm = (evt) => {
  evt.preventDefault();

  const imagesHTML = document.getElementsByClassName("images");
  const imagesTable = [];
  Object.entries(imagesHTML).map(([key, value]) => {
    imagesTable.push({ url: value.value });
  });

  const data = {
    model: {
      manufacturer: document.getElementById("manufacturer").value,
      name: document.getElementById("name").value,
    },
    year: document.getElementById("year").value,
    cylinder: document.getElementById("cylinder").value,
    images: imagesTable,
  };
  fetch(`${url}.json`, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(() => (msgFormHTML.innerHTML = `Bien ajoutée !`))
    .catch(() => (msgFormHTML.innerHTML = "Erreur !"));
};

const motoDelete = (id) => {
  fetch(`${url}/${id}.json`, {
    method: "DELETE",
  })
    .then(() => showmotos())
    .catch((error) => console.log("error", error));
};

const motoUpdate = (id) => {
  fetch(`${url}/${id}.json`)
    .then((data) => data.json())
    .then((moto) => {
      showFormHTML.innerHTML = "";
      showImgHTML.innerHTML = "";
      cibleHTML.innerHTML = "";
      moto.images.map((image) => {
        showImgHTML.innerHTML += `<input name="images" type="text" id="images" class="images" placeholder="url" value="${image.url}"><hr>`;
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
  const imagesTable = [];
  Object.entries(imagesHTML).map(([key, value]) => {
    console.log("value", value.value);
    if (value.value != "") {
      imagesTable.push({ url: value.value });
    }
  });
  const data = {
    model: {
      manufacturer: document.getElementById("manufacturer").value,
      name: document.getElementById("name").value,
    },
    year: document.getElementById("year").value,
    cylinder: document.getElementById("cylinder").value,
    images: imagesTable,
  };
  fetch(`${url}/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(data),
  })
    .then(() => motoDetail(id))
    .catch((error) => console.log("error", error));
};

let indexMotoImg = 0;

const prevImg = (id, index) => {
  console.log("index prev", index);
  //   console.log("index", index);
  //   console.log("url", url);
  //   console.log("url", JSON.stringify(url));
  //   showImgHTML.innerHTML = "";
  //   showImgHTML.innerHTML = `<img src='${url}'>`;
  //   msgFormHTML.innerHTML = `<div>
  //                                    <button onclick="prevImg('${
  //                                      moto.images[index - 1].url
  //                                    }', '${index}')">Prev</button>
  //                                    <button onclick="nextImg('${
  //                                      moto.images[index + 1].url
  //                                    }', '${index}')">Next</button>
  //                               </div>`;
  fetch(`${url}/${id}/images/${index}.json`)
    .then((data) => data.json())
    .then((url) => {
      console.log("url", url.url);
      showImgHTML.innerHTML = "";
      showImgHTML.innerHTML = `<img src='${url.url}'>`;
      indexMotoImg = index - 1;
    })
    .catch((error) => console.log("error", error));
};
const nextImg = (id, index) => {
  //   console.log("index", index);
  //   console.log("url", url);
  //   showImgHTML.innerHTML = "";
  //   showImgHTML.innerHTML = `<img src='${url}'>`;
  fetch(`${url}/${id}/images/${index}.json`)
    .then((data) => data.json())
    .then((url) => {
      console.log("url", url);
      showImgHTML.innerHTML = "";
      showImgHTML.innerHTML = `<img src='${url.url}'>`;
      indexMotoImg = index + 1;
    })
    .catch((error) => console.log("error", error));
};

const motoDetail = (id) => {
  fetch(`${url}/${id}.json`)
    .then((data) => data.json())
    .then((moto) => {
      cibleHTML.innerHTML = "";
      showFormHTML.innerHTML = "";
      showImgHTML.innerHTML = "";
      //  moto.images.map((image, index) => {
      //    console.log("image", image);
      // const stringUrl = JSON.stringify(moto.images[index])
      // console.log("stringUrl", stringUrl)
      //  const test2 = Object.entries(moto.images);
      indexMotoImg = moto.images.length;
      console.log("indexMotoImg", indexMotoImg);
      console.log("moto.images[indexMotoImg - 1].url", moto.images[indexMotoImg - 1].url);

      msgFormHTML.innerHTML = `<div>
                                   <button onclick="prevImg('${id}','${
        indexMotoImg - 1
      }')">Prev</button>
                                   <button onclick="nextImg('${id}','${
        indexMotoImg + 1
      }')">Next</button>
                              </div>`;
      showImgHTML.innerHTML = `<img src='${
        moto.images[indexMotoImg - 1].url
      }'>`;
      //  });
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
