const express = require("express");
const app = express();
const Cat = require("./models/Cat");
const User = require("./models/User");

app.set("views", `${__dirname}/views`);
app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
  User.create({ name: "Lalo", password: "ironhack2018", job: "Architect" })
    .then(user => {
      console.log("The user is saved and its value is: ", user);
    })
    .catch(err => {
      console.log("An error happened:", err);
    });
});

app.listen(3000, () => {
  console.log("Everything is ok for now, nan");
});
