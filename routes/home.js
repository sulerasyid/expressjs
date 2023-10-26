import { Router } from "express";
const router = Router();

/* GET home page. */
router.get("/", (req, res) => res.render("home", { title: "Express" }));

export default router;
