const express = require("express");
const app = express();
const PORT = 3101;

const handleProtected = (req, res) => {
  res.send("you shouln't come here !!");
};
const handleContact = (req, res) => {
  res.send("Contact Us");
};
const handleIntro = (req, res) => {
  res.send("About Us");
};
const handleHome = (req, res) => {
  res.send("it's our home !");
};

const betweenProtected = (req, res, next) => {
  console.log("you shouln't come here !!");
  res.redirect("/");
};

const betweenHome = (req, res, next) => {
  console.log("i'm middleware !");
  next();
};

app.use(betweenHome);

app.get("/protected", betweenProtected, handleProtected);
app.get("/contact", handleContact);
app.get("/about-us", handleIntro);
app.get("/", handleHome);

const handleListening = () => {
  console.log(`listening at http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);
