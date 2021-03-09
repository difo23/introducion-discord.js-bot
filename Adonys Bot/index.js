const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const token = config.token;
const prefix = config.prefix;

// Exportamos client porque lo usaremos fuera de index.js e importamos la funcion index().
exports.client = client;
exports.prefix = prefix;
const { index } = require("./events/index");
index();

client.login(token);
