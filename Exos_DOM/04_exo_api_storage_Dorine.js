//récupère le mot au click
const btn = document.getElementById('searchBtn');
const filmContainer = document.getElementById('film-container');
const storageContent = document.getElementById('storage-content');

btn.addEventListener('click', () => {
    const query = document.getElementById('FilmID').value;

    //Appel API
    fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem(query, JSON.stringify(data.description)); //Stockage dans le localStorage
            const films = JSON.parse(localStorage.getItem(query)); //fetch Local storage


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

import { of } from 'rxjs';
of('Données').subscribe(data => console.log(data));



















