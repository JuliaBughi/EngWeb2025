var express = require('express');
var router = express.Router();
var Aluno = require('../controllers/alunos');
const { route } = require('../app');

/* GET alunos listing */
router.get('/', function(req, res, next) {
  var date = new Date().toISOString().slice(0, 16).replace('T', ' ')
  Aluno.list()
    .then(data => res.render('index', {lista: data, date: date}))
    .catch(erro => res.render('error', {error: erro}))
});

/* POST new aluno */
router.get('/registo', function(req, res, next){
  var date = new Date().toISOString().slice(0, 16).replace('T', ' ')
  res.render('newAlunoForm', {date: date})
})

router.post('/registo', function(req, res, next) {
  Aluno.insert(req.body)
    .then(res.redirect('/alunos'))
    .catch(erro => res.render('error', {error: erro}))
});

/* PUT aluno by id */
router.get('/edit/:id', function(req, res, next){
  var date = new Date().toISOString().slice(0, 16).replace('T', ' ')
  Aluno.findById(req.params.id)
  .then(data => res.render('editAlunoForm', {a: data, date: date}))
  .catch(erro => res.render('error', {error: erro}))
})

router.post('/edit/:id', function(req, res, next) {
  Aluno.update(req.params.id, req.body)
    .then(res.redirect('/alunos'))
    .catch(erro => res.render('error', {error: erro}))
});

/* DELETE aluno by id */
router.get('/delete/:id', function(req, res, next) {
  Aluno.delete(req.params.id)
    .then(res.redirect('/alunos'))
    .catch(erro => res.render('error', {error: erro}))
});

module.exports = router;

