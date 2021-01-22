import express from "express";
import { coursee, mineCoursee, newCoursee } from "../conrtrollers";
import routes from "../routes";

const courseRouter = express.Router();

// "/" in here, is equal to the "/user" which defined in app.js
courseRouter.get(routes.home, coursee);
courseRouter.get(routes.courseNew, newCoursee);
courseRouter.get(routes.courseMine, mineCoursee);

export default courseRouter;
