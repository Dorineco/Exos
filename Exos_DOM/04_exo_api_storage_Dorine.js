//récupère le mot au click
const btn = document.getElementById('searchBtn');
const filmContainer = document.getElementById('film-container');
const storageContent = document.getElementById('storage-content');

btn.addEventListener('click', () => {
    const query = document.getElementById('filmID').value;

    //Appel API
    fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem(query, JSON.stringify(data.description)); //Stockage dans le localStorage
            const films = JSON.parse(localStorage.getItem(query)); //récupère localStorage


            //Affichage du film
            films.forEach(film => {
                const filmDiv = document.createElement('div');
                filmDiv.classList.add('film');
                filmDiv.innerHTML = `<h3>${film['#TITLE']}</h3><img src="${film['#IMG_POSTER']}" width="100">`;
                filmContainer.appendChild(filmDiv);
                console.log(film['#IMDB_POSTER']);

            });
        })
})
//Création du lien vers les détails du film

filmDiv.addEventListener('click', () => {showFilmDetails(film['#IMDB_ID'])});


    function afficherFilmDetails(imdbId) {
    fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${imdbId}`)
        .then(response => response.json())
        .then(data => {const film = data.short;  
    afficherFilmDetails(film);
    });


function FilmDetailsshort(film) {
    const detailsContainer = document.getElementById('details');
    detailsContainer.innerHTML = `
        <h3>${film.name}</h3>
        <img src="${film.image}" alt="${film.name}" width="200">
        <p><strong>Description :</strong> ${film.description}</p>
        <p><a href="${film.url}" target="_blank">Voir sur IMDb</a></p>`;

}