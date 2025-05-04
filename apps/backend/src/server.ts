import Fastify from 'fastify';
import prisma from './prisma'; // Importando o Prisma centralizado

const fastify = Fastify({ logger: true });

// Rotas de exemplo
fastify.get('/players', async (request, reply) => {
  const players = await prisma.player.findMany();
  return players;
});

fastify.post('/players', async (request, reply) => {
  const { name, nickname } = request.body as { name: string; nickname: string };
  const newPlayer = await prisma.player.create({
    data: { name, nickname },
  });
  return newPlayer;
});

// Inicialização do servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Servidor rodando em http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
