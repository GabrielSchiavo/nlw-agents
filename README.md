<div align="center">

# NLW Agents - Web

</div>

<div align="center">
    <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge"/>
    <!-- <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge"/> -->
</div>

<div align="center">

Projeto desenvolvido durante o evento NLW Agents da **Rocketseat** para demonstrar o uso de agentes inteligentes na web.

</div>

## 🎯 Funcionalidades Principais
- **Página inicial:** Formulário para criar novas salas + lista de salas existentes

- **Sala de perguntas:** Interface para enviar perguntas e visualizar respostas da IA

- **Gravação de áudio:** Funcionalidade para gravar conteúdo por voz para gerar as respostas da IA

## 💡 Como Funciona
1. `Salas:` Usuários criam salas temáticas para organizar conteúdo

2. `Upload de Áudio:` Áudios são enviados e transcritos automaticamente pela IA

3. `Perguntas:` Usuários fazem perguntas sobre o conteúdo das salas

4. `Respostas IA:` Sistema busca contexto relevante e gera respostas precisas

## ⚙️ Setup e Configuração

### ⚠️ Pré-requisitos:

- **Node.js** >= 20.0.0
  
### 🔧 Setup:

1. `Instalar dependências:`
   ```bash
   npm install
   ```

2. `Executar o projeto:`
   ```bash
   npm run dev
   ```

3. Acesse a aplicação em `http://localhost:5173`

## ⚡ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila TypeScript e gera build de produção
- `npm run preview` - Preview do build de produção

## 🔌 Backend

O projeto consome uma API ([NLW Agents - Server](https://github.com/GabrielSchiavo/nlw-agents-server)) que deve estar rodando na porta 3333. Certifique-se de que a API esteja configurada e em execução antes de iniciar o frontend (NLW Agents - Web).

## ✅ Tecnologias utilizadas

- `TypeScript`
- `Node.js - 22.17.0`
- `Vite - 7.0`
- `React - 19.1.0`
- `React Router Dom - 7.6.3`
- `TanStack React Query - 5.81.5`
- `Zod - 3.25.67`
- `Day.js - 1.11.13`
- `Tailwind CSS - 4.1`
- `Shadcn/ui`
- `Biome`

---

<div align="center">

Desenvolvido durante o **NLW** da **Rocketseat**

</div>