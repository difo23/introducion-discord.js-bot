### `Paso 1:`

Ahora bien, va a llegar un momento en el que nuestro código sera muy largo que mantenerlo en un mismo archvio va hacer que sea mas dificil de entender.
Para eso vamos a crear un archivo llamado `config.json`.

![](https://i.imgur.com/yBt0bKy.png)

### `Paso 2:`

Dentro del archivo `config.json` agregamos nuestros token, el que esta en `index.js`

![](https://i.imgur.com/fkrEmQW.png)

### `Paso 3:`
Ahora vamos al `index.js` a obtener los datos de nueste 
archivo `config.json`, temporalmente comentamos la `constante token` y creamos una cosntante llamada config poniendo el siguiente código: `const config = require('./config.json')`

![](https://i.imgur.com/fIY7qZ3.png)

Quitamos el comentario de la `constante token`, borramos el token y vamos a poner `config.token`.
**config** hace referencia al documento `config.json` y **token** hace referencia al elemento `token` del al documento `config.json`.

![](https://i.imgur.com/mH8DA5s.png)

### `Paso 4:`

Ahora sigue extraer los eventos en otro archivo, por lo que vamos a crear una carpeta llamada `events`. 
Dentro de esta carpeta creamos 3 archivos:
- `index.js`
- `ready.js`
- `message.js`

![](https://i.imgur.com/EwLzWZW.png)

**Nota:** tenga en cuenta que ahora hay 2 archivos llamados index.

### `Paso 5:`

Empecemos por parte, primero vamos a trabajar con el archivo `./index`. 
Comentamos el código de los eventos `ready` y `message`.

![](https://i.imgur.com/H7olsuL.png)

### `Paso 6:`

Vamos a exportar e importar todo lo necesario:

![](https://i.imgur.com/MWRtdDt.png)

### `Paso 7:`

Ahora en `./events/index.js`, vamos a colocar lo siguiente:

![](https://i.imgur.com/8wE0UZl.png)

### `Paso 8:`

Tenemos que colocar y exportar cada uno de los eventos, en este caso tenemos 2, `ready` y `message`.
Empecemos por `ready`, abrimos el archivo con dicho nombre y agregamos lo siguiente:

![](https://i.imgur.com/AT5Lhe1.png)

Este mismo código lo vamos a copiar también en el archivo `message.js`, pero le vamos cambiar el donde dice `ready` por `message`.

![](https://i.imgur.com/BzPfAcE.png)

### `Paso 9:`

Ahora buscamos los eventos que comentamos en el `./index.js` y vamos a tomar cada uno de ellos y lo vamos a pegar dentro de su respectiva función:

**ready:**

![](https://i.imgur.com/gHX9cao.png)

**message:**

![](https://i.imgur.com/oOr5vOH.png)

### `Paso 10:`

Y listo, queda correr nuestra App para probar que este funcionando:

![](https://i.imgur.com/Th9cgyF.png)

Si probamos en Discord deberia estar todo igual que antes, la unica diferencia es que ahora el código esta mas optimizado y ordenado:

![](https://i.imgur.com/qFjh5dr.png)

### `Dato curioso:`

El Bot también responde mensajes privados, más adelante veremos como quitar eso.