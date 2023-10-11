import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import express from "express";
import createError from "http-errors";
import logger from "morgan";

const app = express();

// view engine setup
app.set("views", "views");
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.use(router);

app.use(
  /**
   * Catch 404 and forward to error handler.
   */
  (req, res, next) => next(createError(404)),
);

app.use(
  /**
   * Error handler.
   *
   * @param {Error} err
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
  },
);

export default app;
