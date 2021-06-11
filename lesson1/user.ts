import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /*
  const create = await prisma.user.create({
    data: {
      name: "Jeff",
      email: "jeffrey@a.b",
    },
  });
  const update = await prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      email: "jeff@a.b",
    },
  });
  const del = await prisma.user.delete({
    where: {
      id: 4,
    },
  });
  */
  const result = await prisma.user.findMany();
  console.log({ result });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
