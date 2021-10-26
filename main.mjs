
let joueurCourant = 1;
const tour = $('#tour');
let finJeu = false; 
const alert = $('.alert');
let j1 = $('#j1');
let j2 =$('#j2');
let pointJ1=0;
let pointJ2=0;


const gestionFinPartie = (joueur) => {
  finJeu=true;
  let contentAlert=`Fin de la partie, félicitation joueur ${joueur}`;
  contentAlert+='<button type="button" class="btn btn-secondary mx-5" onClick="initialiserTableau()">Recommencer</button>';
  alert.html(contentAlert);
  alert.removeClass("d-none");
  if(joueurCourant===1){
    pointJ1++;
  }else{
    pointJ2++;
  }
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
        tour.html("Tour du joueur 2");
        tour.addClass('background-color="#F5D12D"');
        tour.addClass('color="black"');

      } else {
        joueurCourant=1;
        tour.html("Tour du joueur 1");
        tour.addClass('background-color="#F5392D"');
        tour.addClass('color="black"');
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
const initialiserTableau = ()=>{
  finJeu = false;
  alert.addClass("d-none");
 let contentJ1 ='<img class="rounded-circle" style="width:75px; height:75px;" src="./images/j1.png"/></br>';
  contentJ1+=pointJ1;
  j1.html(contentJ1);

  let contentJ2 ='<img class="rounded-circle" style="width:75px; height:75px;" src="./images/j2.png"/></br>';
  contentJ2+=pointJ2;
  j2.html(contentJ2);

  jeux.initialisation();
  jeux.afficherPuissance4();  
}

initialiserTableau();



