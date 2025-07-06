const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Rota inicial")
});

app.get("/cadastro", function(req, res){
    res.send("Rota de cadastro")
})

app.get("/login", function(req, res){
    res.send("Rota de login")
});

app.listen("3000", function(){
    console.log("Servidor rodando na url http://localhost:3000 através do express")
});

