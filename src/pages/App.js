import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import Inicio from "./Inicio";
import Nosotros from "./Nosotros";
import Productos from "./Productos";
import Servicios from "./Servicios";
import NotFound from "./NotFound";
import Detalle from "./Detalle";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/servicios" component={Servicios} />
          <Route exact path="/detalle:id" component={Detalle} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
