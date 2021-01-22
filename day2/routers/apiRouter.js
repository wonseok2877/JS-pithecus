import express from "express";
import { apiDocc } from "../conrtrollers";
import routes from "../routes";
import v1Router from "./v1Router";
import v2Router from "./v2Router";

const apiRouter = express.Router();

// "/" in here, is equal to the "/user" which defined in app.js
apiRouter.get(routes.home, apiDocc);

apiRouter.use(routes.vOne, v1Router);
apiRouter.use(routes.vTwo, v2Router);

export default apiRouter;
