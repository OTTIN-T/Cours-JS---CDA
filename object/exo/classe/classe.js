//   Liste eleve, nom, prénom, sexe, age, classe, sport
//   filtrer
//   supprimer éléve (splice)
//   bonus form ajout éléve

let students = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    gender: "M",
    age: "16",
    sport: "football",
    class: "seconde",
  },
  {
    id: 2,
    firstName: "Rose",
    lastName: "Eude",
    gender: "F",
    age: "15",
    sport: "football",
    class: "seconde",
  },
  {
    id: 3,
    firstName: "Jeanne",
    lastName: "Pasquier",
    gender: "F",
    age: "17",
    sport: "basketball",
    class: "première",
  },
  {
    id: 4,
    firstName: "Christophe",
    lastName: "Moulin",
    gender: "M",
    age: "16",
    sport: "football",
    class: "première",
  },
  {
    id: 5,
    firstName: "Gregory",
    lastName: "Villemin",
    gender: "M",
    age: "18",
    sport: "natation",
    class: "terminale",
  },
  {
    id: 6,
    firstName: "Lucie",
    lastName: "Roger",
    gender: "F",
    age: "17",
    sport: "handball",
    class: "terminale",
  },
  {
    id: 7,
    firstName: "Lucie",
    lastName: "Roger",
    gender: "F",
    age: "17",
    sport: "handball",
    class: "seconde",
  },
];

const cibleHTML = document.getElementById("cible");
let filteredStudent = students;
let filterMemory = { gender: false, age: false, sport: false, class: false };

const showStudent = (tableStudent) => {
  cibleHTML.innerHTML = "";
  tableStudent.map((student) => {
    cibleHTML.innerHTML += `Nom: ${student.lastName}<br>
          Prénom: ${student.firstName}<br>
          Sexe: ${student.gender}<br>
          Age: ${student.age}<br>
          Sport: ${student.sport}<br>
          Classe: ${student.class}<br>
          <button onclick="deleteStudent(${student.id})">X</button>
          <hr>`;
  });
  filteredStudent = students;
};
showStudent(filteredStudent);

const filter = (param, value) => {
  filteredStudent = students.filter((student) => eval(param) === value);
};

const deleteStudent = (id) => {
  const findStudent = (student) => student.id === id;
  const findIndex = filteredStudent.findIndex(findStudent)
  filteredStudent.splice(findIndex, 1);
  showStudent(filteredStudent);
};

const filterGender = (param, value) => {
  // for (const filtre in filteredStudent) {
  //   console.log("filtre", filtre)
  //   // if (Object.hasOwnProperty.call(filterMemory, filtre)) {
  //   //   const element = filterMemory[filtre];
  //   //   console.log("element", element)
      
  //   // }
  // }
  filterMemory.gender = value;

 for (const filtre in filterMemory) {
  console.log('fsdsdfsdfsdf',`${filtre}: ${filterMemory[filtre]}`);

   if (Object.hasOwnProperty.call(filterMemory, filtre)) {
    //  console.log("filtre !!!!", filtre)
    //  console.log("filterMemory !!! iciiiiiiiiiii", filterMemory.gender)
     const element = filterMemory[filtre];
     
   }
 }

  if (filterMemory.gender != null && filterMemory.sport != null) {
    console.log("filterMemory !!!!", {...filterMemory})
    filteredStudent = students.filter(
      (student) =>
        eval(param) == value &&
        // student.age == filterMemory.age &&
        student.sport == filterMemory.sport
        // student.class == filterMemory.class
    );
  } else if (value == "F") {
    filter(param, value);
  } else if (value == "M") {
    filter(param, value);
  }
  showStudent(filteredStudent);
  console.log("filterMemory", filterMemory);
};

const filterAge = (param, value) => {
  if (
    filterMemory[0] != null ||
    filterMemory[2] != null ||
    filterMemory[3] != null
  ) {
    filteredStudent = students = filteredStudent.filter(
      (student) =>
        eval(param) === value ||
        student.gender === filterMemory[0] ||
        student.sport === filterMemory[2] ||
        student.class === filterMemory[3]
    );
  } else if (value === "15") {
    filter(param, value);
  } else if (value === "16") {
    filter(param, value);
  } else if (value === "17") {
    filter(param, value);
  } else if (value === "18") {
    filter(param, value);
  }
  showStudent(filteredStudent);
  filterMemory[1] = value;
};

const filterSport = (param, value) => {
  if (
    filterMemory[0] != null ||
    filterMemory[1] != null ||
    filterMemory[3] != null
  ) {
    filteredStudent = students.filter(
      (student) =>
        eval(param) === value ||
        student.gender === filterMemory[0] ||
        student.age === filterMemory[1] ||
        student.class === filterMemory[3]
    );
  } else if (value === "football") {
    filter(param, value);
  } else if (value === "basketball") {
    filter(param, value);
  } else if (value === "handball") {
    filter(param, value);
  } else if (value === "natation") {
    filter(param, value);
  }
  showStudent(filteredStudent);
  filterMemory[2] = value;
  console.log("filterMemory", filterMemory);
};

const filterClass = (param, value) => {
  if (
    filterMemory[0] != null ||
    filterMemory[1] != null ||
    filterMemory[2] != null
  ) {
    filteredStudent = students.filter(
      (student) =>
        eval(param) === value ||
        student.gender === filterMemory[0] ||
        student.age === filterMemory[1] ||
        student.sport === filterMemory[2]
    );
  } else if (value === "seconde") {
    filter(param, value);
  } else if (value === "première") {
    filter(param, value);
  } else if (value === "terminale") {
    filter(param, value);
  }
  showStudent(filteredStudent);
  filterMemory[3] = value;
};
