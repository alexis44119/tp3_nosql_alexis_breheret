# TP3 no-SQL I4

Ce projet en Node.js permet d'intérérgir avec une base de données no-SQL.
Il rend possible la création de note avec 

### Prérequis

Node Js, Express, ainsi qu'un testeur de requètes API comme Postman ou cURL

### Utilisation

Créer une note : 

```
POST http://localhost:3000/note

Host: localhost:3000
Content-type: text/plain
Content-Length: 0
Content: "bee"
```

Récupérer une note à l'aide de son ID :

```
GET http://localhost:3000/note/{KEY}

Host: localhost:3000
Content-type: text/plain
Content-Length: 0
```

Récuperer toutes les notes : 

```
GET http://localhost:3000/notes

Host: localhost:3000
Content-type: text/plain
Content-Length: 0
```

## Fait avec

* [Node.js]
* [Webstorm]
* [Amour]

## Auteurs

* **Alexis Breheret** - [alexis44119](https://github.com/alexis44119)
* **Rémi Da Rocha** - [RemDaRocha](https://github.com/RemDaRocha)
