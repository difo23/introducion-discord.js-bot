### `Paso 1:`

Vamos a nuestro `index.js` y debajo de nuestro evento `ready` vamos a crear un nuevo evento llamado `message`.

![](https://i.imgur.com/FURsptQ.png)

El evento `message` lee todo los mensajes al que el bot tiene permiso y almacena la fecha, autor, contenido, etc. 
Recuerda que `msg` es un parametro que devuelve el mensaje del usuario

### `Paso 2:`

Ahora vamos a asignar lo que hara el bot al leer un mensaje. En este caso vamos a hacer el bot le pregunte `como estas?` a todo el que diga `hola`.

![](https://i.imgur.com/X1UyxFN.png)

La condición `if` esta verificando de que el mensaje sea igual a `'hola'`. Y `msg.reply` responde con un `como estas?`.

### `Paso 3:`

Corremos la aplicación con `node index.js`.

![](https://i.imgur.com/Th9cgyF.png)

### `Paso 4:`

Si escribimos `hola` por el chat de Discord el Bot deberia respondernos.

![](https://i.imgur.com/A47Bjsu.png)

Si el Bot te responde quiere decir que hiciste todo muy bien. Podemos agregarle más complejidad como que también acepte el mismo mensaje pero en mayucula y que despues de eso que te una respuesta cuando le respondas `bien` o `mal`.