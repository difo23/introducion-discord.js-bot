### `Paso 1:`

Decargamos el paquete de Discord.js ejecutando el comando `npm install discord.js` en nuestro terminal.

![](https://i.imgur.com/9Byl0RV.png)

### `Paso 2:`

Creamos un archivo llamado `index.js`.

![](https://i.imgur.com/PjKyWQi.png)

En este archivo vamos a colocar el siguiente código.

![](https://i.imgur.com/dY9BlNn.png)

### `Paso 3:`

Ahora vamos a crear una constante para almacenar el token.
En la linea 3 de nuestro código colocaremos lo siguiente: `const token = 'nuestro_token'`. Dicha constante se le hace referencia en la linea 9. 

**Nota:** recuerdas el token que copiamos en la `lección 001` los vamos a pegar como valor de nuestra constante.

Deberia quedar algo como esto:

![](https://i.imgur.com/necvYIl.png)

### `Paso 4:`

Si hicimos todo bien al ejecutar `node index.js` en el terminal, debera mostrarnos la siguiente salida:

![](https://i.imgur.com/Th9cgyF.png)

Ademas de que si revisamos el Discord el Bot ya sale online:

![](https://i.imgur.com/GvebjXI.png)

Eso quiere decir que esta haciendo todo bien.

### `Paso 5:`

Probablemente te estas preguntando que hace cada cosa de nuestro código.

Esto es un evento que se ejecuta al momento de que sucede una acción, en este caso cuando el cliente (bot) este listo. También hay para cuando se envia un mensaje y otros.

```
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

```

### `Nota:`

Si cerramos nuestra terminal el bot se apagara y dejara de funcionar, para evitar esto debes publicar el bot en un servidor. Aprenderemos esto mas adelante.