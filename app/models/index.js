import { PrismaClient } from "@prisma/client";
import chalk from "chalk";

function createModel() {
  const model = new PrismaClient({
    log: [{ emit: "event", level: "query" }],
  });

  model.$on("query", event => {
    console.info(`${chalk.blue("prisma:query")} ${event.query}`);
    console.info(`${chalk.blue("prisma:params")}: ${event.params}`);
    console.info(`${chalk.blue("prisma:duration")}: ${event.duration}ms`);
    console.info(`${chalk.red("-----")}`);
  });

  return model;
}

export const model = createModel();
export * from "@prisma/client";
