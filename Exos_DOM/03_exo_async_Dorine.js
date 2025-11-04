// Ex 1

function afficherMessage(message) {
    setTimeout(() => {
        console.log(message);
    }, 2000);
}
afficherMessage("Bonjour DWWM !");

// Ex 2

function etape1(callback) {
    setTimeout(() => {
        console.log("Étape 1 terminée");
        callback();
    }, 1000);
}

function etape2(callback) {
    setTimeout(() => {
        console.log("Étape 2 terminée");
        callback();
    }, 1000);
}

function etape3(callback) {
    setTimeout(() => {
        console.log("Étape 3 terminée");
        callback();
    }, 1000);
}

etape1(() => {
etape2(() => {
etape3(() => {
console.log("Toutes les étapes sont terminées !");
});
});
});

// Ex3
function telechargerFichier() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Fichier téléchargé avec succès"), 2000);
    });
}

telechargerFichier().then((message) => {
    console.log(message);
});

// Ex4
function telechargerFichier() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const reussite = Math.random() < 0.5;
            if (reussite) {
                resolve("Fichier téléchargé avec succès");
            }else{
                reject("Echec du téléchargement");
            }
        },2000);
    });
}

telechargerFichier()
    .then((message) => {
        console.log("✅" + message);
    })
    .catch((erreur) => {
        console.error("❌" + erreur);
    });


// Ex5
function etape_1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Étape 1 terminée");
        }, 1000);
    });
}

function etape_2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Étape 2 terminée");
        }, 1000);
    });
}

function etape_3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Étape 3 terminée");
        }, 1000);
    });
}
etape_1()
    .then((message1) => {
        console.log(message1);
        return etape_2();
    })
    .then((message2) => {
        console.log(message2);
        return etape_3();
    })
    .then((message3) => {
        console.log(message3);
        console.log("✅ Toutes les étapes sont terminées !");
    })
    .catch((erreur) => {
        console.error("❌ Une erreur est survenue :", erreur);
    });

// Ex6

function etapeA() {
    return new Promise((resolve) => setTimeout(() => resolve("Étape 1 terminée"), 1000));
}

function etapeB() {
    return new Promise((resolve) => setTimeout(() => resolve("Étape 2 terminée"), 1000));
}

function etapeC() {
    return new Promise((resolve) => setTimeout(() => resolve("Étape 3 terminée"), 1000));
}

async function affichage() {
    const msg1 = await etapeA();
    console.log(msg1);

    const msg2 = await etapeB();
    console.log(msg2);

    const msg3 = await etapeC();
    console.log(msg3);

}
affichage();

Ex7

function telechargerFichier() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const succes = Math.random() < 0.5;
            if (succes) {
                resolve("Fichier téléchargé avec succès");
            } else {
                reject("Échec du téléchargement");
            }
        }, 2000);
    });
}

async function lancerTelechargement() {
    try {
        const message = await telechargerFichier();
        console.log("✅ " + message);
    } catch (erreur) {
        console.error("❌ " + erreur);
    }
}

lancerTelechargement();


