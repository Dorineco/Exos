ex1()
ex2()
ex3()
ex4()
ex5()
ex6()
ex7()
ex8()
ex9()
direBonjour()

//Ex10//

function direBonjour() {
    console.log('Bonjour à tous');
}

//Ex1//

function ex1() {
    let prenom = "Léa";
    let age = 25;
    let ville = "Paris";
    direBonjour();
    console.log(`Je m'appelle ${prenom}, j'ai ${age} et j'habite à ${ville}`);
}


//Ex2//

function ex2() {
    let a = 12;
    let b = 5;
    direBonjour();
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
}


//Ex3//

function ex3() {
    let x = 10;
    let y = "10";
    direBonjour();
    console.log(x == y)
    console.log(x === y)
    console.log(x != y)
    console.log(x !== y)
}


//Ex4//

function ex4() {
    let Age = 42;
    if (Age < 18) {
        console.log("Tu es mineur");
    } else if (Age > 18) {
        direBonjour();
        console.log("Tu es adulte");
    } else {
        direBonjour();
        console.log("Tu es un sénior");
    }
}


//Ex5//

function ex5() {
    const temperature = 22
    direBonjour();
    (temperature >= 22) ? console.log('Il fait chaud.') : console.log('Il fait froid.');
}


//Ex6//

function ex6() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


//Ex7//

function ex7() {
    let compteur = 0;
    direBonjour();
    while (compteur < 5) {
        console.log("Compteur :", compteur);
        compteur++;
    }
}

//Ex8//


function ex8() {
    let fruits = ["pomme", "poire", "banane"];
    direBonjour();
    console.log(fruits.push("orange"));
    console.log(fruits.shift());
    console.log(fruits.length);
    for (let fruit of fruits) {
        console.log(fruit)
    }
}


//Ex9//

function ex9() {
    const nombres = [3, 8, 12, 5, 9];
    direBonjour();
    console.log("1er élément :", nombres[0] + " dernier élément :" + nombres[4]);
    console.log("Contient 8 :", nombres.includes(8));
    console.log("Index du nombre 5 :", nombres.indexOf(5));
    console.log("Tableau trié par sort :", nombres.sort());
    let TableauTrié = nombres.toSorted((a, b) => a - b);
    console.log(TableauTrié)
}


//Ex11//

function saluer(prenom) {
    console.log(`Bonjour, ${prenom} !`);
}

saluer("Nico");
saluer("Ben");
saluer("Théo");

//Ex12//
function addition(a, b) {
    return a + b;
}

//Ex13//
let prenoms = ["Léa", "Tom", "Inès", "Adam"];
function afficherListe() {
    prenoms.forEach(prenom => console.log(prenom));
}
afficherListe()

prenoms.push("Jessica")
afficherListe()

//Ex14//
function tableDeMultiplication(n) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);

    }
}
tableDeMultiplication(7)

//Ex Extras//
function pairImpair() {
    let nombre = 5;
    if (nombre % 2 === 0) {
        console.log(`${nombre} est pair.`);
    } else {
        console.log(`${nombre} est impair.`);
    }
}
pairImpair()

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

function rechercheElement() {
    let recherche = ["Alice", "Bob", "Charlie", "David"];
    console.log(recherche.includes("Charlie"));

}
rechercheElement();

function comparaisonTableau() {
    let comparaisonTaille = [12, 5, 8, 130, 44];
    let min = Math.min(...comparaisonTaille);
    let max = Math.max(...comparaisonTaille);
    console.log(`Le plus petit nombre est : ${min}`);
    console.log(`Le plus grand nombre est : ${max}`);
}
comparaisonTableau();

function inverseTableau() {
    let inverse = [12, 5, 8, 130, 44];
    console.log(inverse[4], inverse[3], inverse[2], inverse[1] + inverse[0]);

}
inverseTableau();

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