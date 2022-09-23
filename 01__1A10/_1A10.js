/* 1/ Ecrire une fonction printNumbers() pour afficher les nombres de 1 à 10
La fonction utilise la boucle for.
Résultat : 1 2 3 4 5 6 7 8 9 10 */

function printNumbers() {
  // on construit le HTML par concaténation
  let html = '<ul class="list">';

  // la boucle
  for (let i = 1; i < 11; i++) {
    html += `<li class="list">${i}</li>`;
  }

  html += "</ul>";
  console.log(html);

  // on écrit dans le document
  document.write(html);
}

printNumbers();