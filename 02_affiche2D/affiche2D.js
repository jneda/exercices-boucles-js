/* 2/ Écrire la fonction printArray() pour afficher tous les éléments d'un
tableau à 2 dimensions en utilisant des boucles for imbriquées.
Le tableau :
Let myArray = [[1,2], [3,4],[5,6]] ;
Résultat : 1 2 3 4 5 6 */

function printArray(array) {
  // construction du html par concaténation
  let html = '<ul class="list" style="border: 2px solid #fcf;' +
    ' padding: 0;">';

  // boucle extérieure
  for (const arrayInterieur of array) {
    html +=
      '<li class="list"><ul class="list"' +
      'style="border: 2px solid #cfc; margin: 1em;">';

    // boucle intérieure
    for (const elt of arrayInterieur) {
      html += `<li class="list">${elt}</li>`;
    }

    html += "</ul>";
  }

  html += "</ul>";

  // on n'oublie pas d'écrire dans le document
  document.write(html);
}

// test

printArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);
printArray([
  ["coucou", "grand-mère", "!"],
  ["youpi"],
  "Karine alla en Irak".split(" "),
]);
printArray([]); // oups
