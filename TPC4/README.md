# TPC4

## Dados

Júlia Bughi Corrêa da Costa, a103993

## Sobre o TPC4

O TPC4 consistia em adaptar os conhecimentos prévios para a utilização da framework **Express.js**. 

Para isso, foi fornecido um dataset de filmes *"cinema.json"*, o qual foi reformatado com duas principais intenções:
1. Atribuir um id à cada filme, o que, para além de facilitar a sua pesquisa, também facilita a expansão do programa para a funcionalidade de adicionar um novo filme, por exemplo.
2. Extrair a informação necessária para cumprir a proposta de cada ator ter uma página com os filmes que participou.

Assim, foi criado o *"cinema_formatado.json"* que é o dataset utilizado pelo json-server. 

Após esse tratamento inicial, foram criadas rotas para cada página no *index.js* e as suas respetivas vistas na pasta *views*. São estas:
1. **layout:** página mais geral, com as componentes de "head" e "footer"
2. **index:** página inicial, com algumas informações sobre o tpc e um link para a lista de filmes
3. **listafilmes:** página da lista de todos os filmes, com as suas informações, link para página dos atores do elenco e botões de editar e apagar
4. **filme:** página de edição de um filme
5. **confirmDelete:** página que confirma o apagamento de um filme
6. **ator:** página com a lista de filmes de um ator

