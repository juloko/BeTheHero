const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const {errors} = require('celebrate')
const app = express();

app.use(cors({
    // origin:''
}));
app.use(express.json());
app.use(routes)
app.use(errors())


module.exports = app;

/**
* Métodos HTTP:
*
* GET: Buscar uma informação no back-end.
* POST: Criar uma informação no back-end.
* PUT: Alterar uma informação no back-end.
* DELETE: Deletar umas informação no back-end.
*/

/** 
*
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação).
* Route Params: Parâmetros utilizados para identificar recursos após "/:".
* Request Body: Corpo da requisição, utilizado para criara ou alterar recursos.
*/


/**
 * SQL: MySQL, SQLite, PostfreeSQL, Oracle, Microsoft SQL Server.
 * NoSQL: MongoDB, CouchDB, etc.
*/

/**
 * Driver: SELECT *FROM users
 * Query Builder: table('user').select('*').where()
*/


