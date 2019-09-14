import React, { Component, setState } from "react";
import Layout from "../containers/Layout";
import RespuestaCotizador from "../components/Cotizador/RespuestaCotizador";

class Cotizador extends Component {
  //Creando state de busqueda
  state = {
    preguntaUno: "",
    preguntaDos: "",
    preguntaTres: "",
    impresoras: undefined,
    impresorasRetransferencia: {
      id4: null,
      id5: null,
      id6: null
    }
  };

  //Pasando respuestas al state
  leerDato = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // Definiendo respuesta

  realizarBusqueda = e => {
    e.preventDefault();
    // this.setState({ impresoras: { id1: 1, id2: 2, id3: 3 } });
    const { preguntaUno, preguntaDos, preguntaTres, impresoras } = this.state;
    // respuesta 1
    if (
      (preguntaUno === "a" && preguntaDos === "a" && preguntaTres === "a") ||
      (preguntaUno === "a" && preguntaDos === "a" && preguntaTres === "b")
    ) {
      // respuesta a,a,a o a,a,b
      this.setState({
        impresoras: {
          id1: 5,
          id2: 76,
          id3: undefined
        }
      });
      // Respuesta 2
    } else if (
      preguntaUno === "a" &&
      preguntaDos === "b" &&
      preguntaTres === "a"
    ) {
      // Respuesta a,b,a
      this.setState({
        impresoras: {
          id1: 5,
          id2: 76,
          id3: undefined
        }
      });
    }
    // Respuesta 3
    else if (
      preguntaUno === "a" &&
      preguntaDos === "b" &&
      preguntaTres === "b"
    ) {
      // Respuesta a,b,b
      this.setState({
        impresoras: {
          id1: 5,
          id2: 76,
          id3: undefined
        }
      });
    }
    //Respuesta 4
    else if (
      preguntaUno === "b" &&
      preguntaDos === "a" &&
      preguntaTres === "a"
    ) {
      this.setState({
        impresoras: {
          id1: 6,
          id2: 9,
          id3: 79
        }
      });
      // Respuesta b,a,a
    }
    // Respuesta 5
    else if (
      preguntaUno === "b" &&
      preguntaDos === "b" &&
      preguntaTres === "a"
    ) {
      // Respuesta b,b,a
      this.setState({
        impresoras: {
          id1: 6,
          id2: 9,
          id3: 79
        }
      });
    }
    // Respuesta 6
    else if (
      preguntaUno === "b" &&
      preguntaDos === "b" &&
      preguntaTres === "b"
    ) {
      // Respuesta b,b,b
      this.setState({
        impresoras: {
          id1: 6,
          id2: 9,
          id3: 79
        }
      });
    }
    // Respuesta 7
    else if (
      preguntaUno === "c" &&
      preguntaDos === "a" &&
      preguntaTres === "a"
    ) {
      // Respuesta c,a,a
      this.setState({
        impresoras: {
          id1: 2,
          id2: 15,
          id3: 74
        }
      });
    }
    // Respuesta 8
    else if (
      preguntaUno === "c" &&
      preguntaDos === "b" &&
      preguntaTres === "a"
    ) {
      // Respuesta c,b,a
      this.setState({
        impresoras: {
          id1: 2,
          id2: 15,
          id3: 74
        }
      });
    }
    // Respuesta 9
    else if (
      preguntaUno === "c" &&
      preguntaDos === "a" &&
      preguntaTres === "b"
    ) {
      // Respuesta cab
      this.setState({
        impresoras: {
          id1: 2,
          id2: 15,
          id3: 74
        }
      });
    }
    // Respuesta 10
    else if (
      preguntaUno === "c" &&
      preguntaDos === "b" &&
      preguntaTres === "b"
    ) {
      // Respuesta cbb
      this.setState({
        impresoras: {
          id1: 2,
          id2: 15,
          id3: 74
        },
        impresorasRetransferencia: {
          id4: 1,
          id5: 75,
          id6: 8
        }
      });
    }
  };

  render() {
    if (this.state.impresoras !== undefined) {
      return (
        <Layout>
          <RespuestaCotizador
            impresoras={this.state.impresoras}
            impresorasRetransferencia={this.state.impresorasRetransferencia}
          />
        </Layout>
      );
    }

    return (
      <Layout>
        <div className="bg-primary">
          <div className="container">
            <h2 className="text-center text-white p-4">
              Estamos para asesorarlo! por favor diligencie el formulario y
              traeremos los mejores productos para usted
              <br />
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row card">
            <form
              className="col-md-8 offset-md-2 my-4"
              onSubmit={this.realizarBusqueda}
            >
              <div className="form-group ">
                <h4>
                  Por favor indiquenos en promedio cuantas credenciales va a
                  imprimir
                </h4>
                <select
                  value={this.state.value}
                  onChange={this.leerDato}
                  name="preguntaUno"
                  className="form-control"
                >
                  <option value="mango">Seleccione una opcion</option>
                  <option value="a">Menos de 500</option>
                  <option value="b">entre 500 y 10.000</option>
                  <option value="c">Mas de 10.000</option>
                </select>
              </div>

              <div className="form-group ">
                <h4>
                  ¿La impresión se va a ser por una sola cara o por ambas caras?
                </h4>
                <select
                  value={this.state.value}
                  onChange={this.leerDato}
                  name="preguntaDos"
                  className="form-control"
                >
                  <option value="mango">Seleccione una opcion</option>
                  <option value="a">Una sola cara</option>
                  <option value="b">Dos caras</option>
                </select>
              </div>

              <div className="form-group ">
                <h4>
                  ¿Le interesa algún sobrelaminado transparente u holográfico
                  para incrementar la durabilidad de la tarjeta y tener un nivel
                  de seguridad?
                </h4>
                <select
                  value={this.state.value}
                  onChange={this.leerDato}
                  name="preguntaTres"
                  className="form-control"
                >
                  <option value="mango">Seleccione una opcion</option>
                  <option value="a">Si</option>
                  <option value="b">No</option>
                </select>
              </div>
              <div className="col-12 text-center">
                <input
                  type="submit"
                  value="Ver sugerencias"
                  className="btn btn-primary w-100"
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Cotizador;
