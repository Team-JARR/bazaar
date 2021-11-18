const express = require("express");

const app = express();
const authRouter = require("./auth/routes.js");
const router = require("./routes/routes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(201).send("Welcome to Bazaar!");
});

app.use(authRouter);
app.use(router);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  },
};
