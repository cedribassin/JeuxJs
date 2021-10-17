
/**
 * Fonction qui permet à un joueur de jouer une case, elle retourne true si le joueur a gagné
 * @param {Number} joueur indique s'il s'agit du joueur 1 ou 2
 * @returns
 */
/* const jouerCase = (joueur) => {
  let colonne = -1;
  let ligneVide = -1;
  while (ligneVide === -1 || colonne <= 0 || colonne > 7) {
    console.log("Choisir une colonne qui à un emplacement vide");
    colonne = jeux.saisirUneColonne();
    ligneVide = jeux.retournerLigneCaseVideDeColonne(colonne);
  }
  jeux.jouerEmplacement(joueur, ligneVide, colonne);
  jeux.afficherPuissance4();
  return jeux.verificationFinPartie(joueur);
};
 */

jeux.initialisation();
jeux.afficherPuissance4();

