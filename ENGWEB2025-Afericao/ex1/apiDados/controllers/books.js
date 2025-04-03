var Book = require('../models/books')

module.exports.getBooks = () => {
    return Book.find().exec()
}

module.exports.getBooksById = id => {
    return Book.findOne({_id: id}).exec()
}

module.exports.getBookByCharacter = character => {
    return Book.find({characters: { $in: [character]}}).exec()
}

module.exports.getBookByGenre = genre => {
    return Book.find({genres: { $in: [genre]}}).exec()
}

module.exports.getGenres = () => {
    return Book.aggregate([
        { $unwind: "$genres" },  
        { $group: { _id: "$genres" }},  
        { $sort: { "_id": 1 }}  
      ]).exec().then(results => results.map(item => item._id))
}

module.exports.getCharacters = () => {
    return Book.aggregate([
        { $unwind: "$characters"},
        { $group: { _id: "$characters"}},
        { $sort: { "_id": 1}}
    ]).exec().then(results => results.map(item => item._id))
}

module.exports.getBookByAuthor = author => {
    return Book.find({author: {$in: [author]}}).exec()
}

module.exports.insert = book => {
    var newBook = new Book(book)
    return newBook.save()
}

module.exports.delete = id => {
    return Book.findByIdAndDelete(id).exec()
}

module.exports.update = (book, id) => {
    return Book.findByIdAndUpdate(id, book, {new: true}).exec()
}
