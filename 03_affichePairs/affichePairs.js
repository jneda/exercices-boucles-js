/* 3/ Écrivez la fonction printEven() qui affiche tous les nombres pairs d'un
tableau en utilisant les boucles for et l'opérateur '%'.
Exemple :
Let myArray = [12, 23, 13, 45, 22, 48, 66, 100]
Résultat : 12, 22, 48, 66, 100 */

// utilitaires

const estPair = (x) => x % 2 === 0;

const pStyle = (x) =>
  `<p style="min-height: 1.2em; background-color: #444;` +
  `padding: 0.2em 1em;">${x}</p>`;
  
//

function printEven(nombres) {
  // utilisons un array pour changer
  let pairs = [];
  for (const n of nombres) {
    // boucle for ... of
    if (estPair(n)) {
      pairs.push(n);
    }
  }
  document.write(pStyle(pairs));
}

// tests

function log(x) {
  console.log(`${x} => ${printEven(x)}`);
}

log([12, 23, 13, 45, 22, 48, 66, 100]);
log([]);
log([1, 3, 5, 7, 9, 11]);
log("123456789".split("").map((car) => parseInt(car)));
