//declarationde la variable
let challenge =  '30 Jours De JavaScript';
//le log pour afficher
console.log(challenge);
//rendre to le text en majiscule
console.log(challenge.toUpperCase());
//rendre le text en miniscule
console.log(challenge.toLocaleLowerCase());
//coupper le premier mot qui correspond a 30
console.log(challenge.substring(0, 2));
// decouper les mot jours de javascrypt
console.log(challenge.slice(2));
//verifier si la chaine contien  le mot javascript Scrypt
console.log(challenge.includes('Scrypt'));

//diviser la chaine en tableau
console.log(challenge.split(''));
//en utulisan un espasse
console.log(challenge.split(' '));
//changer en tableau 
let tableau = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(tableau.split(', '));
//remplacer
const chal = '30 Jours De JavaScript';
console.log(chal.replace('JavaScript', 'python'));
//trouver la lettre correspondante a l'index
console.log(challenge.charAt(15));
//trouver l'index de la lettre
console.log(challenge.charCodeAt('J'));
// determiner la position de 
console.log(challenge.indexOf());
