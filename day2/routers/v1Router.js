import express from "express";
import { buyy, refundd } from "../conrtrollers";
import routes from "../routes";

const v1Router = express.Router();

// "/" in here, is equal to the "/user" which defined in app.js
// v1Router.get(routes.buy, buyy);
// v1Router.get(routes.refund, refundd);

// v1Router.get(routes.home, (req, res) => res.send("user's dick!"));
v1Router.get(routes.buy, buyy);
v1Router.get(routes.refund, refundd);

export default v1Router;
