const http = require('http')
const { url } = require('inspector')
const axios = require('axios')
 
http.createServer((req,res)=>{
    console.log("METHOD:" + req.method)
    console.log("URL:" + req.url)

    switch(req.method){
        case "GET":
            if (req.url === "/reparacoes"){ 
                axios.get('http://localhost:3000/reparacoes?_sort=nome')
                    .then(resp => {
                        var reparacoes = resp.data
                        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                        res.write("<h1>Reparações</h1>")
                        res.write("<ul>")
                        reparacoes.forEach(r => {
                            res.write(`<li><a href='reparacoes?nif=${r.nif}'>${r.nome}</a></li>`)
                        });
                        res.write("</ul>")
                        res.write("<h6><a href='/'>Voltar</a></h6>")    
                        res.end()
                        })
                        .catch(err => {
                            res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                            console.log(err)
                            res.end()
                        })   
            }
            //Página da Reparação: página com toda a informação de uma reparação;
            else if (req.url.match(/\/reparacoes\?nif=\d+/)){
                var nif = req.url.split('nif=')[1];
                axios.get(`http://localhost:3000/reparacoes?nif=${nif}`)
                .then(resp => {
                    var reparacao = resp.data
                    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                    res.write(`<h1>Reparação</h1>`)
                    res.write(`<pre>${JSON.stringify(reparacao)}</pre>`)
                    res.write("<h6><a href='/reparacoes'>Voltar</a></h6>")
                    res.end()
                })
                .catch(err => {
                    res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                    console.log(err)
                    res.end()
                })    
            }     
            else if (req.url === "/intervencoes"){
                axios.get('http://localhost:3000/intervencoes?_sort=codigo')
                    .then(resp => {
                        var intervencoes = resp.data
                        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                        res.write("<h1>Intervenções</h1>")
                        res.write("<ul>")
                        intervencoes.forEach(i => {
                            res.write(`<li><a href='intervencoes?codigo=${i.codigo}'>${i.codigo}, ${i.nome}</a></li>`)
                        });
                        res.write("</ul>")
                        res.write("<h6><a href='/'>Voltar</a></h6>")  
                        res.end()
                    })
                    .catch(err => {
                        res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                        console.log(err)
                        res.end()
                    })            
            }
            //Página do tipo de intervenção: dados da intervenção (código, nome e descrição) e lista de reparações onde foi realizada;
            else if (req.url.match(/\/intervencoes\?codigo=R\d+/)) {
                var codigo = req.url.split("codigo=")[1];
                axios.get(`http://localhost:3000/intervencoes?codigo=${codigo}`)
                    .then(resp => {
                        var intervencao = resp.data;
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
                        res.write(`<h1>Intervenção</h1>`);
                        res.write(`<pre>${JSON.stringify(intervencao)}</pre>`);
                        
                        axios.get(`http://localhost:3000/reparacoes?intervencoes=${codigo}`)
                            .then(resposta => {
                                var reparacoes = resposta.data;
                                res.write(`<h3>Reparações</h3>`);
                                reparacoes.forEach(r => {
                                    res.write(`<pre>${JSON.stringify(r)}</pre>`);
                                });
                                res.write("<h6><a href='/intervencoes'>Voltar</a></h6>");
                                res.end();
                            })
                            .catch(erro => {
                                res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
                                console.log(erro);
                                res.end();
                            });
                    })
                    .catch(err => {
                        res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
                        console.log(err);
                        res.end();
                    });
            }            
            else if (req.url === "/viaturas") {
                axios.get('http://localhost:3000/viaturas?_sort=marca')
                    .then(resp => {
                        var viaturas = resp.data;
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
                        res.write("<h1>Viaturas</h1>");
                        res.write("<ul>");
                        
                        var marcasModelos = {};
            
                        viaturas.forEach(v => {
                            if (!marcasModelos[v.marca]) {
                                marcasModelos[v.marca] = [];
                            }
                            marcasModelos[v.marca].push(v.modelo);
                        });
            
                        for (var marca in marcasModelos) {
                            res.write("<li>");
                            res.write(`<b><a href='/viaturas?marca=${marca}'>${marca}</a></b>`);
                            res.write("<ul>");
                            marcasModelos[marca].forEach(modelo => {
                                res.write(`<li>${modelo}</li>`);
                            });
                            res.write("</ul>");
                            res.write("</li>");
                        }
            
                        res.write("</ul>");
                        res.write("<h6><a href='/'>Voltar</a></h6>");
                        res.end();
                    })
                    .catch(err => {
                        res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
                        console.log(err);
                        res.end();
                    });
            }
            
            //Página da marca 
            else if (req.url.match(/\/viaturas\?marca=.*$/)) {
                var marca = req.url.split("marca=")[1].replace(/%20/g, " ");
                axios.get(`http://localhost:3000/viaturas?marca=${marca}`)
                .then(resp => {
                    var veiculo = resp.data
                    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                    res.write(`<h1>Veículos</h1>`)
                    res.write(`<pre>${JSON.stringify(veiculo)}</pre>`)
                    res.write("<h6><a href='/viaturas'>Voltar</a></h6>")
                    res.end()
                })
                .catch(err => {
                    res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                    console.log(err)
                    res.end()
                })    
            }  
            else{
                res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                res.write("<h1>Bem-vindo!</h1>")
                res.write("<p>Estes são os dados consultáveis da oficina:</p>")
                //Listagem das reparações
                res.write("<p><a href='/reparacoes'>Reparações</a></p>")
                //Listagem dos tipos de intervenção: lista alfabética de código das intervenções
                res.write("<p><a href='/intervencoes'>Intervenções</a></p>")
                //Listagem das marcas e modelos dos carros intervencionados: lista alfabética das marcas e modelos dos carros reparados - marca, modelo, número de carros;
                res.write("<p><a href='/viaturas'>Viaturas</a></p>")
                res.end()                   
            }  
            break;  
        default:
            res.writeHead(405, {'Content-Type' : 'text/html;charset=utf-8'})
            res.end()
            break; 
    }
}).listen(1234)

console.log("Servidor à escuta na porta 1234...")