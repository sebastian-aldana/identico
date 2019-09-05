import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Detalle from "./pages/Detalle";
import Blog from "./pages/Blog";
import Articulo from "./pages/Articulo";
import Not from "./pages/NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/nosotros" component={Nosotros} />
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/servicios" component={Servicios} />
      <Route exact path="/detalle/:id" component={Detalle} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/articulo/:id" component={Articulo} />
      <Route component={Not} />
    </Switch>
  );
}

export default App;
