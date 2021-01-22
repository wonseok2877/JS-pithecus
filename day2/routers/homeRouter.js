import express from "express";
import routes from "../routes";
import { confirmm, homee, joinn, loginn } from "../conrtrollers";

const homeRouter = express.Router();

// "/" in here, is equal to the "/user" which defined in app.js
homeRouter.get(routes.home, homee);
homeRouter.get(routes.join, joinn);

homeRouter.get(routes.login, loginn);
homeRouter.get(routes.account, confirmm);

export default homeRouter;
