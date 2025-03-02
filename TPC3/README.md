# TPC3

## Dados

Júlia Bughi Corrêa da Costa, a103993

## Sobre o TPC3

O TPC3 propõe a criação de uma API REST que trata das operações CRUD sobre uma BD.

Para isso, como é hábito, há uma página de templates HTML e um *server* JavaScript. No servidor, as operações CRUD estão dispostas num switch:
+ **GET** : fazem as operações de leitura 
+ **POST** : fazem as operações de escrita
+ **PUT** : fazem as operações de atualização
+ **DELETE** : fazem as operações de remoção

Para além disso, utiliza-se da ferramenta *forms*, que permite que dados sejam coletados de forma assíncrona, evitando muitas iterações entre servidor e cliente.