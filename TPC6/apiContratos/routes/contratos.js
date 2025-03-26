var Contrato = require("../controllers/contratos")
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.entidade){
    Contrato.getContratoByEntidade(req.query.entidade)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if(req.query.tipo){
    Contrato.getContratoByTipo(req.query.tipo)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if(req.query.nipc){
    Contrato.getContratoByNIPC(req.query.nipc)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else{
    Contrato.getContratos()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
  }
});

router.get('/entidades', function(req, res, next) {
  Contrato.getEntidades()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

router.get('/tipos', function(req, res, next) {
  Contrato.getTipos()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET contrato by ID */
router.get('/:id', function(req, res, next) {
  Contrato.getContratoById(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/*POST   */
router.post('/', function(req, res, next) {
  Contrato.insert(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/*PUT   */
router.put('/:id', function(req, res, next) {
  Contrato.update(req.body, req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/*DELETE   */
router.put('/:id', function(req, res, next) {
  Contrato.delete(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


module.exports = router;
