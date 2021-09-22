var test1 = 'toto1';
const test2 = 'toto2';
console.log("test2 s'affiche dans le scope", test2);
// const test2 = 'toto'; //const déjà déclaré
function testFunction() {
     let test3 = 'toto3';
     console.log("test3 s'affiche dans le scope", test3);
     console.log("test2 s'affiche dans le scope", test2);
     var test4 = 'toto4'
     console.log("test4 dans le scope de la function", test4)
};
testFunction();
console.log("test1 s'affiche dans le scope", test1);
console.log("test3 hors scope ne s'affiche pas", test3);
console.log("test4 hors scope de la function", test4)
