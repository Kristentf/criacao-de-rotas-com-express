const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")});

app.get("/cadastro", (req, res) => {
    res.sendFile(__dirname + "/html/cadastro.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/html/login.html")
});

app.listen("3000", () => {
    console.log("Servidor rodando na url http://localhost:3000 através do express")
});

