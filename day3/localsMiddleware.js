import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.Groutes = routes;
  res.locals.GsiteName = "";
  res.locals.Gtitle = "";
  res.locals.GpageTitle = "insta 😎";
  next();
};
