import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Layout = loadable(() => import("../containers/Layout"));
const Inicio = loadable(() => import("./Inicio"));
const Nosotros = loadable(() => import("./Nosotros"));
const Productos = loadable(() => import("./Productos"));
const Servicios = loadable(() => import("./Servicios"));
const Detalle = loadable(() => import("./Detalle"));
const Blog = loadable(() => import("./Blog"));
const Not = loadable(() => import("./NotFound"));

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
