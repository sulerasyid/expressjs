import {
  errorHandler,
  notFoundErrorHandler,
} from "./app/exceptions/handler.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";

const app = express();

/**
 * View engine setup.
 */
app.set("views", "views");
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.use(router);

app.use(notFoundErrorHandler);
app.use(errorHandler);

export default app;
