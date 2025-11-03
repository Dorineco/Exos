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
