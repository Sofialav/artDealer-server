const Sequelize = require("sequelize");
const { Router } = require("express");
const router = new Router();
const bcrypt = require("bcrypt");
const Artist = require("./model");

router.post("/artists", async (req, res, next) => {
  try {
    if (!req.body.login || !req.body.password || !req.body.email) {
      return res.status(400).send("Please supply username, email and password");
    } else {
      const artist = {
        login: req.body.login,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
      };
      const artistPost = await Artist.create(artist);
      return res.json(artistPost);
    }
  } catch (error) {
    if (Sequelize.ValidationError) {
      const message = error.errors.map(error => error.message);
      res.status(400).json(message);
    }
    next(error);
  }
});

module.exports = router;
