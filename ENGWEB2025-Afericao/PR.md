# Aferição EngWeb25

## Dados

Júlia Bughi Corrêa da Costa, a103393

## Sobre

Para realizar este teste de aferição, a persistência de dados foi feita em MongoDB. Para isso, foi feito um setup que consistiu em:

1. Criar um script em python, que formata o dataset.json fornecido de modo a tornar possível algumas operações necessárias para a consulta posterior;
2. Fazer uma cópia do dataset para o Docker, onde está a MongoDB;
3. Seguir os comandos do ficheiro *passos.sh*.

De seguida, foi criada uma apiDados que vai buscar a informação ao mongoDB e devolve os jsons correspondentes às queries.

Posteriormente, criou-se a UIBooks, a interface da aplicação. 

Para rodar a aplicação, devemos:

1. Abrir o docker: "docker start mongoEW"
2. "npm start" (apiDados primeiro, depois UIBooks)