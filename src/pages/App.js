import React, { lazy, Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
// import loadable from "@loadable/component";

const Layout = lazy(() => import("../containers/Layout"));
const Inicio = lazy(() => import("./Inicio"));
const Nosotros = lazy(() => import("./Nosotros"));
const Productos = lazy(() => import("./Productos"));
const Servicios = lazy(() => import("./Servicios"));
const Detalle = lazy(() => import("./Detalle"));
const Blog = lazy(() => import("./Blog"));
const Not = lazy(() => import("./NotFound"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/detalle:id" component={Detalle} />
            <Route exact path="/blog" component={Blog} />
            <Route component={Not} />
          </Switch>
        </Layout>
      </Suspense>
    </HashRouter>
  );
}

export default App;
