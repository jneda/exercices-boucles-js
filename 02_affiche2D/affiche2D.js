/* 2/ Écrire la fonction printArray() pour afficher tous les éléments d'un
tableau à 2 dimensions en utilisant des boucles for imbriquées.
Le tableau :
Let myArray = [[1,2], [3,4],[5,6]] ;
Résultat : 1 2 3 4 5 6 */

function printArray(array) {
  // construction du html par concaténation
  let html = '\n<ul class="list" style="border: 2px solid #fcf;' +
    ' padding: 0;">';

  // boucle extérieure
  for (const arrayInterieur of array) {
    html +=
      '\n <li class="list">\n  <ul class="list"' +
      ' style="border: 2px solid #cfc; margin: 1em;">';

    // boucle intérieure
    for (const elt of arrayInterieur) {
      html += `\n   <li class="list">${elt}</li>`;
    }

    html += "\n  </ul>\n <\li>";
  }

  html += "\n</ul>";

  // on n'oublie pas d'écrire dans le document
  return html;
}

// fonctions de log

function arrayLog(array) {
  // quelle ironie...
  const arraysTostr = [];
  for (let inner of array) {
    arraysTostr.push(`[${inner.join(", ")}]`);
  }
  return `[${arraysTostr.join(", ")}]`;

}

function log (x) {
  const resultat = printArray(x);
  const message = `${arrayLog(x)} => ${resultat}`;
  console.log(message);
  document.write(message);
}


// test

log([
  [1, 2],
  [3, 4],
  [5, 6],
]);
log([
  ["coucou", "grand-mère", "!"],
  ["youpi"],
  "Karine alla en Irak".split(" "),
]);
log([]);
