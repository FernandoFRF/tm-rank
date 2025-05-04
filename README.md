# 🏓tm-rank

EM DESENVOLVIMENTO

Sistema de gerenciamento de campeonatos no formato "todos contra todos" para Tênis de Mesa. O **tm-rank** permite cadastrar jogadores, organizar confrontos, registrar resultados e gerar rankings automaticamente com base no desempenho.

## 📋 Funcionalidades

* Cadastro de jogadores.
* Criação de torneios no formato "todos contra todos".
* Registro de resultados de partidas.
* Geração automática de rankings com base em vitórias, empates e derrotas.

## ⚙️Stack

* **Backend** : Node.js + Fastify + TypeScript
* **Frontend** : Nuxt (Vue 3) com App Router
* **Banco de Dados** : SQLite usando Prisma ORM
* **Estilização** : Tailwind CSS + shadcn/ui
* **Monorepo** : Estruturado com workspaces:
  * [backend](vscode-file://vscode-app/c:/Users/FernandoRF/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
  * [frontend](vscode-file://vscode-app/c:/Users/FernandoRF/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)

## 🗃️ Modelo de Dados

O projeto utiliza o **Prisma ORM** para gerenciar o banco de dados SQLite. Abaixo está o modelo de dados atual:

* **Player** : Representa os jogadores cadastrados no sistema.
  * `id`: Identificador único do jogador.
  * `name`: Nome completo do jogador.
  * `nickname`: Apelido do jogador.
  * `createdAt`: Data de criação do registro.
  * `active`: Indica se o jogador está ativo.
* **Tournament** : Representa os torneios criados no sistema.
  * `id`: Identificador único do torneio.
  * `name`: Nome do torneio.
  * `startDate`: Data de início do torneio.
  * `endDate`: Data de término do torneio.
  * `finished`: Indica se o torneio foi finalizado.
* **Match** : Representa os confrontos entre dois jogadores em um torneio.
  * `id`: Identificador único da partida.
  * `playerAId`: Referência ao jogador A.
  * `playerBId`: Referência ao jogador B.
  * `scoreA`: Pontuação do jogador A.
  * `scoreB`: Pontuação do jogador B.
  * `date`: Data da partida.
  * `finished`: Indica se a partida foi finalizada.
* **Ranking** : Representa o desempenho de cada jogador em um torneio.
  * `id`: Identificador único do ranking.
  * `playerId`: Referência ao jogador.
  * `tournamentId`: Referência ao torneio.
  * `wins`: Número de vitórias.
  * `losses`: Número de derrotas.
  * `draws`: Número de empates.
  * `points`: Pontuação total.

## 💡Futuras possisbilidades

* **Distribuição como Executável** :
  * Transformar o projeto em um aplicativo desktop utilizando **Electron** ou  **pkg** .
* **Melhorias no Sistema de Ranking**:
  * Adicionar suporte a diferentes formatos de torneios (eliminação simples, dupla, etc.).
  * Implementar algoritmos de ranking mais avançados, como Elo ou Glicko.
* **Autenticação(❓)** :
  * Implementar suporte a autenticação com **Clerk** ou  **Supabase Auth** .
* **Deploy(❓)** :
  * **Frontend** : Deploy na  **Vercel** .
  * **Backend** : Deploy na  **Railway** .

## 🚀 Como Executar o Projeto

Pré-requisitos

* Node.js (versão 18 ou superior)
* npm (ou yarn)
* SQLite (instalado ou configurado no ambiente)

Passos

1. Clone o repositório:
   `git clone https://github.com/seu-usuario/tm-rank.git cd tm-rank`
2. Instale as dependências:
   `npm install`
3. Execute as migrações do banco de dados:
   `npx prisma migrate dev`
4. Inicie o backend e o frontend:
   `npm run dev`
5. Acesse o frontend no navegador:
   [http://localhost:3000](http://localhost:3000 "localhost")
