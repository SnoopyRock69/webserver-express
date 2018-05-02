const express = require('express');

const app = express();
const hbs = require('hbs');

//Identificamos el puerto asignado por heroku

const port = process.env.PORT || 3000; //si no existe el puerto corre localmente en el 3000.

//Importamos helpers.js, no requiere variable porque se ejecuta en hbs.

require('./hbs/helpers')

// Midelware: instrucción o callback que se ejecuta siempre sin importar qué Url la persona pida.
//Con esto servimos contenido estático en la web.
app.use(express.static(__dirname + '/public')); // son dos guiones bajos.

//Express hbs engine.
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

//Helpers

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Joao Camilo'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});