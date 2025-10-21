//ex1()ex2()ex3()ex4()ex5()ex6()ex7()ex8()//
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
    }  else if (Age >18) {
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
    (temperature >=22) ? console.log('Il fait chaud.'): console.log('Il fait froid.');
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
    let TableauTrié = nombres.toSorted((a, b) => a - b);
    console.log(TableauTrié)
}    




