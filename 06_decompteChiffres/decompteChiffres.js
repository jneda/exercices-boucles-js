/* 6/ Écrivez la fonction digitCount() pour renvoyer le nombre de chiffres
dans un nombre donné en utilisant la boucle while.
Exemple :
digitCount(6547)
Résultat : 4 */

function digitCount(nombre) {
  // pour faire une boucle, on a besoin d'une chaîne de caractères
  if (nombre === undefined) {
    nombre = "";
  }
  nombre = nombre.toString();

  let compte = 0;
  // un peu bizarre mais on suppose que le but de l'exercice est
  // avant tout  d'écrire une boucle
  for (let i = 0; i < nombre.length; i++) {
    compte++;
  }

  return compte;
}

// tests

// utilitaires

const pStyle = (x) =>
  `<p style="min-height: 1.2em; background-color: #444;` +
  `padding: 0.2em 1em;">${x}</p>`;

function log (x) {
  const resultat = digitCount(x);
  let message = `${x} contient ${resultat} chiffre`;
  message += resultat > 1 ? "s" : "";
  console.log(message);
  document.write(pStyle(message));
}

//

log(6547);
log();
log(42);
log(0);
log(Math.pow(2, 64));