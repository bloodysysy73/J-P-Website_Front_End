<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo, twitter_handle, email
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/bloodysysy73/J-P-Website_Front_End">
    <img src="public/images/logojp.jpg" alt="Logo" width="auto" height="80">
  </a>

  <h3 align="center">Simulation site web de l'Association Jumeaux & plus 73 : Front end</h3>

  <p align="center">
    Ce repo contient le code de la partie front de mon application web "jumeau et plus 73". Cette application web est un site hybride administrateur/forum qui pourrait permettre (si il était déployé) à l'association jumeaux et plus 73 de gérer leurs adhérents, de les informer des évènements passés et à venir et de créer une communauté d'entraide en mettants les membres en relation direct.
   <br />
    <br />
    <a href="https://github.com/bloodysysy73/J-P-Website_Front_End"><strong>Arborescence des fichiers</strong></a>
    <br />
  
  <br />
  La partie frontend à été réalisée en javascript avec le framework React JS, la partie backend en JAVA avec le framework spring. Les données sont persistées dans une base de donnée relationelle MySql avec l'ORM hibernate.<br /><br />
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
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## Principe de l'application

[![Product Name Screen Shot][product-screenshot]]

Ceci est la page d'accueil du site internet tel que le vois un utilisateur lambda. Il est possible de se connecter avec son compte gmail ou via un email et un mot de passe.

Un adminitrateur aura un onglet en plus : "administration".

L'administrateur peux ajouter des publications et des évènements qui apparaitront sur le mur les un à la suites des autres. les publication sont sur la page d'accueil et les évènements sur la page évènement.

L'onglet FAC/Question contient des questions par defaut que l'ont peut dérouler. Mais chaque utilisateur peut également poster une question à laquelle n'importe quel utilisateur connecté peut répondre après avoir cliqué sur "voir réponses" . 

[![Capture question][capture-question]]

[![Capture question 2][capture-question-2]]

L'utilisateur peut contacter les gérants de l'association via l'onglet "nous contacter" qui envoie le message dans la boite mail de l'association.

l'un des onglets principaux de cette application est l'onglet "user profil". Ici un utlisateur peut changer son mot de passe, son pseudo, ses informations générales et sa photo de profile. 

[![Capture profile][capture-profile]]

L'onglet administration

[![Capture profile][capture-profile]]

### Built With

* []() javascript ES6 : React JS 16.8 pour la partie frontend
* []() java 8: framework Spring pour la partie backend (projet spring boot)
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
3. Lancer l'interface avec votre client (automatique avec VS code)
```sh
http://localhost:3000
```
Pour la partie back : 

1. Cloner le repo du back dans un autre dossier
```sh
git clone https://github.com/bloodysysy73/J-P-Website_Back_End
```
2. Ouvrir le projet spring boot avec votre IDE (idéalement eclipse avec l'extension spring tools 3.9.12 et l'addon 4.3.9)
```sh
cliquez sur run as spring boot project
```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/github_username/repo/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email

Project Link: [https://github.com/github_username/repo](https://github.com/github_username/repo)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sylvain-guehria-ab9737134/
[product-screenshot]: public/images/capture1.png
[capture-question]: public/images/capture2.png
[capture-question-2]: public/images/Capture3.png
[capture-profile]: public/images/Capture5.png

