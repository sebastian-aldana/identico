import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Inicio = loadable(() => import("./frontend/pages/Inicio"));
const Nosotros = loadable(() => import("./frontend/pages/Nosotros"));
const Productos = loadable(() => import("./frontend/pages/Productos"));
const Servicios = loadable(() => import("./frontend/pages/Servicios"));
const Detalle = loadable(() => import("./frontend/pages/Detalle"));
const Blog = loadable(() => import("./frontend/pages/Blog"));
const Articulo = loadable(() => import("./frontend/pages/Articulo"));
const Not = loadable(() => import("./frontend/pages/NotFound"));

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/nosotros" component={Nosotros} />
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/servicios" component={Servicios} />
      <Route exact path="/productos/consumibles/:id" component={Detalle} />
      <Route exact path="/productos/impresoras/:id" component={Detalle} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/articulo/:id" component={Articulo} />
      <Route component={Not} />
    </Switch>
  );
}

export default App;
