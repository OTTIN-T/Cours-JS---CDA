/*  TP - Tableur */

var tableur = {
  // Référence du tableau courant
  tableauCourant: {},
  matable: {},
  // Liste des Tabbleaux
  tableaux: [],

  init: function (name, nbcol, nbrow) {
    let lastTableau = localStorage.getItem("lastTableau");
    if (lastTableau === null) {
      // Initialise le tableau avec des valeurs par défaut
      tableur.tableauCourant["nom"] = name;
      tableur.tableauCourant["id"] = 1;
      tableur.tableauCourant["cellules"] = {};
      tableur.tableauCourant["nbcol"] = nbcol;
      tableur.tableauCourant["nbrow"] = nbrow;
    } else {
      let tableau = JSON.parse(localStorage.getItem(lastTableau));
      console.log("tableau", tableau);
      nbcol = tableau.nbcol;
      nbrow = tableau.nbrow;
    }

    // Initialise le gestionnaire d'événement du click sur la dropdown du menu
    let dropdown = document.getElementById("offcanvasNavbarDropdown");
    dropdown.onclick = function () {
      // On modifie la liste des tableaux dans la dropdown du menu
      tableur.refreshList();
    };

    // Recharge la liste des tableaux
    let storage = window.localStorage;
    tableur.tableaux = JSON.parse(storage.getItem("tableaux"));
    if (tableur.tableaux == null) {
      tableur.tableaux = [];
    }

    // On récupère la référence sur la div target
    let target = document.getElementById("target");
    target.innerHTML = "";
    tableur.matable = document.createElement("table");
    tableur.matable.setAttribute("class", "table table-bordered");
    target.appendChild(tableur.matable);

    // On récupère une référence sur l'objet table de la page html.
    //var matable = document.getElementById(tablename);
    // On récupère les attributs de la table
    // let nbcol = matable.getAttribute("nbcol");
    // let nbrow = matable.getAttribute("nbrow");
    let entetes = tableur.matable.insertRow();
    // Ajoute une cellule vide pour une question d'alignement des colonnes
    let header = document.createElement("th");
    entetes.appendChild(header);
    // Une boucle sur les entetes
    for (col = 0; col < nbcol; col++) {
      let header = document.createElement("th");
      header.innerHTML = String.fromCharCode(65 + col);
      entetes.appendChild(header);
    }
    // Les entête de colonnes
    // On boucle sur toutes les lignes et sur toutes les colonnes
    for (ligne = 0; ligne < nbrow; ligne++) {
      let row = tableur.matable.insertRow();

      let header = document.createElement("th");
      header.innerHTML = ligne + 1;
      row.appendChild(header);

      for (col = 0; col < nbcol; col++) {
        // A chaque tour on créer une cellule avec ses attributs
        let cell = row.insertCell();
        let id = String.fromCharCode(65 + col) + (ligne + 1);
        cell.innerHTML = "";
        cell.id = id;
        cell.value = "";
        //cell.setAttribute('class','col-6');
        // On met la référence sur la fonction clickOnCell dans la propriété onclick de la cellule
        cell.onclick = tableur.clickOnCell;
        // Rendre la cellule draggable
        Object.assign(cell, {
          draggable: "true",
          ondragstart: tableur.dragstart_handler,
          ondrop: tableur.drop_handler,
          ondragover: tableur.dragover_handler,
        });
      }
    }

    // On récupère le dernier tableau manipulé
    if (lastTableau == null) {
      let span = document.getElementById("nameTableau");
      span.innerHTML = name;
      //storage.setItem('lastTableau',name);
    } else {
      // On affiche le nom du tableau
      let span = document.getElementById("nameTableau");
      span.innerHTML = lastTableau;
      // On renseigne le tableau courant
      tableur.loadTableau(lastTableau);
    }
  }, // fin de l'init.
  newTableau: function () {
    let target = document.getElementById("target");
    target.innerHTML = "";
    let label = document.createElement("label");
    let input = document.createElement("input");
    let button = document.createElement("button");
    input.setAttribute("type", "text");
    input.setAttribute("id", "nom");
    input.setAttribute("value", "");
    input.setAttribute("placeHolder", "nom du tableau");
    label.setAttribute("for", "nom");
    label.setAttribute("value", "Nom du tableau :");
    button.innerHTML = "Enregistrer";
    button.onclick = function () {
      tableur.tableauCourant = {};
      tableur.tableauCourant["nom"] = input.value;
      tableur.tableauCourant["id"] = 0;
      tableur.tableauCourant.cellules = {};
      // On garde le nom du tableau dans la liste des tableaux
      tableur.tableaux.push(tableur.tableauCourant["nom"]);
      // On stocke la liste des tableaux dans le localStorage
      let storage = window.localStorage;
      storage.setItem("tableaux", JSON.stringify(tableur.tableaux));
      // On met à jour le contenu de lastTableau pour que la méthode init
      // traite le bon tableau.
      storage.setItem("lastTableau", tableur.tableauCourant["nom"]);
      // Initialiser le tableau
      target.innerHTML = "";
      tableur.init(tableur.tableauCourant["nom"], 5, 8);
      // Créer le tableau vide dans le storage
      tableur.persisteTableau();
    };
    target.appendChild(input);
    target.appendChild(label);
    target.appendChild(button);
  },
  // Cette méthode est appelée lorsqu'on clique sur une cellule
  clickOnCell: function () {
    this.onclick = "";
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    // Ajoute l'id de la cellule dans le champ input
    input.setAttribute("idCell", this.id);
    // Récupère la valeur de la cellule
    let value = this.value;
    input.setAttribute("value", value);
    // On met la valeur de l'id de la cellule dans l'input
    input.setAttribute("id", "input-" + this.id);
    this.innerHTML = "";
    this.appendChild(input);
    input.focus();
    input.onblur = tableur.closeInput;
  },
  closeInput: function () {
    let input = document.getElementById(this.id);

    let idCell = input.getAttribute("idCell");
    // récupérer la référence sur la cellule
    let cell = document.getElementById(idCell);
    // On conserve la valeur dans la cellule
    cell.value = input.value;
    // On supprime l'objet input de la cellule
    cell.removeChild(input);
    // On replace la value dans la cellule
    cell.innerHTML = cell.value;
    cell.onclick = tableur.clickOnCell;
    tableur.persistCell(cell);
  },
  persistCell: function (obj) {
    let cell = {
      id: obj.id,
      value: obj.value,
    };
    // On empile les objets cell dans le tableau tableauCourant['cellule']
    if (obj.value == "") {
      delete tableur.tableauCourant.cellules[obj.id];
    } else {
      tableur.tableauCourant.cellules[obj.id] = cell;
    }
  },
  persisteTableau: function () {
    // On récupère une référence sur le localStorage
    let storage = window.localStorage;
    storage.setItem(
      tableur.tableauCourant["nom"],
      JSON.stringify(tableur.tableauCourant)
    );
    // On vérifie que le nom du tableau existe dans la liste des tableaux.
    let exists = false;
    tableur.tableaux.forEach(function (item) {
      if (item == tableur.tableauCourant.nom) {
        exists = true;
      }
    });
    // S'il n'existe pas on l'ajoute et on le sauvegarde
    if (!exists) {
      tableur.tableaux.push(tableur.tableauCourant["nom"]);
      storage.setItem("tableaux", JSON.stringify(tableur.tableaux));
    }
    // On mémorise le dernier tableau manipulé
    storage.setItem("lastTableau", tableur.tableauCourant["nom"]);
  },
  loadTableau: function (nom) {
    tableur.clearTableau();

    let storage = window.localStorage;
    // Transforme la chaine de caractères en objet javascript
    let tableau = JSON.parse(storage.getItem(nom));
    if (tableau != null) {
      tableur.tableauCourant = tableau;
    }
    // Parcourir tous les éléments du tableau.
    for (key in tableur.tableauCourant.cellules) {
      let cell = document.getElementById(key);
      cell.innerHTML = tableur.tableauCourant.cellules[key].value;
      cell.value = tableur.tableauCourant.cellules[key].value;
    }
  },
  showTableau: function () {},
  // Les gestionnaires du drag and drop cellule
  dragstart_handler: function (ev) {
    ev.dataTransfer.setData("idSource", ev.target.id);
    ev.dataTransfer.setData("text/plain", ev.target.value);
  },
  dragover_handler: function (ev) {
    ev.preventDefault();
  },
  drop_handler: function (ev) {
    ev.preventDefault();
    // On recopie les données de la cellule source dans la cellule cible
    ev.target.innerHTML = ev.dataTransfer.getData("text/plain");
    ev.target.value = ev.dataTransfer.getData("text/plain");
    // On persite la cellule
    tableur.persistCell(ev.target);
  },
  // Les gestionnaires du drag and drop liste tableaux
  dragstart_tableau_handler: function (ev) {
    console.log("dragstart");
    // ev.dataTransfer.setData("idSource", ev.target.id);
    ev.dataTransfer.setData("text/plain", ev.target.innerHTML);
  },
  drop_tableau_handler: function (ev) {
    ev.preventDefault();
    tableur.deleteTableau(ev.dataTransfer.getData("text/plain"));
  },
  clearTableau: function () {
    let nbcol = tableur.tableauCourant["nbcol"];
    let nbrow = tableur.tableauCourant["nbrow"];
    // On boucle sur toutes les lignes et sur toutes les colonnes
    for (ligne = 0; ligne < nbrow; ligne++) {
      for (col = 0; col < nbcol; col++) {
        let id = String.fromCharCode(65 + col) + (ligne + 1);
        let cell = document.getElementById(id);
        cell.innerHTML = "";
      }
    }
  },
  deleteTableau: function (nom) {
    let tableaux = JSON.parse(localStorage.getItem("tableaux"));
    tableaux.splice(tableaux.indexOf(nom));

    localStorage.setItem("tableaux", JSON.stringify(tableaux));
    tableur.tableaux = tableaux;
    localStorage.removeItem(nom);

    let lastTableau = localStorage.getItem("lastTableau");
    if (lastTableau === nom) {
      if (tableaux.length === 0) {
        tableur.init("table1", 5, 8);
        localStorage.setItem("lastTableau", "table1");
      } else {
        lastTableau = tableaux[0];
        localStorage.setItem("lastTableau", lastTableau);
      }
    }
    return tableur.refreshList();
  },
  refreshList: function () {
    let ul = document.getElementById("target4tableaux");
    ul.innerHTML = "";
    tableur.tableaux.forEach(function (item) {
      // <li><a class="dropdown-item" href="#">Action</a></li>
      let li = document.createElement("li");
      Object.assign(li, {
        draggable: "true",
        ondragstart: tableur.dragstart_tableau_handler,
      });
      li.setAttribute("class", "dropdown-item");
      li.innerHTML = item;
      li.onclick = function () {
        tableur.loadTableau(item);
        let span = document.getElementById("nameTableau");
        span.innerHTML = item;
        let storage = window.localStorage;
        // On mémorise le dernier tableau manipulé
        storage.setItem("lastTableau", item);
      };
      ul.appendChild(li);
    });
    const divider = document.createElement("li");
    const hr = document.createElement("hr");
    hr.setAttribute("class", "dropdown-divider");
    divider.appendChild(hr);
    ul.appendChild(divider);

    const zoneatterrissage = document.createElement("li");
    Object.assign(zoneatterrissage, {
      ondrop: tableur.drop_tableau_handler,
      ondragover: tableur.dragover_handler,
    });

    let img = document.createElement("img");
    img.setAttribute("src", "poubelle.png");
    zoneatterrissage.appendChild(img);
    ul.appendChild(zoneatterrissage);
  },
  saveSettings: function () {
    const inputNbCol = document.getElementById("nbCol").value;
    const inputNbRow = document.getElementById("nbRow").value;
    tableur.tableauCourant.nbcol = inputNbCol;
    tableur.tableauCourant.nbrow = inputNbRow;
    tableur.init(tableur.tableauCourant.name, inputNbCol, inputNbRow);
    tableur.persisteTableau();
    tableur.loadTableau(tableur.tableauCourant.name);
  },
};
tableur.init("tableau1", 5, 8);
