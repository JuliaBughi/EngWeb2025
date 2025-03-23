# TPC5

## Dados

Júlia Bughi Corrêa da Costa, a103993

## Sobre o TPC5

O TPC5 consistia em aprender a lidar com **MongoDB**, no lugar de json-servers.

A utilização da framework **Express.js** permitiu criar uma interface para o programa, enquanto a base de dados (alunos.json) foi servida por uma MongoDB. A API intermédia foi construída através de JavaScript.

Devido à forma que as MongoDBs funcionam, tivemos que alterar o script json para no lugar de "id" termos um "_id". Assim, não é gerado um identificador aleatório para o objeto e, sim, utiliza-se o próprio id que queremos.

Foram implementadas as operações CRUD (Create, Retrieve, Update, Delete).