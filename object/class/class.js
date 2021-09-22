import Beer from "./beer.js";

let newBeer = new Beer("La chouffe", "blonde", 8.0);
console.log("newBeer", newBeer.getNom());
delete newBeer.nom;
console.log("newBeer", newBeer.getNom());

newBeer = null;
console.log("newBeer", newBeer);

newBeer = new Beer('despe','exotique',7 )
console.log(newBeer)

newBeer.nom = 'Corona'
console.log(newBeer)