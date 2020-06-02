import React, { useState } from "react";
import axios from "axios";
import Respuesta from "./Respuesta";
import Swal from "sweetalert2";
const Formulario = () => {
  const [cliente, guardarCliente] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const actualizarState = e => {
    guardarCliente({
      ...cliente,

      [e.target.name]: e.target.value
    });
  };

  const enviarCliente = e => {
    e.preventDefault();
    axios
      .post("/enviar-correo", cliente)
      .then(function (response) {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Enviamos su informacion con exito",
            text: "Un asesor se contactara con usted"
          }).then(result => {
            if (result.value) {
              window.location.href = window.location.href;
            }
          });
        }
      })
      .catch(function (error) {
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
