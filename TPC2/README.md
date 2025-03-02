# TPC2

## Dados

Júlia Bughi Corrêa da Costa, a103993

## Sobre o TPC2

Neste TPC foi proposta a criação de um serviço em nodejs que consuma a API de dados servida pelo json-server para uma escola de música, com as seguintes características:

- Página principal: Listar alunos, Listar Cursos, Listar Instrumentos;
- Página de alunos: Tabela com a informação dos alunos (clicando numa linha deve saltar-se para a página de aluno);
- Página de cursos: Tabela com a informação dos cursos (clicando numa linha deve saltar-se para a página do curso onde deverá aparecer a lista de alunos a frequentá-lo);
- Página de instrumentos: Tabela com a informação dos instrumentos (clicando numa linha deve saltar-se para a página do instrumento onde deverá aparecer a lista de alunos que o tocam).

Para realizar o objetivo proposto, foi criado o "escolademusica_server.js" (que contém a lógica do website) e o "pages.js" que contém os geradores de páginas html, com css.