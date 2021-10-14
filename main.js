const readline = require("readline-sync");
let puissance4 = [];
const nbColonne = 7;
const nbLigne = 6;

/**
 * Fonction qui permet de renvoyer du texte saisi au clavier
 * @param {String} txt
 * @returns
 */
 const saisirTexte = (txt) => {
  return readline.question(txt);
};

/**
 * Fonction qui permet de choisir le caractère utilisé pour chaque joueur
 * @param {String} joueur 
 * @returns 
 */
const choixCaractere = (joueur) => {
  let txt = `Veuillez choisir le caractere du joueur ${joueur}: `;
  return saisirTexte(txt);
};


const caractereJoueur1 = choixCaractere(1);
const caractereJoueur2 = choixCaractere(2);

/**
 * Fonction qui permet d'initialiser un tableau à vide en fonction d'un nombre de ligne et de colonne passées
 * en paramètre
 * @param {Number} nbLigne
 * @param {Number} nbColonne
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
  return parseInt(saisirTexte("Quelle colonne choisissez-vous? "));
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

/**
 * Fonction qui permet de vérifier si un joueur à aligné 4 jetons horizontalement
 * @param {Number} joueur
 * @returns
 */
const verificationLigne = (joueur) => {
  for (let i = nbLigne - 1; i >= 0; i--) {
    //nbColonne-3 car si aucun alignement jusqu'à la 5ème colonne => impossible d'en faire 4 à la suite
    for (let j = 0; j < nbColonne - 3; j++) {
      if (
        puissance4[i][j] === joueur &&
        puissance4[i][j + 1] === joueur &&
        puissance4[i][j + 2] === joueur &&
        puissance4[i][j + 3] === joueur
      ) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Fonction qui permet de vérifier si un joueur à aligné 4 jetons verticalement
 * @param {Number} joueur
 * @returns
 */
const verificationColonne = (joueur) => {
  for (let j = 0; j < nbColonne; j++) {
    for (let i = nbLigne - 4; i >= 0; i--) {
      if (
        puissance4[i][j] === joueur &&
        puissance4[i + 1][j] === joueur &&
        puissance4[i + 2][j] === joueur &&
        puissance4[i + 3][j] === joueur
      ) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Fonction qui permet de vérifier si un joueur à aligné 4 jetons en diagonale
 * @param {Number} joueur
 * @returns
 */
const verificationDiagonale = (joueur) => {
  // i>=3 car si pas d'alignement avant alors impossible d'en avoir 4 à la suite
  for (let i = nbLigne - 1; i >= 3; i--) {
    for (let j = 0; j < nbColonne; j++) {
      //On check en diagonale vers la droite
      if (
        puissance4[i][j] === joueur &&
        puissance4[i - 1][j + 1] === joueur &&
        puissance4[i - 2][j + 2] === joueur &&
        puissance4[i - 3][j + 3] === joueur
      )
        return true;
      //On check en diagonale vers la gauche
      if (
        puissance4[i][j] === joueur &&
        puissance4[i - 1][j - 1] === joueur &&
        puissance4[i - 2][j - 2] === joueur &&
        puissance4[i - 3][j - 3] === joueur
      )
        return true;
    }
  }
  return false;
};

/**
 * Fonction qui permet de vérifier si un joueur a gagné
 * @param {Number} joueur
 * @returns
 */
const verificationFinPartie = (joueur) => {
  if (
    verificationLigne(joueur) ||
    verificationColonne(joueur) ||
    verificationDiagonale(joueur)
  ) {
    return true;
  }
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
  return verificationFinPartie(joueur);
};

const presentation = () => {
  let txt = "******************************************************** \n";
  txt += "***********Bienvenue sur le jeu du puissance 4********** \n";
  txt += "******************************************************** \n";
  return txt;
};


console.log(presentation());

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
