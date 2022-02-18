const
    express = require('express'),
    app = express(),
    {
        engine
    } = require('express-handlebars'),
    port = process.env.PORT || 3333,
    util = require('util'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    spotify = require('spotify-web-api-js')

require('dotenv').config()

// Handlebars
app.set('view engine', 'hbs')
app.set('views', './views')
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main'
}))

// Le Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

// MySQL
const options = {
    host: process.env.DB_HOST,
    port: process.env.PORT_MYSQL,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

db = mysql.createConnection(options)
db.query = util.promisify(db.query).bind(db)


// Router
const ROUTER = require('./back/router')
app.use('/', ROUTER)

// Démarrage du turfu
app.listen(port)

/* ___________________________________________________________________________________________ */