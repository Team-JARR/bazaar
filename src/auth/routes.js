const express = require("express");

const authRouter = express.Router();

const { users } = require("../data/index.js");
const basicAuth = require("./middleware/basicAuth.js");

authRouter.post("/signup", async (req, res, next) => {
  try {
    const userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token,
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message);
  }
});

authRouter.get("/signin", basicAuth, (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token,
  };
  res.status(200).json(user);
});

module.exports = authRouter;
