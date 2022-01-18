// const express = require("express");
// const app = express();
// const users = [];
// const port = process.env.PORT || 5000;
// const bodyParser = require("body-parser");

// app.set("view engine", "pug");
// app.set("views", "views");

// app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (req, res, next) => {
//   res.render("index", { pageTitle: "Add User" });
// });

// app.get("/users", (req, res, next) => {
//   res.render("users", { pageTitle: "Users", users: users });
// });

// app.post("/add-user", (req, res, next) => {
//   users.push({ name: req.body.username });
//   res.redirect("/users");
// });

// app.listen(port, () => {
//   console.log("Listening on Port :", port);
// });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = [];

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "User", users: users });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

app.listen(5000);
