//Importamos la funcion client() y el prefix
const { client, prefix } = require("../index");

//Creamos una funcion llamada message()
const message = () => {
	client.on('message', msg => {
		//Las condiciones en las que el Bot no se activa
		if (!msg.content.startsWith(prefix)) return;
		if (!msg.channel.type === "text") return;
		if (msg.author.bot) return;

		//Esto elimina el primer cararter del strign, es decir el prefix
		let args = msg.content.slice(prefix.length).trim().split(/ +/g);
		let command = args.shift().toLowerCase();

		if (command === 'hola') {
			msg.reply('como estas?');
		}

		if (command === 'avatar') {
			msg.reply(msg.author.displayAvatarURL());
		}
	});
}

//Exportamos la funcion message()
exports.message = message;
