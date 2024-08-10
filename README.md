# API de Cadastro de Clientes

Este projeto é uma API RESTful construída com Node.js e TypeScript para o cadastro e gerenciamento de clientes. O objetivo é fornecer uma base para a criação, leitura, atualização e exclusão de registros de clientes em uma aplicação.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL para armazenar os dados dos clientes.
- **Mongoose**: Biblioteca para modelagem de objetos MongoDB em Node.js.

## Funcionalidades

- **Cadastro de Cliente**: Permite criar novos registros de clientes.
- **Listagem de Clientes**: Recupera a lista de todos os clientes cadastrados.
- **Atualização de Cliente**: Atualiza os dados de um cliente específico.
- **Remoção de Cliente**: Remove um cliente específico do banco de dados.

## Endpoints

### `POST /customers`

Cria um novo cliente.

**Request Body:**
```json
{
  "name": "Nome do Cliente",
  "email": "email@exemplo.com",
  "phone": "123456789"
}