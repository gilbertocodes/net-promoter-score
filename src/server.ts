import express from 'express';
import 'reflect-metadata';
import "./database";  // ./database/index.ts

const app = express();


/**
 * GET => Encontrar
 * POST => Guardar
 * PUT => Alterar
 * DELETE => Apagar
 * PATCH => Alteração especifica
 * 
 */



// http://localhost:9999/users

app.get("/", (request, response) => {
    return response.json(
        {
            message: "Hello World - NLW04"
        }
    );

});


// 1 param => route, API resource
// 2 param => request, responde

app.post("/", (request, response) => {
    return response.json(
        {
            message: "Dados guardados com sucesso!"
        }
    );
});




app.listen(9999, () => console.log("Server is running!"));



