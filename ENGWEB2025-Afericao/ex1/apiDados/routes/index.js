var Book = require("../controllers/books")
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  /* GET /books?charater=EEEE: devolve a lista dos livros em que EEEE faz parte do nome de um dos personagens */
  if(req.query.charater){
    Book.getBookByCharacter(req.query.charater)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }

  /* GET /books?genre=AAA: devolve a lista dos livros associados ao género (genre) AAA */
  else if(req.query.genre){
    Book.getBookByGenre(req.query.genre)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }

  else if(req.query.author){
    Book.getBookByAuthor(req.query.author)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }

  /* GET /books: devolve uma lista com todos os registos */
  else{
    Book.getBooks()
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
});

/* GET /books/genres: devolve a lista de géneros ordenada alfabeticamente e sem repetições */
router.get('/genres', function(req, res, next) {
  Book.getGenres()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

/* GET /books/characters: devolve a lista dos personagens ordenada alfabeticamente e sem repetições */
router.get('/characters', function(req, res, next) {
  Book.getCharacters()
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

/* GET /books/:id: devolve o registo com identificador id (em PR.md deves indicar o que vais usar como id) */
router.get('/:id', function(req, res, next) {
  Book.getBooksById(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

/* POST /books: acrescenta um registo novo à BD */
router.post('/', function(req, res, next) {
  Book.insert(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* PUT /books/:id: altera o registo com o identificador id */
router.put('/:id', function(req, res, next) {
  Book.update(req.body, req.params.id)
    .then(data => res.status(201).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE /books/:id: elimina da BD o registo com o identificador id */
router.delete('/:id', function(req, res, next) {
  Book.delete(req.params.id)
    .then(data => res.status(201).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

module.exports = router;


