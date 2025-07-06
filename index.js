const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Rota padrão")});

app.get("/cadastro", (req, res) => {
    res.send("Rota de cadastro")
})

app.get("/login/:nome/:senha", (req, res) => {
    res.send("<h1>Olá " + req.params.nome + ", sua senha eh " + req.params.senha + "</h1>")
});

app.listen("3000", () => {
    console.log("Servidor rodando na url http://localhost:3000 através do express")
});

