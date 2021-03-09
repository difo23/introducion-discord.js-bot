Llego la hora de hacer un pequeño Bot bien simple.
Queremos que nuestro Bot tenga:

1. Un prefix variable.
2. Responda con el avatar de un usuario.

### `Paso 1:`

Empecemos con la parte del prefix. 
Para lo que no sabe el prefix puede ser cualquier simbolo para llamar al bot. Por ejemplo en vez de decir `hola` para llamar al Bot usariamos `/hola` para llamar al Bot.
En este caso el prefix es: `/`.

Agregamos un elemento llamado `prefix` dentro del `config.json`:

![](https://i.imgur.com/GLcbDuE.png)

Listo ya terminamos de trabajar en ese archivo, lo podemos guardar y cerrar.

### `Paso 2:`

Continuamos imporando y exportando nuestro prefix en el `./index.js`.
En la linea 5 y 8 puedes ver lo que se agrego:

![](https://i.imgur.com/bgglN4U.png)

### `Paso 3:`

Ahora vamos al `./events/message.js` y ahi vamos a importar el `prefix`:

![](https://i.imgur.com/v3fCFIG.png)

Solo agregamos `, prefix` junto a `client`.
Quedaria algo como: `const { client, prefix } = require("../index");`.

### `Paso 4:`

Vamos a poner las siguientes condiciones:

1. Que el mensaje inicie con el prefix.
2. Que no sea un mensaje privado o DM.
3. Que no responda a los mensajes de los Bots.

Todo esto dentro del `./events/message.js`:

![](https://i.imgur.com/qLM4NlG.png)

### `Paso 5:`

Ahora toca la parte que hace que el bot envie tu avatar.
Parece muy complicado, pero es lo mas facil, solo tenemos que buscar una propiedad que haga eso en la Documentacion de Discord.js, aquí el link: https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=avatar

![](https://i.imgur.com/0ZDxoRT.png)

Dentro de `./events/message.js` vamos a agregar el siguiente código: 

![](https://i.imgur.com/aWO5xtw.png)

Un errorcito mio fue que puse `message` en vez de `msg`. Perdón mala mía, arreglen eso. 

### `Paso 6:`

Probamos:

![](https://i.imgur.com/Th9cgyF.png)
![](https://i.imgur.com/ZcWfxVG.png)

Todo esta funcionando perfecto.
