
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/bloodysysy73/J-P-Website_Front_End">
    <img src="public/images/logojp.jpg" alt="Logo" width="auto" height="80">
  </a>

  <h3 align="center">Simulation site web de l'Association Jumeaux & plus 73 : Front end</h3>

  <p align="center">
    Ce repository contient le code de la partie front de mon application web "jumeau et plus 73". Cette application web est un site hybride administrateur/forum qui pourrait permettre (s'il était déployé) à l'association jumeaux et plus 73 de gérer leurs adhérents, de les informer des évènements passés et à venir et de créer une communauté d'entraide en mettant les membres en relation direct.
   <br />
    <br />
    <a href="https://github.com/bloodysysy73/J-P-Website_Front_End"><strong>Arborescence des fichiers</strong></a>
    <br />
  
  <br />
  La partie frontend a été réalisée en javascript avec le framework React JS (projet react redux), la partie backend en JAVA avec le framework spring. Les données sont persistées dans une base de donnée relationelle MySql avec l'ORM hibernate.<br /><br />
    <a href="https://github.com/bloodysysy73/J-P-Website_Back_End"><strong>Cliquez ici pour accéder au back-end de l'application</strong></a>
    <br />
</p>



<!-- TABLE OF CONTENTS -->
## Sommaire

* [Principe de l'application](#principe-de-lapplication)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## Principe de l'application

[![Product Name Screen Shot][product-screenshot]]

Ceci est la page d'accueil du site internet telle qu'un utilisateur lambda la voit. Il est possible de se connecter avec son compte gmail ou via un email et un mot de passe.

Un adminitrateur aura un onglet en plus : "administration".

L'administrateur peut ajouter des publications et des évènements qui apparaitront sur le mur les uns à la suites des autres. Les publications sont sur la page d'accueil et les évènements sur la page évènement.

* L'onglet FAC/Question

L'onglet FAC/Question contient des questions par defaut que l'ont peut dérouler. Mais chaque utilisateur peut également poster une question à laquelle n'importe quel utilisateur connecté peut répondre après avoir cliqué sur "voir réponses" . 

[![Capture question][capture-question]]

[![Capture question 2][capture-question-2]]

L'utilisateur peut contacter les gérants de l'association via l'onglet "nous contacter" qui envoie le message dans la boite mail de l'association.

* L'onglet user profile

L'un des onglets principaux de cette application est l'onglet "user profile". Ici un utlisateur peut changer son mot de passe, son pseudo, ses informations générales et sa photo de profil. 

[![Capture profile][capture-profile]]

* L'onglet administration

[![Capture admin][capture-admin]]

Sur cette page, l'admistrateur a accès à plusieurs menus déroulants pour modifier, supprimer ou effacer les utlisateurs, les évènements et les publications. Lors de la modification, il y a un visuel de prévisualisation.

### Built With

* []() ReactJS 16.8 (javascript ES6) pour la partie frontend
* []() Redux pour la gestion des states
* []() Framework Spring (JAVA 8) pour la partie backend (projet spring boot)
* []() maven 4.0 pour la gestion des dépendences 
* []() hibernate pour la persistance des données

<!-- GETTING STARTED -->
## Getting Started

Pour obtenir un copie locale de cette application veuillez suivre ces étapes. 

### Prerequisites

installer node, java et lampp avec mySql:
* npm
```sh
npm install npm@latest -g
```
* lampp (ici avec ubuntu)
```sh
sudo apt install apache2 php libapache2-mod-php mysql-server php-mysql
```
* java 8

### Installation
Pour la partie front : 
 
1. Cloner le repo du front dans un dossier
```sh
git clone git@github.com:bloodysysy73/J-P-Website_Front_End.git
```
2. Installer NPM packages
```sh
npm install
```
3. Lancer l'application 
```sh
npm start
```
3. Lancer l'interface avec votre client (se lance toute seule avec VS code)
```sh
http://localhost:3000
```

Pour la base de donnée : 

1. lancer lampp

```sh
sudo lampp start
```
1. importer la base de donnée MyProject.sql présente dans public/BDD (username="root", password="" )
(vous pouvez aussi la laisser se créer toute seule en lancant le projet spring boot mais celle ci sera vide. Vous devrez ajouter les champs suivant :

* description_role : ROLE_ADMIN, id_role : 1, nom_role : ROLE_ADMIN
* description_role : ROLE_USER, id_role : 2, nom_role : ROLE_USER

puis ajouter un admin à la main dans la table utilisateur_role (id de l'admin + id du role admin : 1)

Pour la partie back : 

1. Cloner le repository du backend dans un autre dossier
```sh
git clone https://github.com/bloodysysy73/J-P-Website_Back_End
```
2. Ouvrir le projet spring boot avec votre IDE (idéalement eclipse avec l'extension spring tools 3.9.12 et l'addon 4.3.9)
```sh
cliquez droit sur votre projet : run as spring boot App
```


<!-- USAGE EXAMPLES -->
## Usage

Maintenant que l'application est lancée, vous pouvez vous connecter avec votre compte google ou créer un compte.
(l'utilisateur admin par defaut dans la base de donnée fournie : admin@gmail.com, password= admin
utilisateur simple : user01@gmail.com, password= user01)
Se connecter avec google vous créera automatique un compte dans la base de donnée. Le protocole de sécurité et d'obtention du token sera identique dans les 2 cas (jwt token).

Vous pouvez changer vos informations, votre photo de profil et votre pseudo ainsi que poser des questions aux utilisateurs ou y répondre.

Si vous vous connectez en tant qu'administrateur, pous pourrez créer des publications ou des évènements dans l'onglet de gestion. Vous pourrez également supprimer les utilisateurs ou les modifier.


<!-- CONTACT -->
## Contact

Sylvain GUEHRIA   - sylvain.guehria@gmail.com - 06 64 39 70 53

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sylvain-guehria-ab9737134/
[product-screenshot]: public/images/capture1.png
[capture-question]: public/images/capture2.png
[capture-question-2]: public/images/Capture3.png
[capture-profile]: public/images/Capture5.png
[capture-admin]: public/images/capture7.png

