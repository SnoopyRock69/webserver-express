//Importamos módulo para creación de servidores web.
const http = require('http');

//Creamos el servidor web.
http.createServer((req, res) => {
        res.write('Hola Joao. Eres una buena persona.');
        res.end();
    })
    .listen(8080);
console.log('Escuchando el puerto 8080');