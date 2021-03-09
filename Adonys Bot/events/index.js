//Importamos los otros archivos.
const { ready } = require("./ready");
const { message } = require("./message");

//Hacemos una funcion que va a llamar a todas las demas funciones.
const index = () => {
	ready();
	message();
}

//Exportamos nuestra funcion principal.
exports.index = index;
