/* 
Activité : gestion des contacts
*/
console.log("Bienvenue dans le gestionaire de contact \n 1: Lister les contacts \n 2: Ajouter un contact \n 3: Quitter ");

var contacts = [];

contacts [0]= {
    nom:  "Levisse",
    prenom: "Carole"
}
contacts [1]= {
    nom: "Nelsonne",
    prenom: "Melodie"
}
  var choix = Number(prompt("Choisissez une option"));
while (choix !==3) {
   
    if (choix === 1) {
        contacts.forEach(function (contacts) {
        console.log(contacts.nom, contacts.prenom);
       
        });
        var choix = Number(prompt("Choisissez une option"));
        
    } else if (choix === 2) {
        var ajouter= {};
        var nouveauPrenom = prompt("Saisissez le prénom");
        ajouter.prenom= nouveauPrenom;
        var nouveauNom = prompt("Saisissez le nom");
        ajouter.nom= nouveauNom;
        contacts.push(ajouter);
        var choix = Number(prompt("Choisissez une option"));
    } else {
        break;
    }
}