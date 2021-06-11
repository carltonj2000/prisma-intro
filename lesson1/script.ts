import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  /*
  const create = await prisma.post.create({
    data: {
      title: "a letter to myself",
      content: "text about absolutely nothing",
      authorId: 1,
    },
  });
  const update = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      authorId: 2,
    },
  });
  const update2 = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      author: {
        connect: {
          email: "cheryl@a.b",
        },
      },
    },
  });
  const result1 = await prisma.user.findMany({
    where: {
      email: "carlton@a.b",
    },
    include: { Post: true },
  });
  const result2 = await prisma.user.findMany({
    select: {
      email: true,
      Post: {
        select: {
          title: true,
        },
      },
    },
  });
  const create2 = await prisma.user.create({
    data: {
      name: "Joyce",
      email: "joyce@a.b",
      Post: {
        create: {
          title: "i got this",
          content: "i know you do",
        },
      },
    },
  });
  const result3 = await prisma.user.findMany({
    where: {
      name: {
        contains: "C",
      },
    },
  });
  */
  /*
  const result4 = await prisma.user.findMany({
    skip: 1,
    take: 2,
  });
   */
  const result = await prisma.user.findMany({ include: { Post: true } });
  console.dir({ result }, { depth: null });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
