# Server Movies

Este projeto é uma API de filmes construída com Node.js e Express. A API fornece endpoints para acessar uma lista de filmes, bem como detalhes de filmes específicos através de seu ID. A aplicação utiliza middleware para tratamento de erros e suporte a CORS.

## Tecnologias Utilizadas

- *Node.js*: Ambiente de execução JavaScript no lado do servidor.
- *Express*: Framework para construir aplicações web rápidas e escaláveis em Node.js.
- *CORS*: Middleware para permitir requisições de diferentes origens.
- *JSON*: Formato de dados utilizado para enviar e receber informações.

## Instalação

1. Clone o repositório:
   bash
   git clone https://github.com/jonatasem/server-movies.git
   cd server-movies
   

2. Instale as dependências:
   bash
   npm install
   

3. Inicie o servidor:
   bash
   npm start
   
O servidor estará disponível em http://localhost:5000/api.

## Endpoints

### 1. Obter a lista de filmes

- *URL*: /movies
- *Método*: GET
- *Resposta*: Retorna um array de objetos de filmes em formato JSON.

### 2. Obter detalhes de um filme pelo ID

- *URL*: /movies/:id
- *Método*: GET
- *Parâmetros*: 
  - id: ID do filme (número inteiro).
- *Resposta*:
  - *200 OK*: Detalhes do filme em formato JSON.
  - *400 Bad Request*: Mensagem de erro se o ID não for um número válido.
  - *404 Not Found*: Mensagem de erro se o filme não for encontrado.

## Tratamento de Erros

A API conta com um middleware para tratamento de erros, que retorna mensagens apropriadas para o usuário em caso de falhas.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. Para isso, crie uma nova branch e envie um pull request.

## Licença

Este projeto é de uso livre. Sinta-se à vontade para utilizá-lo e adaptá-lo conforme necessário.
