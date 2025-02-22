import { createServer } from 'http'
import axios from 'axios'
import {genMainPage, genAlunosPage, genCursosPage, genInstrumentosPage, genAlunoPage, genCursoPage, genInstrumentoPage } from './pages.js'
import { readFile } from 'fs'

createServer(function (req, res) {
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write(genMainPage(d))
        res.end()  
    }
    else if(req.url == '/alunos'){
        axios.get('http://localhost:3000/alunos')
            .then(function(resp){
                var alunos = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(genAlunosPage(alunos, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url == '/cursos'){
        axios.get('http://localhost:3000/cursos')
            .then(function(resp){
                var cursos = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(genCursosPage(cursos, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url == '/instrumentos'){
        axios.get('http://localhost:3000/instrumentos')
            .then(function(resp){
                var instrumentos = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(genInstrumentosPage(instrumentos, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/\/alunos\/(?:A\d+|AE-\d+)$/)){
        var id = req.url.split('/')[2]
        axios.get('http://localhost:3000/alunos/' + id)
            .then(function(resp){
                var aluno = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(genAlunoPage(aluno, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/\/cursos\/C[B|S]\d+$/)){
        var id = req.url.split('/')[2]
        axios.get('http://localhost:3000/cursos/' + id)
            .then(function(resp){
                var curso = resp.data
                axios.get('http://localhost:3000/alunos?curso=' + id)
                    .then(function(resp2){
                        var alunos = resp2.data
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                        res.write(genCursoPage(curso, alunos, d))
                        res.end()
                    })
                    .catch(err => {
                        console.log("Erro: " + err)
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                        res.end('<p>Erro na obtenção de dados: ' + err + '</p>')
                    })
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/\/instrumentos\/I\d+$/)){
        var id = req.url.split('/')[2]
        axios.get('http://localhost:3000/instrumentos/' + id)
            .then(function(resp){
                var instrumento = resp.data
                var id_instrumento = instrumento["#text"]
                axios.get('http://localhost:3000/alunos?instrumento=' + id_instrumento)
                    .then(function(resp2){
                        var alunos = resp2.data
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                        res.write(genInstrumentoPage(instrumento, alunos, d))
                        res.end()
                    })
                    .catch(err => {
                        console.log("Erro: " + err)
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                        res.end('<p>Erro na obtenção de dados: ' + err + '</p>')
                    })
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/.+?w3\.css$/)){
        readFile("w3.css", function(erro, dados){
            if(erro){
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na leitura do ficheiro: ' + erro + '</p>')
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/css'})
                res.end(dados)
            }
        })
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
        res.end('<p>Operação não suportada: ' + req.url + '</p>')
    }
}).listen(3017)

console.log('Servidor à escuta na porta 3017...')
