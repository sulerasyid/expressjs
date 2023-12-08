import { createRequire } from "node:module";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Express" }));
router.get("/app-version", (req, res) => {
  const require = createRequire(import.meta.url);
  const packageJson = require("../package.json");

  return res.json({
    ["app-version"]: packageJson.version,
  });
});

export default router;
