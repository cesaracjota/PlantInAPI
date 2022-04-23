const express =  require('express')
const exphbs = require('express-handlebars')
const path =  require('path')
const cors = require('cors')
const session = require('express-session')
const methodOverride = require('method-override');
const {dbConnection} = require('../database');
const passport = require('passport');
///const MongoStore = require('connect-mongo');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
       
        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }
async conectarDB() {
    await dbConnection();
}
middlewares(){
    this.app.use(express.urlencoded({extended:false}));
    this.app.use(methodOverride('_method'));
    //PASSPORT
    this.app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
      }));
      this.app.use(passport.initialize());
      this.app.use(passport.session());
    // CORS
    this.app.use( cors() );

    // Lectura y parseo del body
    this.app.use( express.json() );

    // Directorio Público
    this.app.use( express.static('public') );
}
//execution(){}

//routes
routes() {
    this.app.use( require('../routes/usuarios'));
    //this.app.use( require('../routes/categorias'));
    this.app.use( require('../routes/productos'));
    this.app.use( require('../routes/login'));
    
}

listen(){
    this.app.listen( this.port, () => {
        console.log('Servidor corriendo en puerto', this.port );
    });
}
}
module.exports = Server;