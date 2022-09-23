/* 5/ Écrire la fonction numPower()  pour trouver la puissance d'un nombre
en utilisant la boucle for. La fonction reçoit 2 arguments en paramètres
et retourne le résultat.
Exemple :
numPower(4,3)  
Résultat : 64 */

// utilitaire

const pStyle = (x) =>
  `<p style="min-height: 1.2em; background-color: #444;` +
  `padding: 0.2em 1em;">${x}</p>`;

//

// on multiplie a par lui-même b - 1 fois
// (pas besoin de multplier par 1)

function numPower(a, b) {
  // on gère b = 0
  if (b === 0) {
    return 1;
  }

  // b > 1
  if (b > 1) {
    const facteur = a;
    for (let i = 0; i < b - 1; i++) {
      a *= facteur;
    }
  }

  // b < 0
  if (b < 0) {
    // on gère a = 0
    if (a === 0) {
      return Infinity;
    }

    const facteur = a;
    for (let i = b; i <= 0; i++) {
      a /= facteur;
    }
  }

  // si b = 1 : cas par défaut
  return a;
}

// tests

function log (a, b) {
  const message = `${a} puissance ${b} => ${numPower(a, b)}`;
  console.log(message);
  document.write(pStyle(message));
}

log(4, 3);
log(4, -1);
log(4, -2);
log(4, 0);
log(0, 4);
log(0, -4)
log(2, 16);
log(2, 32);