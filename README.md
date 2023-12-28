# Desafio de Autenticação de Tokens

## Descrição do Desafio

Seu código deve analisar um token e determinar qual autenticador deve ser usado para validar o token. O desafio já fornecerá classes de autenticação chamadas `FacebookAuth` e `GoogleAuth`.
Caso o token esteja valido , deve imprimir 'Acesso Permitido!' caso contrario deve imprimir 'Acesso negado!'

## Instruções para Execução

- Primeiro, execute o comando `npm install` para instalar as dependências necessárias.
- Utilize o Node na versão `v21.1.0`.
- Sua lógica de negócio deve estar na função `execution` no arquivo `executor.ts`.
- o token e formado por um prefixo que indica qual o authenticador e um jwt
  ex:

  google eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam96aW1hckdvb2dsZSIsImlhdCI6MTcwMzc4NTEwMiwiZXhwIjoxNzAzNzg1MTAyfQ.eF_20G1bsk9Sv2lrL1IgY5GQIiXjHauu9GhwI5lvHyg

  facebook eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam96aW1hckdvb2dsZSIsImlhdCI6MTcwMzc4NTEwMiwiZXhwIjoxNzAzNzg1MTAyfQ.eF_20G1bsk9Sv2lrL1IgY5GQIiXjHauu9GhwI5lvHyg

## Regras do Desafio

- É estritamente proibido alterar arquivos existentes.
- Você pode criar qualquer arquivo novo para resolver o desafio.
