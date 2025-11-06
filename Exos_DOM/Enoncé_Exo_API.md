Utilisation API et Stockage client
exercice a faire avec l'API : https://imdb.iamidiotareyoutoo.com

parametre	Type	Description
q	string	Enter a word or phrase to search on (Search Query)
tt	string	Enter IMDb ID to display only one detailed result
Enoncé :
Dans les fichiers :

04_exo_api_storage_[prenom].html
04_exo_api_storage_[prenom].js
1 - Rechercher des films depuis un mot (dans une barre de recherche)
https://imdb.iamidiotareyoutoo.com/search?q=[query]

[query] est le mot recherché par l'utilisateur

2 - Enregistrement local des 8 propositions de films
Dans le localStorage, enregistrer la clé (query) et les valeurs de retours de l'appel API (propriété "description" du resultat)
champs a enregistrer :
#TITLE
#IMDB_ID
#IMDB_POSTER
Voir :

localStorage.setItem('cle', 'valeur');
3 - Affichage de localStorage
Afficher tous les films depuis le localStorage
let valeur = localStorage.getItem('cle');
Le LocalStorage ne supporte que les chaînes de caractères. Il faut donc utiliser JSON.stringify() et JSON.parse() pour stocker et lire des objets.

4 - Cliquer sur un film pour afficher les informations du film en question
https://imdb.iamidiotareyoutoo.com/search?tt=[#IMDB_ID]

5 - Afficher le contenu du film
short.url
short.name
short.image
short.description