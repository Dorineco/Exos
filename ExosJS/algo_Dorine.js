
//Niveau 1 — Bases et logique//

//for(let i = 1; i <=25; i++){
// console.log(`\n function exo_${i}(){ \n //code here \n }`);//

//Ex1//
function ex1() {
    let prenom = "Léa";
    let age = 25;
    let ville = "Paris";
    direBonjour();
    console.log(`Je m'appelle ${prenom}, j'ai ${age} et j'habite à ${ville}`);
}

//Ex2//
function pairImpair() {
    let nombre = 5;
    if (nombre % 2 === 0) {
        console.log(`${nombre} est pair.`);
    } else {
        console.log(`${nombre} est impair.`);
    }
}
pairImpair()

//Ex3//
function comparateur() {
    let a = 32;
    let b = 25;
    if (a < b) {
        console.log(`${a} est plus petit que ${b}`);
    } else {
        console.log(`${a} est plus grand que ${b}`);
    }
}
comparateur()

//Ex4//
let N = 15;
let somme = 0;
for (let i = 1; i <= N; i++) {
    somme += i;
}
console.log(`La somme des entiers de 1 à ${N} est ${somme}`);

//Ex5//

function tableDeMultiplication(n) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);

    }
}
tableDeMultiplication(7)

//Niveau 2 — Boucles et tableaux//

//Ex6//
function moyenneTableau() {
    let tableauMoyenne = [12, 5, 8, 130, 44];
    let somme = 0;
    for (let nombre of tableauMoyenne) {
        somme += nombre;
    }
    let moyenne = somme / tableauMoyenne.length;
    console.log(`La moyenne est : ${moyenne}`);
}
moyenneTableau();

//Ex7/
function rechercheElement() {
    let recherche = ["Alice", "Bob", "Charlie", "David"];
    console.log(recherche.includes("Charlie"));

}
rechercheElement();

//Ex8//
function comparaisonTableau() {
    let comparaisonTaille = [12, 5, 8, 130, 44];
    let min = Math.min(...comparaisonTaille);
    let max = Math.max(...comparaisonTaille);
    console.log(`Le plus petit nombre est : ${min}`);
    console.log(`Le plus grand nombre est : ${max}`);
}
comparaisonTableau();

//Ex9//
function inverseTableau() {
    let inverse = [12, 5, 8, 130, 44];
    console.log(inverse[4], inverse[3], inverse[2], inverse[1] + inverse[0]);

}
inverseTableau();

//Ex10//
function voyelleCompteur() {
    let phrase = "Coder c'est super.";
    let voyelles = "aeiouyAEIOUY";
    let compteur = 0;

    for (let char of phrase) {
        if (voyelles.includes(char)) {
            compteur++;
        }
    }
    console.log(`Le nombre de voyelles dans votre phrase est : ${compteur}`);
}

voyelleCompteur();

//Niveau 3 — Fonctions et logique avancée//
//Ex11//
function palindrome(mot) {
    let motTest = mot.toLowerCase();
    let longueur = motTest.length;
    for (let i = 0; i < longueur / 2; i++) {
        if (motTest[i] !== motTest[longueur - 1 - i]) {
            return false;
        }
    }
    return true;

}

console.log(palindrome("radar"));
console.log(palindrome("Hello"));
console.log(palindrome("Kayak"));

//Ex12//
function factorielle(n) {
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}
console.log(factorielle(0));
console.log(factorielle(3));
console.log(factorielle(16));

//Ex13//
function fibonacci(n) {
    const suite = [];
    if (n <= 0) return suite;
    if (n >= 1) suite.push(0);
    if (n >= 2) suite.push(1);
    for (let i = 2; i < n; i++) {
        suite.push(suite[i - 1] + suite[i - 2]);
    }

    return suite;
}

console.log(fibonacci(10));

//Ex14//
function PlusLong(phrase) {
    let mots = phrase.split(` `);
    let max = ``;
    for (let mot of mots) {
        if (mot.length > max.length) {
            max = mot;
        };
    };
    return max;
};

let phrase = "Les développeurs adorent coder vite";
console.log(PlusLong(phrase));

