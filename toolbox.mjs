//Fonctions génériques
import readline from "readline-sync";
const toolbox = {
  /**
   * Fonction qui permet d'initialiser un tableau à vide en fonction d'un nombre de ligne et de colonne passées
   * en paramètre
   * @param {Number} nbLigne
   * @param {Number} nbColonne
   * @param {*} car
   * @returns
   */
  initialiserTableauVide: function (nombreLigne, nombrebColonne, car = "") {
    let tab = [];
    for (let i = 0; i < nombrebColonne; i++) {
      let ligne = [];
      for (let j = 0; j < nombreLigne; j++) {
        ligne.push(car);
      }
      tab.push(ligne);
    }
    return tab;
  },
  /**
   * Fonction qui permet de renvoyer du texte saisi au clavier
   * @param {String} txt
   * @returns
   */
  saisirText: function (txt) {
    return readline.question(txt);
  },
};

export default toolbox;
