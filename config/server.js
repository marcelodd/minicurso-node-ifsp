const express = require('express'); // Retorna uma função
const app     = express();          // Executa a função
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');     // Diz ao express que ele deve usar o ejs como renderizador de páginas

app.use(express.static('public')); // Servir arquivos estaticos

app.use(bodyParser.urlencoded({extended: true}));



require('../routes/index')(app);
require('../routes/route')(app);

app.use((req, res, next) => {
    res.status(404);
    res.render('404.ejs');
});

module.exports = app;