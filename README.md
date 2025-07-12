# NLW Agents

Projeto desenvolvido durante um evento da **Rocketseat**, focado na criação de uma API para gerenciamento de salas com agentes.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - ORM type-safe para TypeScript
- **pgvector** - Extensão PostgreSQL para vetores
- **Docker** - Containerização
- **Zod** - Validação de schemas
- **Biome** - Linter e formatter

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── schema/          # Schemas do banco de dados
│   ├── migrations/      # Migrações do banco
│   └── http/           # Rotas HTTP
├── env.ts              # Configurações de ambiente
└── server.ts           # Servidor principal
```

## 🛠️ Configuração

1. **Clone o repositório**
2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   ```bash
   cp .env.example .env
   ```

4. **Inicie o banco de dados:**
   ```bash
   docker-compose up -d
   ```

5. **Execute o seed do banco:**
   ```bash
   npm run db:seed
   ```

## 🏃‍♂️ Executando

- **Desenvolvimento:**
  ```bash
  npm run dev
  ```

- **Produção:**
  ```bash
  npm start
  ```

## 🏗️ Padrões Utilizados

- **Repository Pattern** - Organização da camada de dados
- **Type-safe APIs** - Validação com Zod e TypeScript
- **RESTful Architecture** - Estrutura de rotas padronizada
- **Environment Configuration** - Configuração centralizada
- **Database Migrations** - Controle de versão do banco

## 📡 API

A API roda por padrão na porta `3333` e inclui:

- `GET /health` - Health check
- `GET /rooms` - Listagem de salas

---

Desenvolvido com ❤️ durante o evento da Rocketseat