import "core-js";
import express from "express";
import { localsMiddleware } from "./localsMiddleware";
import mainRouter from "./mainRouter";

const app = express();
app.set("view engine", "pug");

app.use(localsMiddleware);

app.use("/", mainRouter);

export default app;
