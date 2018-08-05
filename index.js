var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var usuarios = [{
    nome: "Alefe",
    sobrenome: "Souza",
    idade: 21
}, {
    nome: "Rodrigo",
    sobrenome: "Cardoso",
    idade: 31
}];

app.use(bodyParser.json());

app.use('/', express.static('public'));

app.get('/api/users', function(req, res) {
    res.send(usuarios);
});

app.get('/api/users/:index', function(req, res) {
    var usuario = usuarios[req.params.index];

    res.send(usuario);
});

app.post('/api/users', function(req, res) {
    var conteudo = req.body;

    usuarios.push(conteudo);
    res.status(201);
    res.send(conteudo);
});

app.put('/api/users/:index', function(req, res) {
    usuarios[req.params.index] = req.body;

    res.send(req.body);
});

app.delete('/api/users/:index', function(req, res) {
    usuarios.splice(req.params.index, 1);

    res.status(204);
    res.send(null);
});

app.listen(3000, function() {
    console.log('App rodando em http://localhost:3000')
});
