const express = require("express");

const app = express();

app.use(express.json());
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

app.post("/users",(request,response)=>{
    const params = request.body
  
    console.log(params)
  
    return response.json({
        evento:"Semana OminiStack 11.0",
        aluno: "Memel Lima"
    })
})

app.listen(3333)