import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createMockPosts() {
  const posts = Array.from({ length: 10 }).map(() => fakerPost());

  function fakerPost() {
    return {
      title: faker.lorem.sentences({ min: 1, max: 2 }),
      content: faker.lorem.paragraphs({ min: 1, max: 5 }),
      createdAt: faker.date.past(),
    };
  }

  await prisma.post.createMany({
    data: posts,
  });
}

createMockPosts()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
