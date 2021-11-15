const cibleHTML = document.getElementById("cible");
const horses = [
  {
    age: 15,
    sexe: "M",
    name: "Eclair",
  },
  {
    age: 10,
    sexe: "M",
    name: "Rapido",
  },
  {
    age: 8,
    sexe: "M",
    name: "Tornado",
  },
  {
    age: 5,
    sexe: "F",
    name: "Apple",
  },
  {
    age: 3,
    sexe: "F",
    name: "Speedo",
  },
];

horses.map((horse) => {
  cibleHTML.innerHTML += `${horse.name} <br>
                         ${horse.age} <br>
                         ${horse.sexe} <br>
                         <hr>`;
});

const reset = () => {
  cibleHTML.innerHTML = "";
  horses.map((horse) => {
    cibleHTML.innerHTML += `${horse.name} <br>
                              ${horse.age} <br>
                              ${horse.sexe} <br>
                              <hr>`;
  });
};

function sexeMFilter() {
  cibleHTML.innerHTML = "";
  horses.filter((horse) => {
    horse.sexe === "M"
      ? (cibleHTML.innerHTML += `${horse.name} <br>
          ${horse.age} <br>
          ${horse.sexe} <br>
          <hr>`)
      : "";
  });
}

function sexeFFilter() {
  cibleHTML.innerHTML = "";
  horses.filter((horse) => {
    horse.sexe === "F"
      ? (cibleHTML.innerHTML += `${horse.name} <br>
             ${horse.age} <br>
             ${horse.sexe} <br>
             <hr>`)
      : "";
  });
}

function ageHoldFilter() {
  cibleHTML.innerHTML = "";
  horses.filter((horse) => {
    horse.age > 9
      ? (cibleHTML.innerHTML += `${horse.name} <br>
          ${horse.age} <br>
          ${horse.sexe} <br>
          <hr>`)
      : "";
  });
}

function ageYoungFilter() {
  cibleHTML.innerHTML = "";
  horses.filter((horse) => {
    horse.age < 10
      ? (cibleHTML.innerHTML += `${horse.name} <br>
             ${horse.age} <br>
             ${horse.sexe} <br>
             <hr>`)
      : "";
  });
}

// let computers = [
//   {
//     color: "blue",
//     size: 15,
//     manufacturer: "Asus",
//   },
//   {
//     color: "green",
//     size: 16,
//     manufacturer: "Asus",
//   },
//   {
//     color: "silver",
//     size: 17,
//     manufacturer: "Apple",
//   },
// ];

// function affichage() {
//   computers.map((computer) => {
//     cibleHTML.innerHTML += `${computer.color} <br>
//                                  ${computer.size} <br>
//                                  ${computer.manufacturer} <br>
//                                  <hr>`;
//   });
// }

// computers = computers.filter((computer) => computer.manufacturer == "Asus");
