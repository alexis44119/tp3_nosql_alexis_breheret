# TP3 no-SQL I4

Ce projet en Node.js permet d'intérérgir avec une base de données no-SQL.
Il rend possible la création de note avec 

### Prérequis

Un environnement Nodejs, Express, ainsi qu'un testeur de requètes API comme Fiddler

Une fois dans le dossier du projet installer les packages à l'aide de : 

```
npm install
```


### Utilisation

Créer une note avec son auteur : 

```
POST http://localhost:3000/note/{author}

Host: localhost:3000
Content-type: application/json
Content-Length: 0
Content: "some content"
```

Sortie : 

```
2gklH // Identifiant de la note
```

Récupérer une note à l'aide de son ID :

```
GET http://localhost:3000/note/{KEY}

Host: localhost:3000
Content-type: text/plain
Content-Length: 0
```

Sortie : 

```
texte noté | author : yesss | creation date : 4/4/2019  10:24 am

```

Récuperer toutes les notes : 

```
GET http://localhost:3000/notes

Host: localhost:3000
Content-type: text/plain
Content-Length: 0
```

Sortie : 

```
1 - 0dMRw | content : superbe bite | author : bite | creation date : 1554365896466

2 - 0Mfri | content : contenu de la note | author : auteurrr | creation date : 4/4/2019  10:29 am

3 - kS4jT | content : test | author : auteurrr | creation date : 4/4/2019  10:29 am

4 - mtjaM | content : LOOOOOOOOL | author : alexis | creation date : 4/4/2019  10:28 am

5 - YDRHq | content : fezgezgze | author : auteurrr | creation date : 4/4/2019  10:19 am

6 - zAfiQ | content : Hifezfez  | author : remi | creation date : 4/4/2019  10:29 am

7 - U9Wgk | content : WAHOUUUUUUUUU | author : auteurrr | creation date : 4/4/2019  10:03 am
```


## Fait avec

* [Nodejs]
* [Webstorm]
* [Redis]

## Auteurs

* **Alexis Breheret** - [alexis44119](https://github.com/alexis44119)
* **Rémi Da Rocha** - [RemDaRocha](https://github.com/RemDaRocha)
