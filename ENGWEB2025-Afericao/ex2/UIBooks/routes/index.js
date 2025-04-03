var express = require('express');
var axios = require('axios');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:17000/books') 
    .then(resp => {
      res.status(200).render('initialPage', {books: resp.data});
    })
    .catch(erro => {
      res.status(500).render('error', { error: erro });
    });
});

/* GET book page */
router.get('/:id', function(req, res, next) {
  axios.get(`http://localhost:17000/books/` + req.params.id)
    .then(resp => {
      res.status(200).render('bookPage', {book: resp.data});
    })
    .catch(erro => {
      res.status(500).render('error', { error: erro });
    });
});


/* GET author page */
router.get('/entidades/:idAutor', function(req, res, next) {
  axios.get('http://localhost:17000/books?author=' + req.params.idAutor)   
    .then(resp => {
      res.status(200).render('authorPage', {books: resp.data, idAutor: req.params.idAutor});
    })
    .catch(erro => {
      res.status(500).render('error', { error: erro });
    });
});

module.exports = router;
