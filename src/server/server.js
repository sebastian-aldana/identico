import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

if (ENV === "development") {
  console.log("Loading dev config");
  const webpackConfig = require("../../config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `httt://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}
app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="css/app.css" type="text/css" />
    <link rel="stylesheet" href="css/1.app.css" type="text/css" />
  </head>
  <body>
    <div id="app"></div>
    <div
      class="btn-whatsapp"
      style="
    display:block;
    width:70px;
    height:70px;
    color#fff;
    position: fixed;
    left:0px;
    top:250px;
    border-radius:50%;
    line-height:80px;
    text-align:center;
    z-index:999;"
    >
      <a
        href="https://api.whatsapp.com/send?phone=5215579501027"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/whatsapp.png"
          alt=""
          style="width: 90px;"
        />
      </a>
    </div>
    <footer class="pt-5" id="contactanos">
      <div class="container-fluid">
        <div class="row posr">
          <img
            src="/images/btn-contacto.png"
            alt="Cotáctanos"
            style="width: 278px; height: 57px;"
            class="pestania"
          />
          <div
            class="col-md-8 p-0 align-self-center"
            style="margin-top: 50px;   max-width: 1fr;"
          >
            <div style="padding-left: 120px; ">
              <script
                charset="utf-8"
                type="text/javascript"
                src="https://js.hsforms.net/forms/shell.js"
              ></script>
              <script>
                hbspt.forms.create({
                  portalId: "5239056",
                  formId: "33ec6d78-377e-4ef6-affe-44f79914547b"
                });
              </script>
            </div>
          </div>

          <div class="col-md-4 p-0 align-self-center text-center">
            <img
              src="/images/imagen-footer.png"
              alt=""
              class="img-fluid"
            />
          </div>

          <div class="col-12 p-0">
            <div class="bdAzulO text-center text-white py-4">
              <p class="iconos">
                <a
                  href="https://www.facebook.com/IdenticoMex/"
                  target="_blank"
                  rel="noreferrer"
                  ><span><i class="fab fa-facebook-f"></i></span
                ></a>
                <a
                  href="https://www.linkedin.com/company/identicomx/"
                  target="_blank"
                  rel="noreferrer"
                  ><span><i class="fab fa-linkedin-in"></i></span
                ></a>
              </p>
              <p style="font-weight:100; font-size:14px;">
                <a
                  href="https://www.google.com/maps/place/Av+Sonora+119,+Roma+Nte.,+06700+Ciudad+de+M%C3%A9xico,+CDMX/@19.4166312,-99.1706431,3a,75y,243.4h,86.19t/data=!3m7!1e1!3m5!1sjgzQBWGsrxaej2jwWAvvLg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DjgzQBWGsrxaej2jwWAvvLg%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D86%26h%3D86%26yaw%3D238.53912%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m8!1m2!2m1!1sAv.+Sonora+119,+PB,+Col.+Roma+Norete,+Del.+Cuauhtemoc,+06700!3m4!1s0x85d1ff46feec46d1:0xc942c36094cbafab!8m2!3d19.4165364!4d-99.1708065"
                  class="text-white"
                  target="_blank"
                  rel="noreferrer"
                  >Av. Ejercito Nacional 505, Despacho 401, Col. Granada, CDMX,
                  11520</a
                ><br /><a class="text-white" href="tel:+525587894997"
                  >DF y zona metropolitana : 55 8789 4997</a
                ><br /><a class="text-white" href="tel:+525587894997"
                  >Línea gratuita a nivel nacional : 01-800-953-0984</a
                ><br /><a
                  class="text-white"
                  href="mailto:info@identicodf.com.mx"
                  >info@identicodf.com.mx</a
                >
              </p>
              <p style="font-weight:100; font-size:14px;">
                <a class="text-white" href="aviso-de-privacidad.php"
                  >Aviso de Privacidad</a
                >
              </p>
              <p class="m-0" style="font-weight:100; font-size:14px;">
                Copyright &copy; IDéntico
                <?php echo date("Y"); ?>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <script
    type="text/javascript"
    id="hs-script-loader"
    async
    defer
    src="https://js.hs-scripts.com/5239056.js"
    onClick="_gaq.push(['_trackEvent', 'boton', 'clic']);"
  ></script>
    <script src="assets/app.js"></script>
    <script src="assets/vendor.js"></script>
  </body>
</html>  
  `);
});

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`Server runnning on${PORT}`);
});
