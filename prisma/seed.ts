import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import times from "lodash/times";
import random from "lodash/random";

const prisma = new PrismaClient();

/**
 * Seeds 50 tweets
 */
const tweet = async () => {
  await prisma.tweet.deleteMany();
  await prisma.tweet.createMany({
    data: times(50, () => ({
      publishedAt: faker.date.past(),
      text: faker.lorem.sentences(random(1, 3)),
    })),
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

tweet();
mark();

console.log("done seeding tweets");
