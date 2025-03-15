var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  var date = new Date().toISOString().substring(0, 16)
  res.render('index', { date: date });
});

router.get('/filmes', function(req, res) {
  var date = new Date().toISOString().substring(0, 16)
  axios.get('http://localhost:3000/filmes')
    .then(resp => {
      listaFilmes = resp.data;
      res.render('listafilmes', { lfilmes: resp.data, title: 'Lista de Filmes', date: date });
    })
    .catch(error => {
      console.log(error)
      res.render('error', {error: error});
    });
});

router.get('/filmes/edit/:id', function(req, res) {
  var date = new Date().toISOString().substring(0, 16)
  axios.get('http://localhost:3000/filmes/' + req.params.id)
    .then(resp => {
      filme = resp.data;
      res.render('filme', { filme: filme, date: date });
    })
    .catch(error => {
      console.log(error)
      res.render('error', {error: error});
    });
});

router.get('/filmes/delete/:id', function(req, res) {
  var date = new Date().toISOString().substring(0, 16)
  axios.get('http://localhost:3000/filmes/' + req.params.id)
    .then(resp => {
      filme = resp.data;
      res.render('confirmDelete', { filme: filme, date: date });
    })
    .catch(error => {
      console.log(error)
      res.render('error', {error: error});
    });
});

router.get('/filmes/atores/:ator', function(req, res) {
  var date = new Date().toISOString().substring(0, 16)
  axios.get('http://localhost:3000/atores?nome=' + req.params.ator)
    .then(resp => {
      const atorData = resp.data[0];
      res.render('ator', { atorData: atorData, date: date });
    })
    .catch(error => {
      console.log(error)
      res.render('error', {error: error});
    });
});  

router.post('/filmes/edit/:id', function(req, res) {
  const filmId = req.params.id;
  
  const updatedFilm = {
    id: parseInt(req.body.id),
    titulo: req.body.titulo,
    ano: parseInt(req.body.ano),
    atores: req.body.atores.split(',').map(a => a.trim()).filter(a => a),
    genero: req.body.genero.split(',').map(g => g.trim()).filter(g => g)
  };

  axios.put(`http://localhost:3000/filmes/${filmId}`, updatedFilm)
    .then(resp => {
      res.redirect('/filmes');
    })
    .catch(error => {
      console.log(error)
      res.render('error', {error: error});
    });
});

router.post('/filmes/delete/:id', function(req, res) {
  axios.delete('http://localhost:3000/filmes/' + req.params.id)
    .then(resp => {
      res.redirect('/filmes');
    })
    .catch(error => {
      console.log(error)
      res.render('error', {error: error});
    });
});

module.exports = router;
