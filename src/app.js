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
const Impresoras = loadable(() =>
  import("./frontend/components/productos/Impresoras")
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/nosotros" component={Nosotros} />
      <Route
        exact
        path="/productos"
        component={() => {
          return (
            <Productos>
              <Impresoras />
            </Productos>
          );
        }}
      />
      <Route exact path="/productos/:category" component={Detalle} />
      <Route exact path="/productos/:category/:brand" component={Detalle} />
      <Route exact path="/productos/:category/:brand/:id" component={Detalle} />
      <Route exact path="/servicios" component={Servicios} />
      <Route exact path="/servicios" component={Servicios} />
      {/* <Route exact path="/productos/consumibles/:id" component={Detalle} /> */}
      {/* <Route exact path="/productos/impresoras/:id" component={Detalle} /> */}
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/articulo/:id" component={Articulo} />
      <Route component={Not} />
    </Switch>
  );
}

export default App;
