import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import UpgradeToPro from "views/Upgrade.jsx";

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
    name: "BBBBBB",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
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
    name: "TTTTTT",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "JJJJJJJ",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Que mettre ? ",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin"
  }
];
export default routes;
