const http = require("http");

/**
 * GET - Buscar um dado
 * POST - Inserir um  dado
 * PUT - Alterar um dado
 * DELETE - Remover um dado
 */

const server = http.createServer((request, response) => {

    if(request.url === "/users") {
        if (request.method === "GET") {
            return response.end("A aplicação esta no ar!")
        }
        if (request.method === "POST") {
            return response.end("Chamada POST funcionando");
        }
    }
});


    server.listen(4000, () => console.log("Server is running on port 4000"))