# Livraria API

Backend do sistema de gerenciamento e venda de livros, construído com NestJS, Prisma e SQLite.

## 🚀 Como rodar o projeto localmente

**1. Instale as dependências**
```bash
npm install
```

**2. Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

**3. Crie o banco de dados (Prisma + SQLite)**

O banco é um arquivo local (`prisma/dev.db`), criado automaticamente pelo comando abaixo:
```bash
npx prisma migrate dev
```

Esse comando também roda o seed (`prisma/seed.js`), que cria o usuário administrador com o email e a senha definidos em `ADMIN_EMAIL` e `ADMIN_PASSWORD` no `.env`. Para rodar o seed de novo manualmente:
```bash
npx prisma db seed
```

**4. Rode a API**
```bash
npm run start:dev
```

A API estará disponível em: `http://localhost:3000`

## 🛠️ Comandos úteis do NestJS

O Nest CLI já vem instalado no projeto, por isso os comandos usam `npx` na frente.

**Gerar um recurso completo (module + controller + service + DTOs)**
```bash
npx nest g resource livros
```
O CLI vai perguntar o tipo de API (escolha **REST API**) e se deve gerar os pontos de CRUD (responda **Y**). Os arquivos são criados em `src/livros/` e o módulo já é registrado no `app.module.ts`.

> Na primeira vez, o `nest g resource` adiciona o pacote `@nestjs/mapped-types` no `package.json`. Rode `npm install` depois dele.

**Gerar as partes separadamente**
```bash
npx nest g module livros       # cria src/livros/livros.module.ts
npx nest g controller livros   # cria src/livros/livros.controller.ts
npx nest g service livros      # cria src/livros/livros.service.ts
```

**Opções úteis**
| Opção | O que faz |
| --- | --- |
| `--no-spec` | não cria o arquivo de teste (`.spec.ts`) |

Exemplo: `npx nest g resource autores --no-spec`

**Outros comandos**
```bash
npm run start:dev   # roda a API e reinicia sozinha a cada alteração
npm run build       # compila o projeto para a pasta dist/
npm run lint        # procura e corrige problemas no código
npm run format      # formata o código com o Prettier
```

## 🗄️ Comandos úteis do Prisma

**Depois de alterar o `prisma/schema.prisma`**, crie uma migration para aplicar a mudança no banco:
```bash
npx prisma migrate dev --name descreva-a-mudanca
```
Exemplo: `npx prisma migrate dev --name cria-tabela-livros`

**Outros comandos**
```bash
npx prisma studio          # abre uma tela no navegador para ver e editar os dados do banco
npx prisma migrate reset   # apaga o banco, recria do zero e roda o seed de novo
npx prisma generate        # atualiza o Prisma Client (use se o editor não reconhecer um model novo)
```
