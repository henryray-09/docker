

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const pagina = fs.readFileSync("index.html");

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(pagina);
    }
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Servidor rodando na porta 3000");
});