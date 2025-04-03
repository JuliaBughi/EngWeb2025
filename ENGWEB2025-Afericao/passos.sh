docker start mongoEW
docker cp dataset.json mongoEW:/tmp
docker exec -it mongoEW sh

cd tmp
ls

mongoimport -d livros -c livros dataset.json --jsonArray 
# --jsonArray porque aqui o dataset começa e acaba com []

mongosh
use livros

# para apagar uma db "x" db.dropDatabase() depois do use "x"

npx express-generator --view=pug apiDados
#no www, trocar port e colocar console log com o link na função onListening
#no app.js, apagar rotas nao necessarias e modificar as existentes (ex: /books)

#no app.js adicionar:
var mongoose = require("mongoose");

var mongoDB = 'mongodb://127.0.0.1:27017/EW2025';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
  console.log("Conexão ao MongoDB realizada com sucesso!");
});

#criar pastas "models" e "controllers"
cd apiDados
npm i
npm i mongoose
npm start 

#para a ui repetir 
npx express-generator --view=pug UIBooks
cd UIBooks
npm i
npm i axios --save
npm start



