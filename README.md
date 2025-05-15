# Register Students - Backend

Sistema de registro de estudantes que permite cadastro, login e envio de feedbacks sobre as aulas de programação com a professora Tábata. O backend foi desenvolvido em **Node.js** com **TypeScript**, seguindo o padrão **MVC**, com **validação de dados usando Zod**, **autenticação JWT** e, futuramente, **OAuth**. O banco de dados utilizado é o **MongoDB**.

---

## :bookmark_tabs: Menu

- [Overview](#-overview)
- [Screenshot](#-screenshot)
- [Demo](#-demo)
- [Documentation](#-documentation)
- [Requirements](#-requirements)
- [Installation and usage](#-installation-and-usage)
- [Dependencies and libs](#-dependencies-and-libs)
- [Folder Structure](#-folder-structure)
- [Release History](#-release-history)
- [Authors](#-authors)
- [License](#-license)

---

## Overview

Funcionalidades principais:

- Permitir o cadastro de estudantes
- Fazer login com autenticação JWT
- Validar entradas com Zod
- Permitir que estudantes enviem feedbacks sobre as aulas
- Utilizar arquitetura MVC para organizar a aplicação
- (Em breve) Autenticação via OAuth (Google, GitHub)

---

## Screenshot

![Screenshot do sistema](./screenshot.jpg)

---

## Demo

- **Repositório GitHub:** [https://github.com/seuusuario/register-students](https://github.com/seuusuario/register-students)
- **Deploy (em breve):** [https://register-students.vercel.app](https://register-students.vercel.app)

---


## Requirements

- Node.js 18+
- MongoDB Atlas/local
- Yarn ou npm
- Variáveis de ambiente (ver `.env.example`)

---

## Installation and usage

```bash
# Clone o repositório
git clone https://github.com/TabsMacedo/register-students

# Acesse a pasta
cd register-students

# Instale as dependências
npm install

# Crie um arquivo .env com base no .env.example

# Inicie o servidor em modo desenvolvimento

npm run dev

```

## Dependencies and libs 
- Express
- TypeScript
- Zod
- Mongoose
- jsonwebtoken
- dotenv
- bcrypt

```
src/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
├── config/
└── index.ts

```

## Release History
- 0.1.0
  - Init: Primeiro release do sistema de acessos

## Authors
- [Tábata Macedo](https://github.com/tabsmacedo)

## :memo: License
Este projeto está licenciado sob a [MIT License](./LICENSE). Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
