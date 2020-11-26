import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";

const correo = require("./node/correo");

dotenv.config();

const ENV = process.env.NODE_ENV || "development";
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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("identico"));

//Enviar correos
app.post("/enviar-correo", correo.enviarCorreo);
app.get("/avisoprivacidad", (req, res) => {
  res.send(`
  <div class=WordSection1>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width="100%"
 style='width:100.0%;border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:
 0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <a href="https://identicomexico.com" >Volver a identico</a>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  style='font-size:15.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'> AVISO DE PRIVACIDAD <o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:15.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal><span style='mso-fareast-font-family:"Times New Roman";
display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width="100%"
 style='width:100.0%;border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:
 0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>Identico de Mexico SA
  de CV, mejor conocido como Identico de Mexico SA de CV, con domicilio en
  calle Av. Ejercito Nacional 505, Ofc. 401, colonia Granada, ciudad Ciudad de
  Mexico, municipio o delegació</span><span lang=ES style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>n M</span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>iguel Hidalgo, c.p. 11520, en la entidad de Ciudad de Mexico, paí</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>s </span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>Mexico, y portal de internet
  www.identicomexico.com, es el responsable del uso y protecció</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n d</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>e sus datos personales, y al respecto le
  informamos lo siguiente: <o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>Para qué</span></b><b><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'> fi</span></b><b><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>nes utilizaremos sus datos personales? <o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td style='padding:0cm 0cm 0cm 0cm'></td>
 </tr>
 <tr style='mso-yfti-irow:4'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'><br>
  De manera adicional, utilizaremos su informació</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n p</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>ersonal para las siguientes finalidades
  secundarias que <b>no son necesarias</b> para el servicio solicitado, pero
  que nos permiten y facilitan brindarle una mejor atenció</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n :</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'> </span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <ul type=disc>
   <li class=MsoNormal style='color:black;mso-margin-top-alt:auto;mso-margin-bottom-alt:
       auto;mso-list:l0 level1 lfo2;tab-stops:list 36.0pt'><span
       style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
       "Times New Roman"'>Para proveer los servicios y productos que ofrecemos,
       asi como actividades afines<o:p></o:p></span></li>
   <li class=MsoNormal style='color:black;mso-margin-top-alt:auto;mso-margin-bottom-alt:
       auto;mso-list:l0 level1 lfo2;tab-stops:list 36.0pt'><span
       style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
       "Times New Roman"'>Mercadotecnia o publicitaria<o:p></o:p></span></li>
   <li class=MsoNormal style='color:black;mso-margin-top-alt:auto;mso-margin-bottom-alt:
       auto;mso-list:l0 level1 lfo2;tab-stops:list 36.0pt'><span
       style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
       "Times New Roman"'>Prospecci&#976931;omercial<o:p></o:p></span></li>
  </ul>
  </td>
 </tr>
 <tr style='mso-yfti-irow:6'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='margin-bottom:12.0pt'><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>En caso de que no desee que sus datos personales se utilicen
  para estos fines secundarios, indí</span><span class=SpellE><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>qu</span></span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>elo a continuació</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n :</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'><br>
  No consiento que mis datos personales se utilicen para los siguientes fines:<br>
  <br>
  </span><span style='font-size:13.5pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>[&nbsp;&nbsp;]</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>&nbsp;Para proveer los servicios y productos
  que ofrecemos, asi como actividades afines<br>
  </span><span style='font-size:13.5pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>[&nbsp;&nbsp;]&nbsp;</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>Mercadotecnia o publicitaria <br>
  </span><span style='font-size:13.5pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>[&nbsp;&nbsp;]&nbsp;</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>Prospeccó</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n c</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>omercial <o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:7'>
  <td style='padding:0cm 0cm 0cm 0cm'></td>
 </tr>
 <tr style='mso-yfti-irow:8'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'><br>
  La negativa para el uso de sus datos personales para estas finalidades no
  podrá</span><span lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:ES'>
  s</span><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>er un motivo para que
  le neguemos los servicios y productos que solicita o contrata con nosotros.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:9'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:10'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>Qué</span></b><b><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'> d</span></b><b><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>atos personales utilizaremos para estos fines?
  <o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:11'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:12;mso-yfti-lastrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>Para llevar a cabo las
  finalidades descritas en el presente aviso de privacidad, utilizaremos los
  siguientes datos personales:<o:p></o:p></span></p>
  <ul type=disc>
   <li class=MsoNormal style='color:black;mso-margin-top-alt:auto;mso-margin-bottom-alt:
       auto;mso-list:l2 level1 lfo3;tab-stops:list 36.0pt'><span
       style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
       "Times New Roman"'>Datos de contacto<o:p></o:p></span></li>
  </ul>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='mso-fareast-font-family:"Times New Roman";
display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width="100%"
 style='width:100.0%;border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:
 0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'><br>
  </span></b><b><span lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:ES'>¿Cómo
  </span></b><b><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>puede acceder,
  rectificar o cancelar sus datos personales, u oponerse a su uso? <o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>Usted tiene derecho a
  conocer qué</span><span lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:ES'>
  d</span><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>atos personales tenemos
  de usted, para qué</span><span lang=ES style='font-size:10.0pt;font-family:
  "Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:black;
  mso-ansi-language:ES'> l</span><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:black'>os
  utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su
  derecho solicitar la correcció</span><span lang=ES style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>n d</span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>e su informació</span><span lang=ES style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>n p</span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>ersonal en caso de que esté</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'> d</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>esactualizada, sea inexacta o incompleta
  (Rectificació</span><span lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:ES'>n)</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'> que la eliminemos de nuestros registros o
  bases de datos cuando considere que la misma no está</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'> s</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>iendo utilizada adecuadamente (Cancelació</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n)</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'> así</span><span lang=ES style='font-size:
  10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'> c</span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>omo oponerse al uso de sus datos personales para fines especí</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>fi</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>cos (Oposició</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n).</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'> Estos derechos se conocen como derechos ARCO.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>Para el ejercicio de
  cualquiera de los derechos ARCO, usted deberá</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'> p</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>resentar la solicitud respectiva a travé</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>s </span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>del siguiente medio: <br>
  <br>
  enviar correo a info@identicodf.com.mx <o:p></o:p></span></p>
  </td>
 </tr>
</table>

</div>

<p class=MsoNormal><span style='mso-fareast-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 align=left
 width="100%" style='width:100.0%;border-collapse:collapse;mso-yfti-tbllook:
 1184;mso-table-lspace:2.25pt;mso-table-rspace:2.25pt;mso-table-anchor-vertical:
 paragraph;mso-table-anchor-horizontal:column;mso-table-left:left;mso-padding-alt:
 0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='mso-element:frame;mso-element-frame-hspace:2.25pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  column;mso-height-rule:exactly'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:black'>Para
  conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO,
  ponemos a su disposició</span><span lang=ES style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>n e</span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>l siguiente medio:<br>
  <br>
  Enviar correo a info@identicodf.com.mx<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='mso-fareast-font-family:"Times New Roman";
display:none;mso-hide:all'><o:p>&nbsp;</o:p></span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 align=left
 width="100%" style='width:100.0%;border-collapse:collapse;mso-yfti-tbllook:
 1184;mso-table-lspace:2.25pt;mso-table-rspace:2.25pt;mso-table-anchor-vertical:
 paragraph;mso-table-anchor-horizontal:column;mso-table-left:left;mso-padding-alt:
 0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='mso-element:frame;mso-element-frame-hspace:2.25pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  column;mso-height-rule:exactly'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:black'><br>
  Los datos de contacto de la persona o departamento de datos personales, que
  est</span><span style='font-size:10.0pt;font-family:"Mongolian Baiti";
  mso-fareast-font-family:"Times New Roman";color:black'>ᠡ</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'> cargo de dar tr᭩te a las solicitudes de
  derechos ARCO, son los siguientes: <o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='mso-element:frame;mso-element-frame-hspace:2.25pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  column;mso-height-rule:exactly'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='mso-element:frame;mso-element-frame-hspace:2.25pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  column;mso-height-rule:exactly'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:black'>a)
  Nombre de la persona o departamento de datos personales: Identico de Mexico
  SA de CV<br>
  b) Domicilio: calle AV. Ejercito Nacional 505 Ofc. 401, colonia Granada,
  ciudad Ciudad de Mexico, municipio o delegació</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n M</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>iguel Hidalgo, c.p. 11520, en la entidad de
  Ciudad de Mexico, paMexico<br>
  c) Correo electró</span><span class=SpellE><span lang=ES style='font-size:
  10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>nico</span></span><span style='font-size:
  10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>: info@identicodf.com.mx<br>
  d) Número telefó</span><span class=SpellE><span lang=ES style='font-size:
  10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>nico</span></span><span style='font-size:
  10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>: +52 558789 4997<br>
  <br>
  <b>Usted puede revocar su consentimiento para el uso de sus datos personales</b><br>
  <br>
  Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para
  el tratamiento de sus datos personales. Sin embargo, es importante que tenga
  en cuenta que no en todos los casos podremos atender su solicitud o concluir
  el uso de forma inmediata, ya que es posible que por alguna obligació</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n l</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>egal requiramos seguir tratando sus datos
  personales. Asimismo, usted deberá</span><span lang=ES style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'> c</span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>onsiderar que para ciertos fines, la revocació</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n d</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>e su consentimiento implicará</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'> q</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>ue no le podamos seguir prestando el servicio
  que nos solicitó la conclusió</span><span lang=ES style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>n d</span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>e su relac</span><span class=SpellE><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>ió</span></span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>n nosotros.<br>
  <br>
  Para revocar su consentimiento deberá</span><span lang=ES style='font-size:
  10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'> p</span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>resentar su solicitud a travé</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>s </span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>del siguiente medio: <br>
  <br>
  enviar correo a info@identicodf.com.mx o por telefono al +52 55 8789 4997 <o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;mso-yfti-lastrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='margin-bottom:12.0pt;mso-element:frame;mso-element-frame-hspace:
  2.25pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;
  mso-element-anchor-horizontal:column;mso-height-rule:exactly'><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'><br>
  Para conocer el procedimiento y requisitos para la revocació</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n d</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>el consentimiento, ponemos a su disposició</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n e</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>l siguiente medio:<br>
  <br>
  a travé</span><span lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:ES'>s
  </span><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>de correo electronico
  y/o al telefono + 52 55 8789 4997<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width="100%"
 style='width:100.0%;border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:
 0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><b><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>C</span></b><span
  class=SpellE><b><span lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:ES'>omó</span></b></span><b><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'> </span></b><b><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>puede limitar el uso o divulgació</span></b><b><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n d</span></b><b><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>e su informació</span></b><b><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n p</span></b><b><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>ersonal? <o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='margin-bottom:12.0pt'><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>Con objeto de que usted pueda limitar el uso y divulgació</span><span
  lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n d</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>e su informació</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>n p</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>ersonal, le ofrecemos los siguientes medios: <br>
  <br>
  enviar correo a info@identicodf.com.mx o llamar al +52 55 8789 4997<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
</table>

</div>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 align=left
 width="100%" style='width:100.0%;border-collapse:collapse;mso-yfti-tbllook:
 1184;mso-table-lspace:2.25pt;mso-table-rspace:2.25pt;mso-table-anchor-vertical:
 paragraph;mso-table-anchor-horizontal:column;mso-table-left:left;mso-padding-alt:
 0cm 0cm 0cm 0cm'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width="100%" style='width:100.0%;padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='mso-element:frame;mso-element-frame-hspace:2.25pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  column;mso-height-rule:exactly'><b><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:black'><br>
  C</span></b><span class=SpellE><b><span lang=ES style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>omó</span></b></span><b><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'> </span></b><b><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>puede conocer los cambios en este aviso de
  privacidad?<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='mso-element:frame;mso-element-frame-hspace:2.25pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  column;mso-height-rule:exactly'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:black'>&nbsp;<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes'>
  <td style='padding:0cm 0cm 0cm 0cm'>
  <p class=MsoNormal style='mso-element:frame;mso-element-frame-hspace:2.25pt;
  mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:
  column;mso-height-rule:exactly'><span style='font-size:10.0pt;font-family:
  "Arial",sans-serif;mso-fareast-font-family:"Times New Roman";color:black'>El
  presente aviso de privacidad puede sufrir modificaciones, cambios o
  actualizaciones derivadas de nuevos requerimientos legales; de nuestras
  propias necesidades por los productos o servicios que ofrecemos; de nuestras
  prᣴicas de privacidad; de cambios en nuestro modelo de negocio, o por otras
  causas.<br>
  <br>
  Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir
  el presente aviso de privacidad, a travé</span><span lang=ES
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-ansi-language:ES'>s </span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>de: </span><span lang=ES style='font-size:
  10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>nuestra pagina www.identicomexico.com</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'><br>
  <br>
  El procedimiento a travé</span><span lang=ES style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'>s </span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>del cual se llevará</span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-ansi-language:ES'> </span><span style='font-size:10.0pt;
  font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black'>a cabo las notificaciones sobre cambios o actualizaciones al
  presente aviso de privacidad es el siguiente: <br>
  <br>
  Se publi</span><span lang=ES style='font-size:10.0pt;font-family:"Arial",sans-serif;
  mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:ES'>c</span><span
  style='font-size:10.0pt;font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black'>ará en nuestro sitio de internet
  www.identicomexico.com<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='mso-fareast-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></p>

</div>
<a href="https://identicomexico.com" >Volver a identico</a>
  `);
});

app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="/static/css/2.app.css">
    <link rel="stylesheet" href="/static/css/13.app.css">
  </head>
  <body>
    <div id="app"></div>
   
  </body>
  <script async src="/assets/app.js"></script>
  <!-- Start of  Zendesk Widget script -->
  <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=1055a334-fb19-4175-949d-e668130bcd5b"> </script>
  <!-- End of  Zendesk Widget script -->
</html>  
  `);
});

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`Server runnning on ${PORT}`);
});
