// Méthode avec affichage - logique
let dS=0;
let secondes=0;
let dM=0;
let minutes=0;

const increment=() => {
	secondes+=1;
	if(secondes<10) {
	} else if(secondes<59) {
		dS="";
	} else {
		secondes=0;
		dS=0;
		if(minutes<10) {
			minutes+=1;
		} else {
			dM="";
		}
	}
	playTime.innerHTML=`${dM}${minutes}:${dS}${secondes}`;
 };

 const clearTimer = () => {

	playTime.innerHTML="00:00";

};

 // Méthode avec affichage - format date


// Méthode sans affichage
// let compteur=0;
//const increment=() => {
//	playTime.innerHTML=compteur;
//	compteur+=1;
//};