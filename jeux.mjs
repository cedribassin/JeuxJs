import toolbox from "./toolbox.mjs";

const jeux = {
  puissance4: [],
  nbColonne: 7,
  nbLigne: 6,
  caractereJoueur1: "x",
  caractereJoueur2: "o",

  initialisation: function () {
    this.puissance4 = toolbox.initialiserTableauVide(
    this.nbColonne,
    this.nbLigne,
    0
    );
  },

  jouerEmplacement: function (joueur, ligne, colonne) {
    this.puissance4[ligne][colonne - 1] = joueur;
  },

  /**
   * Fonction qui permet d'afficher le tableau de puissance 4
   */
  afficherPuissance4: function () {
    for (let i = 0; i < this.puissance4.length; i++) {
      let ligne = "";
      for (let j = 0; j < this.puissance4[i].length; j++) {
        ligne += "| ";
        if (this.puissance4[i][j] === 0) {
          ligne += "_"; // Si c'est vide on indique l'emplacement par un _
        } else if (this.puissance4[i][j] === 1) {
          ligne += this.caractereJoueur1;
        } else if (this.puissance4[i][j] === 2) {
          ligne += this.caractereJoueur2;
        }
        ligne += " |";
      }
      console.log(ligne);
    }
  },

  /**
   * Fonction qui permet de vérifier si un joueur à aligné 4 jetons horizontalement
   * @param {Number} joueur
   * @returns
   */
  verificationLigne: function (joueur) {
    for (let i = this.nbLigne - 1; i >= 0; i--) {
      //nbColonne-3 car si aucun alignement jusqu'à la 5ème colonne => impossible d'en faire 4 à la suite
      for (let j = 0; j < this.nbColonne - 3; j++) {
        if (
          this.puissance4[i][j] === joueur &&
          this.puissance4[i][j + 1] === joueur &&
          this.puissance4[i][j + 2] === joueur &&
          this.puissance4[i][j + 3] === joueur
        ) {
          return true;
        }
      }
    }
    return false;
  },

  /**
   * Fonction qui permet de vérifier si un joueur à aligné 4 jetons verticalement
   * @param {Number} joueur
   * @returns
   */
  verificationColonne: function (joueur) {
    for (let j = 0; j < this.nbColonne; j++) {
      for (let i = this.nbLigne - 4; i >= 0; i--) {
        if (
          this.puissance4[i][j] === joueur &&
          this.puissance4[i + 1][j] === joueur &&
          this.puissance4[i + 2][j] === joueur &&
          this.puissance4[i + 3][j] === joueur
        ) {
          return true;
        }
      }
    }
    return false;
  },

  /**
   * Fonction qui permet de vérifier si un joueur à aligné 4 jetons en diagonale
   * @param {Number} joueur
   * @returns
   */
  verificationDiagonale: function (joueur) {
    // i>=3 car si pas d'alignement avant alors impossible d'en avoir 4 à la suite
    for (let i = this.nbLigne - 1; i >= 3; i--) {
      for (let j = 0; j < this.nbColonne; j++) {
        //On check en diagonale vers la droite
        if (
          this.puissance4[i][j] === joueur &&
          this.puissance4[i - 1][j + 1] === joueur &&
          this.puissance4[i - 2][j + 2] === joueur &&
          this.puissance4[i - 3][j + 3] === joueur
        )
          return true;
        //On check en diagonale vers la gauche
        if (
          this.puissance4[i][j] === joueur &&
          this.puissance4[i - 1][j - 1] === joueur &&
          this.puissance4[i - 2][j - 2] === joueur &&
          this.puissance4[i - 3][j - 3] === joueur
        )
          return true;
      }
    }
    return false;
  },
  /**
   * Fonction qui permet de vérifier si un joueur a gagné
   * @param {Number} joueur
   * @returns
   */
  verificationFinPartie: function (joueur) {
    if (
      this.verificationLigne(joueur) ||
      this.verificationColonne(joueur) ||
      this.verificationDiagonale(joueur)
    ) {
      return true;
    }
    return false;
  },
  /**
   *Fonction qui permet de trouver la 1ère ligne vide d'une colonne
   * @param {Number} colonne
   * @returns
   */
  retournerLigneCaseVideDeColonne: function (colonne) {
    //Pour parcourir la grille de haut en bas, on boucle en décrémentant
    for (let i = this.nbLigne - 1; i >= 0; i--) {
      //On vérifie si la ligne est vide
      if (this.verificationCaseVide(i, colonne)) return i;
    }
    //Si la case n'est pas vide on retourne -1
    return -1;
  },

  /**
   * Fonction qui permet de retourner si une colonne est vide (return true ou false)
   * @param {Number} line
   * @param {Number} column
   * @returns
   */
  verificationCaseVide: function (line, column) {
    //Quand une case est vide, elle est égale à 0
    return this.puissance4[line][column - 1] === 0; //column -1 pour pouvoir empiler les jetons
  },

  /**
   * Fonction qui permet de saisir une colonne
   * @returns
   */
  saisirUneColonne: function () {
    return parseInt(toolbox.saisirText("Quelle colonne choisissez-vous? "));
  },
};

export default jeux;
