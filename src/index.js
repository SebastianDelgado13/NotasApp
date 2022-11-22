const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//inicializaciones
const app = express();
require('./database')

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    LayoutDir: path.join(app.get('views'), 'layouts'),
    partialdir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//funciones a ejecutar
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'appprivada',
    resave: true,
    saveUninitialized: true
}));

//variables globales

//rutas
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//servidor esta conectado
app.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto', app.get('port'));
});