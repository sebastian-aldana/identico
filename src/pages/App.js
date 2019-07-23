import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import Inicio from "./Inicio";
import Nosotros from "./Nosotros";
import Productos from "./Productos";
import Servicios from "./Servicios";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/servicios" component={Servicios} />
        </Switch>
      </Layout>
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
