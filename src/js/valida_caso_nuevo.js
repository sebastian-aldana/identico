// JavaScript Document
$(document).on("ready", inicio());

$("span.help-block").hide();//ocultamos las etiquetas de ayuda

function inicio()
{
	$("#id_marca").keyup(validar_marca);
	$("#id_fecha_campania").keyup(validar_fecha_campania);




	$("#btn_nuevo").click(validar_marca);
	$("#btn_nuevo").click(validar_fecha_campania);


	
}

/*==============================================================================================================*/
function validar_marca()
{
	var marca = document.getElementById("id_marca").value;

	if( marca == null || marca.length == 0 || /^\s+$/.test(marca) ) //valida que no sea nulo
	{
		$("#id_marca").parent().attr("class","form-group has-error");//cambia de color la caja de texto
		$("#id_marca").parent().children("span").text("Campo requerido").show();//muestra el texto de ayuda
  		return false;
	}
	else
	{
		$("#id_marca").parent().attr("class","form-group has-success");//cambia de color la caja de texto
		$("#id_marca").parent().children("span").text("Campo requerido").hide();//muestra el texto de ayuda
  		return true;
	}
}

/*==============================================================================================================*/
function validar_fecha_campania()
{
	var fecha_campania = document.getElementById("id_fecha_campania").value;

	if( fecha_campania == null || fecha_campania.length == 0 || /^\s+$/.test(fecha_campania) ) //valida que no sea nulo
	{
		$("#id_fecha_campania").parent().attr("class","form-group has-error");//cambia de color la caja de texto
		$("#id_fecha_campania").parent().children("span").text("Campo requerido").show();//muestra el texto de ayuda
  		return false;
	}

	else if( !(/^\d{4}$/.test(fecha_campania)) ) 
	{
		$("#id_fecha_campania").parent().attr("class","form-group has-error");//cambia de color la caja de texto
		$("#id_fecha_campania").parent().children("span").text("Ingresa 4 digitos numericos").show();//muestra el texto de ayud
		return false;
	}
	else
	{
		$("#id_fecha_campania").parent().attr("class","form-group has-success");//cambia de color la caja de texto
		$("#id_fecha_campania").parent().children("span").text("Campo requerido").hide();//muestra el texto de ayuda
  		return true;
	}
}

