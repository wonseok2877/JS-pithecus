import express from "express";
import { homeee, loginnn, photosss, profileee } from "./mainController";
import routes from "./routes";

const mainRouter = express.Router();

mainRouter.get(routes.home, homeee);
mainRouter.get(routes.login, loginnn);
mainRouter.get(routes.photos, photosss);
mainRouter.get(routes.profile, profileee);

export default mainRouter;
