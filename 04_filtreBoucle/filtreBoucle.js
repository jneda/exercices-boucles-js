/* 4/ Écrivez la fonction deleteElement() qui supprime toutes les occurrences d'un
élément dans un tableau donné.
Exemple :
Let myArray = [23,56,4,78,5,63,45,210,56]
deleteElement(myArray, 56) // [23, 4, 78, 5, 63, 45, 210] */

// utilitaire

const pStyle = (x) =>
  `<p style="min-height: 1.2em; background-color: #444;` +
  `padding: 0.2em 1em;">${x}</p>`;

//

function deleteElement(array, elementCible) {
  // on construit un nouvel array
  const resultat = [];

  // on parcourt l'array initial
  for (const element of array) {
    // si l'élément actuel n'est pas l'élément à enlever, on le stocke
    if (element !== elementCible) {
      resultat.push(element);
    }
  }

  // on renvoie
  return resultat;
}

// tests

function log(arr, elt) {
  const result = deleteElement(arr, elt);
  console.log(`[${arr}] - ${elt} => [${result}]`);
  document.write(pStyle(result));
}

log([23, 56, 4, 78, 5, 63, 45, 210, 56], 56);
log("karine alla en irak", "a");
log([], "toto");
log(["toto"], 42);
log(["toto"], "toto");
