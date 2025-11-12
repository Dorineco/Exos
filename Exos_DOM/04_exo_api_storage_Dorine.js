const btn = document.getElementById('searchBtn');
const filmContainer = document.getElementById('film-container');

btn.addEventListener('click', () => {
    const query = document.getElementById('filmId').value.trim();

    fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            const films = data.description;
            console.log(films, "affiche");

            localStorage.setItem(query, JSON.stringify(films));

            films.forEach(film => {
                const filmDiv = document.createElement('div');
                filmDiv.classList.add('film');
                filmDiv.innerHTML = `
                    <h3>${film['#TITLE']}</h3>
                    <img src="${film['#IMG_POSTER'] || ''}" width="100" alt="${film['#TITLE']}">
                `;
                filmDiv.addEventListener('click', () => {
                    afficherFilmDetails(film['#IMDB_ID']);
                });
                filmContainer.appendChild(filmDiv);
            });
        })
        .catch(error => console.error("Erreur lors de la recherche :", error));
});


// Fonction pour aller chercher les détails d’un film
function afficherFilmDetails(imdbId) {
    console.log("afficher", imdbId)
    fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${imdbId}`)
        .then(response => response.json())
        .then(data => {
            const film = data.short;
            afficherFilmDetailsHTML(film);
        })
        .catch(error => console.error("Erreur lors de la récupération des détails :", error));
}

// Fonction d’affichage des détails
function afficherFilmDetailsHTML(film) {
    const detailsContainer = document.getElementById('details');
    detailsContainer.innerHTML = `
        <h3>${film.name}</h3>
        <img src="${film.image}" alt="${film.name}" width="200">
        <p><strong>Description :</strong> ${film.description}</p>
        <p><a href="${film.url}" target="_blank">Voir sur IMDb</a></p>
    `;
}
















































