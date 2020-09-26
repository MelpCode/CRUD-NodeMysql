const config = require('./config');
const express = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//Initialization:
const app = express();

//Settings:
app.set('port',process.env.PORT || 4000);

//Middleware:
app.use(myConnection(mysql,{
    host:config.host,
    user:config.user,
    password:config.password,
    port:config.port,
    database:config.database
},'single'));
app.use(express.json())

// Routes:
app.use('/api/menus',require('./routes/menus.route'))

module.exports = app;
