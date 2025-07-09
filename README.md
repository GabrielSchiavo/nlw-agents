<div align="center">

# NLW Agents - Server

</div>

<div align="center">
    <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge"/>
    <!-- <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge"/> -->
</div>

<div align="center">

Projeto desenvolvido durante o evento NLW Agents da **Rocketseat** utilizando tecnologias modernas para criação de uma API para sistema de perguntas e respostas com IA.

</div>

## 🎯 Funcionalidades Principais
- **Criação de salas** para organizar perguntas por tópico/contexto

- **Upload e transcrição de áudio** usando Google Gemini AI

- **Sistema de perguntas e respostas** com IA baseada em contexto

- **Busca semântica** usando embeddings vetoriais

- **Geração de respostas** contextualizadas pela IA

## 💡 Como Funciona
1. `Salas:` Usuários criam salas temáticas para organizar conteúdo

2. `Upload de Áudio:` Áudios são enviados e transcritos automaticamente pela IA

3. `Embeddings:` Transcrições são convertidas em vetores para busca semântica

4. `Perguntas:` Usuários fazem perguntas sobre o conteúdo das salas

5. `Respostas IA:` Sistema busca contexto relevante e gera respostas precisas

## ⚙️ Setup e Configuração

### ⚠️ Pré-requisitos:

- **Node.js** >= 22.17.0
- **Docker** e **Docker Compose**
  
### 🔧 Setup:

1. `Instalar dependências:`

   ```bash
   npm install
   ```

2. `Configurar banco de dados:`

   ```bash
   docker-compose up -d
   ```

3. `Configurar as variáveis de ambiente:` Crie um arquivo `.env` na raiz do projeto:

   ```env
   PORT=3333

   DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"

   GEMINI_API_KEY=your_api_key_here

   GEMINI_MODEL=gemini-2.5-flash
   GEMINI_EMBED_MODEL=text-embedding-004
   ```

4. `Executar migrações do banco de dados:`

   ```bash
   npx drizzle-kit migrate
   ```

5. `Executar o projeto:`

   - **Desenvolvimento:**

     ```bash
     npm run dev
     ```

   - **Produção:**
     ```bash
     npm start
     ```

## ⚡ Scripts Disponíveis

- `npm run dev` - Executa o servidor em modo de desenvolvimento com hot reload
- `npm start` - Executa o servidor em modo de produção
- `npm run db:seed` - Popula o banco de dados com dados de exemplo
- `npx drizzle-kit studio` - Inicia o visualizador de DB do Drizzle

## 🌐 Endpoints

A API estará disponível em `http://localhost:3333`

- `/health` - Health check da aplicação
- `GET /rooms` - Lista todas as salas com contagem de perguntas
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:roomId/questions` - Lista perguntas de uma sala específica
- `POST /rooms/:roomId/questions` - Cria pergunta e gera resposta com IA
- `POST /rooms/:roomId/audio` - Upload e transcrição de áudio

## ✅ Tecnologias utilizadas

- `TypeScript`
- `Node.js - 22.17.0`
- `Fastify - 5.4.0`
- `PostgreSQL Vector - 0.8.0`
- `Drizzle ORM - 0.44.2`
- `Zod - 3.25.67`
- `Google Gemini`
- `Docker`
- `Biome`

---

<div align="center">

Desenvolvido durante o **NLW** da **Rocketseat**

</div>


