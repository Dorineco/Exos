const nomUtilisateur = document.getElementById(`username`);
const btnSubmit = document.getElementById(`submit`);

btnSubmit.addEventListener(`click`, () => {
    // Enregistrez le nom d’utilisateur dans le `sessionStorage`
    const register = nomUtilisateur.value.trim();
    sessionStorage.setItem("nom", register);

    // Créez un `cookie` contenant la date de création (par exemple : dateCreation=...)//
    let dateCreation = new Date();
    document.cookie = `dateCreation=${dateCreation}; path=/; SameSite=Lax;`;
    //Affichez le nom d’utilisateur (récupéré depuis sessionStorage)//
    let nomUser = sessionStorage.getItem('nom');
    console.log(`Le nom d'utilisateur est ${nomUser}`);
    //Affichez la date de création du cookie (récupérée depuis document.cookie)//
    console.log("Cookie créé :", document.cookie);
});

//Ajoutez deux boutons supplémentaires : → supprime le cookie

const btnCookie = document.getElementById('cookie');
const btnSession = document.getElementById('session');

btnCookie.addEventListener(`click`, () => {
    document.cookie = "dateCreation=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    console.log('Cookie effacé');
});

//→ vide le sessionStorage//

btnSession.addEventListener('click', () => {
    sessionStorage.removeItem('nom');
    console.log('sessionStorage vidé');
});











