//ex1//
const animal = {
    nom: "Nala",
    type: "chien",
    age: 4,
    description() {
        console.log(`${this.nom} est un ${this.type} de ${this.age} ans.`);
    }
};
animal.description();

//ex2//
const produits = [
    { nom: "Nokia 3210", prix: 2600, stock: 2 },

];
produits.forEach(produit => {
    console.log(`${produit.nom} coûte ${produit.prix}, ${produit.stock} disponibles.`);
})

//ex3//
class Voiture {
    constructor(marque, modèle, année) {
        this.marque = marque;
        this.modèle = modèle;
        this.année = année;
    }
    info() {
        console.log(`${this.marque} ${this.modèle} ${this.année}`);
    }

}
const maVoiture = new Voiture("Volvo", "XC70", 2005);
maVoiture.info();

//exemple//
