import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

// const Layout = loadable(() => import("./containers/Layout"));
const Inicio = loadable(() => import("./pages/Inicio"));
const Nosotros = loadable(() => import("./pages/Nosotros"));
const Productos = loadable(() => import("./pages/Productos"));
const Servicios = loadable(() => import("./pages/Servicios"));
const Detalle = loadable(() => import("./pages/Detalle"));
const Blog = loadable(() => import("./pages/Blog"));
const Articulo = loadable(() => import("./pages/Articulo"));
const Not = loadable(() => import("./pages/NotFound"));

function App() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    // <Layout>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/nosotros" component={Nosotros} />
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/servicios" component={Servicios} />
      <Route exact path="/detalle:id" component={Detalle} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/articulo" component={Articulo} />
      <Route component={Not} />
    </Switch>
    // </Layout>
    // </Suspense>
  );
}

export default App;
