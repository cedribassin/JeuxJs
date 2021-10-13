const readline = require("readline-sync");
let puissance4 = [];
const nbColonne = 7;
const nbLigne = 6;
const caractereJoueur1 = "x";
const caractereJoueur2 = "o";

/**
 * Fonction qui permet d'initialiser un tableau à vide en fonction d'un nombre de ligne et de colonne passées
 * en paramètre
 * @param {number} nbLigne
 * @param {number} nbColonne
 * @param {*} car
 * @returns
 */
const initialiserTableauVide = (nombreLigne, nombrebColonne, car = "") => {
  let tab = [];
  for (let i = 0; i < nombrebColonne; i++) {
    let ligne = [];
    for (let j = 0; j < nombreLigne; j++) {
      ligne.push(car);
    }
    tab.push(ligne);
  }
  return tab;
};

/**
 * * Permet d'afficher le tableau de puissance 4
 * @param {Array<String>} tab
 * @param {*} j1 caractère du joueur1
 * @param {*} j2 caractère du joueur2
 */
const afficherPuissance4 = (tab, j1, j2) => {
  for (let i = 0; i < tab.length; i++) {
    let ligne = "";
    // tab[i] => correspond à une ligne et tab[i].length au nombre de cellules par ligne
    for (let j = 0; j < tab[i].length; j++) {
      ligne += "| ";
      if (tab[i][j] === 0) {
        ligne += "_"; // Si c'est vide on indique l'emplacement par un _
      } else if (tab[i][j] === 1) {
        ligne += j1;
      } else if (tab[i][j] === 2) {
        ligne += j2;
      }
      ligne += " |";
    }
    console.log(ligne);
  }
};

/**
 * Fonction qui permet de saisir une colonne
 * @returns
 */
const saisirUneColonne = () => {
  return parseInt(readline.question("Quelle colonne choisissez-vous? "));
};

/**
 * Fonction qui permet de retourner si une colonne est vide (return true ou false)
 * @param {Number} line 
 * @param {Number} column 
 * @returns 
 */
const verificationCaseVide = (line, column) => {
  //Quand une case est vide, elle est égale à 0
  return puissance4[line][column - 1] === 0; //column -1 pour pouvoir empiler les jetons
};

/**
 *Fonction qui permet de trouver la 1ère ligne vide d'une colonne
 * @param {Number} colonne
 * @returns 
 */
const retournerLigneCaseVideDeColonne = (colonne) => {
  //Pour parcourir la grille de haut en bas, on boucle en décrémentant
  for (let i = nbLigne - 1; i >= 0; i--) {
    //On vérifie si la ligne est vide
    if (verificationCaseVide(i, colonne)) return i;
  }
  //Si la case n'est pas vide on retourne -1
  return -1;
};

const verificationFinPartie = () => {
  return false;
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
    colonne = saisirUneColonne();
    ligneVide = retournerLigneCaseVideDeColonne(colonne);
  }
  puissance4[ligneVide][colonne - 1] = joueur;
  afficherPuissance4(puissance4, caractereJoueur1, caractereJoueur2);
  return verificationFinPartie();
};

puissance4 = initialiserTableauVide(nbColonne, nbLigne, 0);
afficherPuissance4(puissance4, caractereJoueur1, caractereJoueur2);

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
