/* 7/ Écrire un programme pour trouver le plus grand nombre dans un tableau
donné.
Exemple :
let myArray = [2, 45, 3, 67, 34, 567, 34, 345, 123] ;
Résultat : 567 */

function max(array) {
  // préservons-nous de mauvaises surprises
  array = array.map(elt => parseInt(elt));

  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    const actuel = array[i];
    if (actuel > max) {
      max = actuel;
    }
  }

  return max;
}

// utilitaires de log

const pStyle = (x) =>
  `<p style="min-height: 1.2em; background-color: #444;` +
  `padding: 0.2em 1em;">${x}</p>`;

function log (x) {
  const message = `[${x}] max : ${max(x)}`;
  console.log(message);
  document.write(pStyle(message));
}

// tests

log([2, 45, 3, 67, 34, 567, 34, 345, 123]);
log([]);
log([-66, -42, 42, 66]);
log([-66, -42, -42, -66]);
log(["-66", "-42"]);