//Ex15//
function premiers(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) return false;
    }
    console.log(premiers(7));
}

//Ex16//
function filtreNotes() {
    const notes = [12, 8, 17, 4, 15];
    const notesSup10 = notes.filter(note => note > 10);
    console.log(notesSup10);
};
filtreNotes();

//Ex17//

function gestionEleves() {
    const eleves = [
        { nom: "Alice", note: 12 },
        { nom: "Bob", note: 8 },
        { nom: "Charlie", note: 17 }
    ];

    let somme = 0;
    let meilleur = eleves[0];
    const moyenne = somme / eleves.length;

    for (let eleve of eleves) {
        somme += eleve.note;

        if (eleve.note > meilleur.note) {
            meilleur = eleve;
        }
    }
    console.log(`La moyenne générale est ${moyenne}`);
    console.log(`Le meilleur élève est ${meilleur.nom} avec ${meilleur.note} points`);

}
gestionEleves();

//Ex18//

function triEleves() {
    const eleves = [
        { nom: "Alice", note: 12 },
        { nom: "Bob", note: 8 },
        { nom: "Charlie", note: 17 }
    ];
    eleves.push({ nom: "David", note: 18 })
    eleves.sort((a, b) => b.note - a.note);

    console.log(eleves);
};

triEleves();

//Ex19//

const eleves = [
    { nom: "Alice", note: 12 },
    { nom: "Bob", note: 8 },
    { nom: "Charlie", note: 17 },
    { nom: "David", note: 18 }
];

function supprimerEleve(nom) {
    return eleves.filter(eleve => eleve.nom !== nom);
}

const elevesApresSuppression = supprimerEleve("Bob");
console.log(elevesApresSuppression);

supprimerEleve();

//Ex20//

const produits = [
    { nom: "Pomme", categorie: "Fruit" },
    { nom: "Carotte", categorie: "Légume" },
    { nom: "Banane", categorie: "Fruit" }
];

function regrouperParCategorie(liste) {
    return liste.reduce((acc, produit) => {
        const cat = produit.categorie;
        if (!acc[cat]) {
            acc[cat] = [];

        }
        acc[cat].push(produit.nom);
        return acc;
    }, {}
    );
}

console.log(regrouperParCategorie(produits));

//Ex21//

function anagrammes(mot1, mot2) {
    const tri1 = mot1.split('').sort().join('');
    const tri2 = mot2.split('').sort().join('');
    return tri1 === tri2;
}

console.log(anagrammes("chien", "niche"));
console.log(anagrammes("chat", "tache"));

//Ex22//

function compterMots(phrase) {
    const mots = phrase.trim().split(/\s+/);
    return mots.length;
}
console.log(compterMots("Les développeurs adorent coder vite"));
console.log(compterMots(" Bonjour tout le monde ! "));
compterMots("Les développeurs adorent coder vite")
compterMots("  Bonjour   tout le monde !  ")

//Ex23//

const mots = ["clavier", "developpeur", "serveur", "ordinateur", "souris"];
mots.sort((a, b) => a.length - b.length);

console.log(mots);

//Ex24//
function parenthesesBienFermees(chaine) {
    let compteur = 0;

    for (let char of chaine) {
        if (char === '(') {
            compteur++;
        } else if (char === ')') {
            compteur--;
            if (compteur < 0) return false;
        }
    }

    return compteur === 0;
}

console.log(parenthesesBienFermees("()()((()))"));
console.log(parenthesesBienFermees("(()"));
console.log(parenthesesBienFermees("())("));

//Ex25//

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mystere = Math.floor(Math.random() * 100) + 1;
let essais = 0;

console.log("Je pense à un nombre entre 1 et 100...");
rl.setPrompt("Devine : ");
rl.prompt();

rl.on('line', (reponse) => {
    const nombre = parseInt(reponse);
    essais++;

    if (nombre < mystere) {
        console.log("Plus grand !");
    } else if (nombre > mystere) {
        console.log("Plus petit !");
    } else {
        console.log(`Bravo ! Tu as trouvé ${mystere} en ${essais} essais.`);
        return rl.close();
    }

});
