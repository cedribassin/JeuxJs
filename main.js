let puissance4 =[];
const nbColonne = 7;
const nbLigne = 6;
const caractereJoueur1 ="x";
const caractereJoueur2="o";

/**
 * Fonction qui permet d'initialiser un tableau à vide en fonction d'un nombre de ligne et de colonne passées
 * en paramètre
 * @param {number} nbLigne 
 * @param {number} nbColonne 
 * @param {*} car 
 * @returns 
 */
const initialiserTableauVide = (nbLigne, nbColonne, car ='') =>{
    let tab =[];
    for(let i=0; i<nbLigne; i++){
        let ligne=[];
        for(let j=0; j<nbColonne; j++){
            ligne.push(car);
        }
        tab.push(ligne);
    }
    return tab;
}

/**
 * * Permet d'afficher le tableau de puissance 4
 * @param {Array<String>} tab 
 * @param {*} j1 caractère du joueur1
 * @param {*} j2 caractère du joueur2
 */
const afficherPuissance4=(tab, j1, j2)=>{
    for(let i=0; i<tab.length; i++){
        let ligne="";
        // tab[i] => correspond à une ligne et tab[i].length au nombre de cellules par ligne
        for(let j=0; j<tab[i].length; j++){
            ligne +="| ";
            if(tab[i][j] === 0){
                ligne += "_";// Si c'est vide on indique l'emplacement par un _
            } else if(tab[i][j] === 1){
                ligne += j1;
            } else if(tab[i][j] === 2){
                ligne += j2;
            }
            ligne+=" |";
        }
        console.log(ligne);
    }
}
puissance4 = initialiserTableauVide(nbColonne,nbLigne,0);
puissance4[3][3]=1;
puissance4[4][4]=2;

afficherPuissance4(puissance4, caractereJoueur1, caractereJoueur2);