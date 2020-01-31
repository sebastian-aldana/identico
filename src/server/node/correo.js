const nodemailer = require("nodemailer");
exports.enviarCorreo = (req, res, next) => {
  const { name, email, phone, message } = req.body;
  const contentHTML = `
    <h1>Informacion del cliente </h1>
    <ul>
        <li>Nombre: ${name}</li>
        <li>Email: ${email}</li>
        <li>Telefono: ${phone}</li>
        <li>Mensaje: ${message}</li>
    </ul>
    `;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "identicomexico123@gmail.com",
      pass: "wbyykeyarqcndfya"
    }
  });
  const info = transporter.sendMail({
    from: "'identicomexico web' <ventas@identicodf.com.mx>",
    to: "lesly@identicodf.com.mx",
    subject: "formulario de contacto pagina web",
    html: contentHTML
  });
  console.log("mensaje enviado", info.messageId);
  res.send("recibido");
};
