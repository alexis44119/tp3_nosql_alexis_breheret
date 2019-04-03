# TP3 no-SQL I4

Ce projet en node js permet d'intérérgir avec une base de données no-SQL 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prérequis

Node Js, Express, ainsi qu'un testeur de requètes API comme Postman ou cURL

### Utilisation

Créer une note : 

'''
POST http://localhost:3000/note

Host: localhost:3000
Content-type: text/plain
Content-Length: 0
Content: "bee"
'''

Récupérer une note à l'aide de son ID :

'''
GET http://localhost:3000/notes/{KEY}

Host: localhost:3000
Content-type: text/plain
Content-Length: 0
'''

Récuperer toutes les notes : 

'''
GET http://localhost:3000/notes

Host: localhost:3000
Content-type: text/plain
Content-Length: 0
'''

## Fait avec

* [Node JS]
* [Webstorm]
* [Amour]

## Auteurs

* **Alexis Breheret** - [alexis44119](https://github.com/alexis44119)
* **Rémi Da Rocha** - [RemDaRocha](https://github.com/RemDaRocha)
