import { model, prisma } from "../../app/models/index.js";
import { Hash } from "../../app/supports/Hash.js";
import { faker } from '@faker-js/faker';


try {
  const total = await model.user.count()
  if (total === 0) {
    for (let index = 0; index < 50; index++) {
      await model.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          username: faker.internet.userName(),
          auths: {
            create: {
              provider: prisma.AuthProvider.local,
              password: await Hash.make("12345"),
            },
          },
        },
      });
    }
  } else {
    console.log("already seeder")
  }
} catch (error) {
  console.error(error);

  process.exit(1);
} finally {
  await model.$disconnect();
}
