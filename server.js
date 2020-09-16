const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

// middlewar calback verifica niveles de acceso
app.use( express.static( __dirname + '/public'));

// express hbs
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

  res.render('home', {
    nombre: 'tahirih jaliri'
  })
});

app.get('/about', (req, res) => {

  res.render('about', {
    nombre: 'Tahi'
  })
});

app.listen(3000, () => {
  console.log('Escuchando peticiones en el puerto 3000');
})


