import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import UpgradeToPro from "views/Upgrade.jsx";
import FindUs from "views/FindUs";

var routes = [
  {
    path: "/dashboard",
    name: "Accueil",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Présentation de l'association",
    icon: "nc-icon nc-zoom-split",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Evènements",
    icon: "nc-icon nc-alert-circle-i",
    component: Maps,
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
    icon: "nc-icon nc-align-left-2",
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
