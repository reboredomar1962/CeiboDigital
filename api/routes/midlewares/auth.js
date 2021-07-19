/** @format */

const jwt = require("jsonwebtoken");
const { User } = require("../../models/SchemaUser");

const accessTokenSecret = "ceiboDigital";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader, "esto es el authHeader");

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  authenticateJWT,
};
