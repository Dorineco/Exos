//exo1
// La déclaration de classe
class Personne {
    // Le constructeur
    constructor(prenom, age) {
        this.prenom = prenom;
        this.age = age;
    }
    // Ajouter une méthode
    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.prenom} et j'ai ${this.age} ans.`);
    }
}
// Créer un objet (instance)
const p1 = new Personne("Alice", 25);
// Appeler la méthode
p1.sePresenter();

//exo2
// La déclaration de classe
// Le constructeur
// Ajouter une méthode
// Créer un objet (instance)
// Appeler la méthode
class Voiture {
    constructor(marque, modele, kilometrage) {
        this.marque = marque;
        this.modele = modele;
        this.kilometrage = kilometrage;
    }
    rouler(distance) {
        this.kilometrage += distance;
    }
    afficherInfos() {
        console.log(`Voiture : ${this.marque} ${this.modele} ${this.kilometrage} km`)
    }
}
const voiture1 = new Voiture("Renault", "Clio", 15000);
voiture1.rouler(200);
voiture1.afficherInfos();

// Exo3
// La déclaration de classe
// Le constructeur
// Ajouter une méthode
// Créer un objet (instance)
// Appeler la méthode
class Employe {
    constructor(nom, poste, salaire) {
        this.nom = nom;
        this.poste = poste;
        this.salaire = salaire;
    }
    afficherSalaire() {
        console.log(`${this.nom} gagne ${this.salaire} € en tant que ${this.poste}.`);
    }
}

class Manager extends Employe {
    constructor(nom, poste, salaire, equipe) {
        //appel du constructeur parent//
        super(nom, poste, salaire);
        this.equipe = equipe;
    }
    afficherEquipe() {
        console.log(`Equipe de ${this.nom} : ${this.equipe.join(", ")}`);
    }

}
const m1 = new Manager("Claire", "Chef de projet", 4000, ["Léo", "Nina", "Sam"]);
m1.afficherSalaire(); // Claire gagne 4000 € en tant que Chef de projet.
m1.afficherEquipe();  // Équipe de Claire : Léo, Nina, Sam

//exo4//

class CompteBancaire {
    constructor() {
        this._solde = 0;
    }
    deposer(montant) {
        if (montant > 0) {
            this._solde += montant;
            console.log(`Dépôt de ${montant} € effectué.`);
        }
    }
    retirer(montant) {
        if (montant > 0 && montant <= this._solde) {
            this._solde -= montant;
            console.log(`Retrait de ${montant} € effectué.`);
        } else if (montant > this._solde) {
            console.log("Solde insuffisant !");
        } else {
            console.log("Le montant du retrait doit être positif !");
        }
    }

    get solde() {
        return this._solde;
    }
}
const c1 = new CompteBancaire();
c1.deposer(100);   // Dépôt de 100 € effectué.
c1.retirer(30);    // Retrait de 30 € effectué.
console.log(c1.solde); // 70
