var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:16000/contratos')   //?_sort=_id
    .then(resp => {
      res.status(200).render('initialPage', {contratos: resp.data});
    })
    .catch(erro => {
      res.status(500).render('error', { error: erro });
    });
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:16000/contratos/' + req.params.id)
    .then(resp => {
      res.status(200).render('contratoPage', {contrato: resp.data});
    })
    .catch(erro => {
      res.status(500).render('error', { error: erro });
    });
});

router.get('/entidades/:nipc', function(req, res, next) {
  axios.get('http://localhost:16000/contratos?nipc=' + req.params.nipc)
    .then(resp => {
      res.status(200).render('entidadePage', {contratos: resp.data});
    })
    .catch(erro => {
      res.status(500).render('error', { error: erro });
    });
});

module.exports = router;
