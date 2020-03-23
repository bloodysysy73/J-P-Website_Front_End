import Dashboard from "views/Dashboard.jsx";
import Administration from "views/Administration.jsx";
import Presentation from "views/Presentation.jsx";
import Liens from "views/Liens.jsx";
import Article from "views/Article.jsx";
import Evenement from "views/Evenement.jsx";
import UserPage from "views/User.jsx";
import Contact from "views/Contact.jsx";
import FindUs from "views/FindUs";
import UtilisateurDelete from "components/Utilisateur/UtilisateurDelete";
import UtilisateurEdit from "components/Utilisateur/UtilisateurEdit";


var routes = [
  {
    path: "/dashboard",
    name: "Accueil",
    icon: "nc-icon nc-sun-fog-29",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/Presentation",
    name: "Présentation de l'association",
    icon: "nc-icon nc-zoom-split",
    component: Presentation,
    layout: "/admin"
  },
  {
    path: "/evenements",
    name: "Evenements",
    icon: "nc-icon nc-alert-circle-i",
    component: Evenement,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/articles",
    name: "Articles et dossiers",
    icon: "nc-icon nc-paper",
    component: Article,
    layout: "/admin"
  },
  {
    path: "/liens",
    name: "Liens utiles",
    icon: "nc-icon nc-bullet-list-67",
    component: Liens,
    layout: "/admin"
  },
  {
    path: "/findus",
    name: "Nous trouver",
    icon: "nc-icon nc-pin-3",
    component: FindUs,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/contactus",
    name: "Nous contacter",
    icon: "nc-icon nc-chat-33",
    component: Contact,
    layout: "/admin"
  },
  {
    path: "/administration",
    name: "Administration",
    icon: "nc-icon nc-bell-55",
    component: Administration,
    layout: "/admin"
  },
  {
    path: "/utilisateurdelete/:id",
    name: "UtilisateurDelete",
    icon: "nc-icon nc-bell-55",
    component: UtilisateurDelete,
    layout: "/admin"
  },
  {
    path: "/utilisateuredit/:id",
    name: "UtilisateurEdit",
    icon: "nc-icon nc-bell-55",
    component: UtilisateurEdit,
    layout: "/admin"
  },
];
export default routes;
