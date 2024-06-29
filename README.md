# Projeto Cypress

Este é um projeto de testes automatizados utilizando Cypress.
## Requisitos
Para executar o projeto, é necessário ter o Node.js instalado na versão 21.7.1 ou superior. A versão utilizada do Cypress neste projeto é a 12.17.4.

## Configuração

Para que o projeto funcione corretamente, é necessário criar localmente o arquivo `cypress.env.json` com a seguinte estrutura:

```json

{
    "user_name": "",
    "user_password": ""
}

```

## Documentação da API

A documentação da API utilizada nos testes, bem como o usuario e senha para autenticação podem ser encontrados em: [https://api-desafio-qa.onrender.com/docs/](https://api-desafio-qa.onrender.com/docs/)

## Integração Contínua

Este projeto utiliza GitHub Actions para rodar a automação dos testes a cada merge realizado no repositório de testes na branch master. O workflow do GitHub Actions está configurado para executar os testes automaticamente, garantindo que a aplicação esteja sempre em conformidade com as especificações definidas.