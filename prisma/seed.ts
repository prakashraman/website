import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import times from "lodash/times";
import random from "lodash/random";

const prisma = new PrismaClient();

const tweet = async () => {
  await prisma.tweet.create({
    data: {
      publishedAt: faker.date.past(),
      text: faker.lorem.sentences(random(1, 3)),
    },
  });
};

const mark = async () => {
  await prisma.tweetFetch.deleteMany();
  await prisma.tweetFetch.create({
    data: {
      at: new Date(),
    },
  });
};

console.log("seeding tweets");
times(5, async () => {
  await tweet();
});

mark();

console.log("done seeding tweets");
