import Inicio from "./frontend/pages/Inicio";
import Nosotros from "./frontend/pages/Nosotros";
import Productos from "./frontend/pages/Productos";
import Servicios from "./frontend/pages/Servicios";
import Detalle from "./frontend/pages/Detalle";
import Blog from "./frontend/pages/Blog";
import Articulo from "./frontend/pages/Articulo";
import Not from "./frontend/pages/NotFound";

const serverRoutes = [
  {
    path: "/",
    component: Inicio,
    exact: true
  },
  {
    path: "/nosotros",
    component: Nosotros,
    exact: true
  },
  {
    path: "/productos",
    component: Productos,
    exact: true
  },
  {
    path: "/servicios",
    component: Servicios,
    exact: true
  },
  {
    path: "/blog",
    component: Blog,
    exact: true
  },
  //   {
  //     path: "",
  //     component: Inicio,
  //     exact: true
  //   },
  //   {
  //     path: "",
  //     component: Inicio,
  //     exact: true
  //   },
  {
    name: "NotFound",
    component: Not
  }
];

export default serverRoutes;
