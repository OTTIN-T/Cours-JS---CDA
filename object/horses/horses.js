const horses = [
  {
    name: "Tornade",
    gender: "F",
    age: 5,
  },
  {
    name: "Libbelule",
    gender: "F",
    age: 8,
  },
  {
    name: "K2000",
    gender: "M",
    age: 5,
  },
  {
    name: "Barracuda",
    gender: "M",
    age: 9,
  },
];
// Stocke age filtre, sexe filtre
let filtre = [0, null];

// Tableau des chevaux filtres
let horsesFilter = horses;

const cible = document.getElementById("cible");

function affichage(tableau) {
  cible.innerHTML = "";
  tableau.map((cheval) => {
    cible.innerHTML += `${cheval.name} <br>
                        ${cheval.gender} <br>
                         ${cheval.age} <br> <hr>`;
  });
  // reinitialiser pour les autres filtres
  horsesFilter = horses;
  console.log(filtre);
}

affichage(horses);

function filterGender(param) {
  // Teste si on a deja un test sur l age
  if (filtre[0] > 0) {
    horsesFilter = horsesFilter.filter(
      (horse) => horse.age > filtre[0] && horse.gender == param
    );
  }
  // Si pas de test sur l age on filtre que sur le sexe
  else {
    horsesFilter = horsesFilter.filter((horse) => horse.gender == param);
  }
  affichage(horsesFilter);
  filtre[1] = param;
}

function filter(param, value) {
  // Teste si on a deja un test sur le sexe
  if (filtre[1] != null) {
    horsesFilter = horsesFilter.filter(
      (horse) => eval(param) > value && horse.gender == filtre[1]
    );
  }
  // Si pas de test sur le sexe on filtre que sur l age
  else {
    horsesFilter = horsesFilter.filter((horse) => eval(param) > value);
  }
  affichage(horsesFilter);
  filtre[0] = value;
}

function reset() {
  horsesFilter = horses;
  filtre = [0, null];
  affichage(horsesFilter);
}
