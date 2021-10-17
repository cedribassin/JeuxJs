import jeux from "./jeux.mjs";
import toolbox from "./toolbox.mjs";


  /**
   * Fonction qui permet de choisir le caractère utilisé pour chaque joueur
   * @param {String} joueur
   * @returns
   */
   const choixCaractere = (joueur) => {
    let txt = `Veuillez choisir le caractere du joueur ${joueur}: `;
    return toolbox.saisirText(txt);
  };

jeux.caractereJoueur1 = choixCaractere(1);
jeux.caractereJoueur2 = choixCaractere(2);

const presentation = () => {
  let txt = "******************************************************** \n";
  txt += "***********Bienvenue sur le jeu du puissance 4********** \n";
  txt += "******************************************************** \n";
  return console.log(txt);
};

/**
 * Fonction qui permet à un joueur de jouer une case, elle retourne true si le joueur a gagné
 * @param {Number} joueur indique s'il s'agit du joueur 1 ou 2
 * @returns
 */
const jouerCase = (joueur) => {
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


presentation();
jeux.initialisation();
jeux.afficherPuissance4();

while (true) {
  if (jouerCase(1)) {
    console.log("J1 à gagner");
    break;
  }
  if (jouerCase(2)) {
    console.log("J2 à gagner");
    break;
  }
}
