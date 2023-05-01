// Recursos
var express = require('express'); // Recurso para Express - para instalar o Express: npm install express --save

// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3013;

// Cria o servidor55555
var app = express();

app.get('/:nome', (req, res) => {
	console.log(req.params.nome)
	req.params.nome
	res.write("<h1> Etapa 1 - INSTALACAO - EndPoint GET</h1>")
	res.end("<h2>Hello " + req.params.nome + " voce conseguiu um GET! bem sucedido</h2>");
});

// Inicia o servidor
app.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
})




