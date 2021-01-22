import express from "express";
import { editt, removee } from "../conrtrollers";
import routes from "../routes";

const v2Router = express.Router();

// "/" in here, is equal to the "/user" which defined in app.js
v2Router.get(routes.remove, removee);
v2Router.get(routes.edit, editt);

export default v2Router;
