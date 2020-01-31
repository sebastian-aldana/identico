import React, { useState } from "react";
import axios from "axios";

const Formulario = () => {
  const [cliente, guardarCliente] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    websiteId: "",
    status: ""
  });

  const actualizarState = e => {
    guardarCliente({
      ...cliente,

      [e.target.name]: e.target.value,
      websiteId: "5e2f17ece4b02e8af10aff51",
      status: "new"
    });
  };

  const enviarCliente = e => {
    e.preventDefault();

    console.log(cliente);
    axios
      .post(
        "https://api.cliengo.com/1.0/contacts?api_key=c4dd79a3-5d9e-4d97-9c44-71357a90f58d",
        cliente
      )
      .then(function(response) {
        console.log("response creando contacto: ", response);
      })
      .catch(function(error) {
        console.log("error no se pudo crear contacto: ", error);
      });
  };

  return (
    <form onSubmit={enviarCliente}>
      <div className="form-group">
        <label htmlFor="name">Nombre completo</label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          onChange={actualizarState}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo</label>
        <input
          className="form-control"
          type="text"
          name="email"
          id="email"
          onChange={actualizarState}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telefono</label>
        <input
          className="form-control"
          type="text"
          name="phone"
          id="phone"
          onChange={actualizarState}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          className="form-control"
          type="text"
          name="message"
          id="message"
          onChange={actualizarState}
        ></textarea>
      </div>
      <input
        type="submit"
        className="btn btn-primary mb-2"
        value="Enviar mensaje"
      />
    </form>
  );
};

export default Formulario;
