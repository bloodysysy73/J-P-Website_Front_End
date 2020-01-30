import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Presentation from "views/Presentation.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Evenement from "views/Evenement.jsx";
import UserPage from "views/User.jsx";
import UpgradeToPro from "views/Upgrade.jsx";
import FindUs from "views/FindUs";

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
    path: "/Evenements",
    name: "Evenements",
    icon: "nc-icon nc-alert-circle-i",
    component: Evenement,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
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
    path: "/tables",
    name: "Articles et dossiers",
    icon: "nc-icon nc-paper",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Liens utiles",
    icon: "nc-icon nc-bullet-list-67",
    component: Typography,
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
    path: "/upgrade",
    name: "Nous contacter",
    icon: "nc-icon nc-chat-33",
    component: UpgradeToPro,
    layout: "/admin"
  }
];
export default routes;
