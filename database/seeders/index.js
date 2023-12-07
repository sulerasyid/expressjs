import { model, prisma } from "../../app/models/index.js";
import { Hash } from "../../app/supports/Hash.js";

try {
  await model.user.upsert({
    where: { username: "ianrizky" },
    update: {},
    create: {
      username: "ianrizky",
      email: "ian.rizkypratama@gmail.com",
      name: "Septianata Rizky Pratama",
      auths: {
        create: {
          provider: prisma.AuthProvider.local,
          password: await Hash.make("12345"),
        },
      },
    },
  });
} catch (error) {
  console.error(error);

  process.exit(1);
} finally {
  await model.$disconnect();
}
