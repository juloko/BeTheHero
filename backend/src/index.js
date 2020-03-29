const express = require("express");
const routes = require("./routes")
const app = express();

app.use(express.json());
app.use(routes)
app.listen(3333)


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


