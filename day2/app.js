import express from "express";
import apiRouter from "./routers/apiRouter";
import courseRouter from "./routers/courseRouter";
import homeRouter from "./routers/homeRouter";
import routes from "./routes";

const app = express();

app.use(routes.home, homeRouter);
app.use(routes.courses, courseRouter);
app.use(routes.api, apiRouter);

export default app;
