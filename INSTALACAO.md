# Guia de Instalação e Execução

Este documento descreve o processo de configuração do ambiente de desenvolvimento para o ESM Forum (Backend e Frontend).

## 1. Backend (Node.js + Express + SQLite)

### Pré-requisitos
- Node.js (versão 16+ recomendada)
- NPM ou Yarn

### Passos para instalação
1. Clone o repositório:
   `git clone https://github.com/SEU_USUARIO/esmforum.git`
2. Acesse a pasta do projeto:
   `cd esmforum`
3. Instale as dependências:
   `npm install`
4. Execute o servidor de desenvolvimento:
   `npm run dev` (ou `npm start`, dependendo do script no package.json)

O servidor backend estará rodando localmente (normalmente na porta 3001 ou 8080, verifique o terminal).

## 2. Frontend (React)

### Passos para instalação
1. Clone o repositório:
   `git clone https://github.com/SEU_USUARIO/esmforum-react.git`
2. Acesse a pasta do projeto:
   `cd esmforum-react`
3. Instale as dependências:
   `npm install`
4. Execute a aplicação React:
   `npm start`

A interface do usuário abrirá automaticamente no navegador em `http://localhost:3000`.