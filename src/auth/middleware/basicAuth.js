const base64 = require("base-64");
const { users } = require("../../data/index.js");

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return _authError();
  }

  const basic = req.headers.authorization.split(" ").pop();
  const [user, pass] = base64.decode(basic).split(":");

  try {
    req.user = await users.authenticateBasic(user, pass);
    next();
  } catch (e) {
    _authError();
  }

  function _authError() {
    res.status(403).send("Invalid Login");
  }
};
