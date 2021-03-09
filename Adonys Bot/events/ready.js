//Importamos la funcion client()
const { client } = require("../index");

//Creamos una funcion llamada ready()
const ready = () => {
	client.on('ready', () => {
		console.log(`Logged in as ${client.user.tag}!`);
	});
}

//Exportamos la funcion ready()
exports.ready = ready;