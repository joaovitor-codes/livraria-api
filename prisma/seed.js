// Seed inicial: cria o usuário administrador.
// Roda com `npx prisma db seed` (e automaticamente após `npx prisma migrate dev` / `migrate reset`).
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@livraria.com';
  const senha = process.env.ADMIN_PASSWORD || 'admin123';

  const contaExistente = await prisma.conta.findUnique({ where: { email } });

  if (contaExistente) {
    console.log(`Admin ${email} já existe, nada a fazer.`);
    return;
  }

  await prisma.usuario.create({
    data: {
      nome: 'Administrador',
      tipoUsuario: 'admin',
      conta: {
        create: {
          email,
          senhaHash: await bcrypt.hash(senha, 10),
        },
      },
    },
  });

  console.log(`Admin criado: ${email}`);
}

main()
  .catch((erro) => {
    console.error(erro);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
