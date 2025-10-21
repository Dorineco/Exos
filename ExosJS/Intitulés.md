# Exercices

## Exercice 1 — Variables et affichage

Objectif : déclarer des variables et afficher leur contenu.

Consigne :

- Crée trois variables :

    -  prenom (chaîne de caractères)
    - age (nombre)
    - ville (chaîne de caractères)

Affiche une phrase complète dans la console du type :
👉 "Je m'appelle Léa, j'ai 25 ans et j'habite à Paris."

Aide :

Utilise les template literals :
```js
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${ville}.`);
```

## Exercice 2 — Opérateurs mathématiques

Objectif : manipuler les opérateurs de calcul.

Consigne :

- Déclare deux variables a = 12 et b = 5.
- Calcule et affiche :
    - la somme
    - la différence
    - le produit
    - le quotient
    - le reste (modulo)
    
Exemple attendu :
```yaml
Somme : 17
Différence : 7
Produit : 60
Quotient : 2.4
Reste : 2
```

## Exercice 3 — Opérateurs de comparaison

Objectif : comprendre les différences entre `==`, `===`, `!=`, `!==`.

Consigne :
- Crée deux variables :
```js
let x = 10;
let y = "10";
```
Teste les comparaisons suivantes avec console.log :
```js
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
```
_Observe la différence entre **égalité simple** et **égalité stricte.**_

## Exercice 4 — Conditions simples

**Objectif** : utiliser if, else if, else.

Consigne :

- Déclare une variable age avec la valeur de ton choix.
- Si age est inférieur à 18 → affiche "Tu es mineur".
- Si age est entre 18 et 64 → affiche "Tu es adulte".
- Sinon → affiche "Tu es senior".

## Exercice 5 — Condition avec opérateur ternaire

Objectif : simplifier une condition.

Consigne :

- Crée une variable temperature = 22.
- Utilise un opérateur ternaire pour afficher :

    - "Il fait chaud" si la température ≥ 25
    - "Il fait frais" sinon

## Exercice 6 — Boucles for

Objectif : répéter une action.

Consigne :

- Affiche les nombres de 1 à 10 dans la console.
- Affiche seulement les nombres pairs entre 1 et 20.
- Exemple attendu :
```
2
4
6
8
...
20
```

## Exercice 7 — Boucle while

Objectif : utiliser while pour répéter jusqu’à une condition.

Consigne :
- Déclare une variable compteur = 0.
- Tant que compteur est inférieur à 5, affiche sa valeur et incrémente-le.

## Exercice 8 — Tableaux (Arrays)

Objectif : manipuler un tableau.

Consigne :
- Crée un tableau fruits contenant 3 fruits.
- Ajoute un fruit à la fin avec push().
- Supprime le premier élément avec shift().
- Affiche la longueur du tableau.
- Parcours le tableau avec for...of et affiche chaque fruit.

## Exercice 9 — Méthodes de tableau

Objectif : explorer quelques méthodes utiles.

Consigne :

- Crée un tableau de nombres :
```js
let nombres = [3, 8, 12, 5, 9];
```

Affiche :

- Le premier et le dernier élément.
- Si le tableau contient la valeur 8.
- L’index du nombre 5.
- Le tableau trié (sort()).

## Exercice 10 — Fonctions simples

Objectif : créer et appeler une fonction.

Consigne :

- Écris une fonction direBonjour() qui affiche "Bonjour à tous !".
- Appelle-la plusieurs fois dans ton script.


Exercice 11 — Fonctions avec paramètres
Objectif : utiliser des arguments.

Consigne :

Crée une fonction saluer(prenom) qui affiche :
👉 "Bonjour, [prenom] !"

Appelle cette fonction avec plusieurs prénoms.




Exercice 12 — Fonction avec retour de valeur
Objectif : utiliser return.

Consigne :

Crée une fonction addition(a, b) qui retourne la somme de a et b.
Stocke le résultat dans une variable total et affiche-la.

Exercice 13 — Combiner plusieurs notions
Objectif : mobiliser tout ce que vous avez appris.

Consigne :

Crée un tableau de prénoms (["Léa", "Tom", "Inès", "Adam"]).
Crée une fonction afficherListe(tab) qui parcourt le tableau et affiche chaque prénom.
Appelle la fonction.
Ajoute un prénom avec push() et appelle de nouveau la fonction.

Exercice 14 — Petit défi bonus
Objectif : logique et boucles.

Consigne :

Crée une fonction tableDeMultiplication(n) qui affiche la table de multiplication de n.

Exemple :
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30


Appelle la fonction pour n = 7.


Exos Extra

Niveau 1 — Bases et logique
Objectif : se familiariser avec les variables, conditions et boucles.

Bonjour utilisateur
Demande à l’utilisateur son nom et affiche :
indice : let nom = prompt(); 
prompt(); est une fonction qui prend en  argument, une chaine de caractères  (par exemple une question)
"Bonjour [nom] !" 

Pair ou impair
Demande un nombre et affiche s’il est pair ou impair.

Comparateur
Demande deux nombres et affiche le plus grand des deux. 

Somme de 1 à N
Demande un nombre N et calcule la somme des entiers de 1 à N. 

Table de multiplication
Demande un nombre et affiche sa table de multiplication (jusqu’à 10). 

Niveau 2 — Boucles et tableaux


Moyenne d’un tableau
Crée un tableau de nombres [12, 5, 8, 130, 44]
→ Calcule et affiche la moyenne.

Recherche d’un élément
Demande un nom et vérifie s’il est dans le tableau :
["Alice", "Bob", "Charlie", "David"]

Maximum et minimum
Trouve le plus grand et le plus petit élément d’un tableau.

Inverser un tableau
Écris une fonction qui renvoie un tableau inversé (sans utiliser .reverse()).

Compter les voyelles
Demande une phrase et compte le nombre de voyelles.