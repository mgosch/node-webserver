require('dotenv').config();
const express = require('express');
const hbs= require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Victoria Gosch',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
      nombre: 'Victoria Gosch',
      titulo: 'Curso de Node'
    });
    // res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.render('elements', {
      nombre: 'Victoria Gosch',
      titulo: 'Curso de Node'
    });
    // res.sendFile(__dirname + '/public/elements.html');
});

app.get('*' , (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});