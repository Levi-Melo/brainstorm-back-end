
  # Brainstorm

   Api desenvolvida por <a href="https://www.linkedin.com/in/levi-melo-dos-santos-5277441a1/">Levi Melo</a> para projeto de faculdade  

## Index

* [Proposta](#Proposta)
* [Techs](#Techs-Usadas)
* [Começando](#Começando)

## Proposta
Brainstorm surgiu com o objetivo de oferecer conteúdos educativos de forma totalmente gratuita a nossa plataforma de ensino proporciona
acesso aos mais diversos conteúdos com aulas gravadas e ao-vivo.
Este repositorio contem o back-end da aplicação, uma api rest com conceitos de S.O.L.I.D. e Clean Architecture.

## Techs-Usadas
- bcryptjs<br />
- class-transformer<br />
- express<br />
- TypeScript<br with /> 
- jsonwebtoken<br />
- reflect-metadata<br />
- mysql<br />
- typeorm<br />
- uuid<br />
- express-validator<br />
- nodemailer<br />
- jest<br />

## Começando
Para conseguirmos usar a api precisamos configurar o ambiente da aplicação:

- Primeiro, temos que instalar todas dependências:

```bash
npm install
# or
yarn
```

- Segundo, temos que criar o banco de dados em qualquer meio que quiser:

```bash
CREATE DATABASE *DB_NAME*
```

- Terceiro, setar variaveis de ambiente no `.env`:

```bash
  MYSQL_HOST=
  MYSQL_PORT=
  MYSQL_USER=
  MYSQL_PASSWORD=
  MYSQL_DATABASE=
```

- Quarto, criar as tabalas no banco de dados:

```bash
npm run typeorm migration:run
# or
yarn typeorm migration:run
```
- E então iniciar o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```
