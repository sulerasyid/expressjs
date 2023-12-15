import { UserRepository } from "../app/repositories/UserRepository.js";
import { Router } from "express";
const {model} = require("../prisma/model")
const router = Router();

router.get("/users", async (req, res) =>
  res.json({ data: await UserRepository.model.findMany() }),
);

export default router;
