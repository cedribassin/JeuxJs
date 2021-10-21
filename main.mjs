
let joueurCourant = 1;
const tour = document.querySelector("#tour");
let finJeu = false; 
const alert = document.querySelector(".alert");

const gestionFinPartie = (joueur) => {
  finJeu=true;
  alert.innerHTML=`Fin de la partie, félicitation joueur ${joueur}`;
  alert.classList.remove("d-none");
}

const jouerCase = (colonne) => {
  if(!finJeu){
    //On récupère la ligne
    ligneVide = jeux.retournerLigneCaseVideDeColonne(colonne);
    //La condition permet d'arrêter d'empiler un jeton dans une colonne pleine
    if(ligneVide !== -1){
      jeux.jouerEmplacement(joueurCourant, ligneVide, colonne);
      jeux.afficherPuissance4();
      if(jeux.verificationFinPartie(joueurCourant)){
        gestionFinPartie(joueurCourant);
      }
      if(joueurCourant===1){
        joueurCourant=2;
        tour.textContent="Tour du joueur 2";
        tour.style.backgroundColor="#F5D12D";
        tour.style.color="black";

      } else {
        joueurCourant=1;
        tour.textContent="Tour du joueur 1";
        tour.style.backgroundColor="#F5392D";
        tour.style.color="black";
      }
    }
  }
  /*  let colonne = -1;
  let ligneVide = -1;
  while (ligneVide === -1 || colonne <= 0 || colonne > 7) {
    console.log("Choisir une colonne qui à un emplacement vide");
    colonne = jeux.saisirUneColonne();
    ligneVide = jeux.retournerLigneCaseVideDeColonne(colonne);
  }
  jeux.jouerEmplacement(joueur, ligneVide, colonne);
  jeux.afficherPuissance4();
  return jeux.verificationFinPartie(joueur); */
};


jeux.initialisation();
jeux.afficherPuissance4();

