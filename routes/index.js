import homeRouter from "./home.js";
import usersRouter from "./users.js";
import express from "express";

const router = express.Router();

router.use("/", homeRouter);
router.use("/users", usersRouter);

export default router;
