const { Router } = require("express");
const router = new Router();
const Artwork = require("./model");
const auth = require("../authorization/middleware");

router.post("/artworks", auth, async (req, res, next) => {
  try {
    if (req.artist) {
      switch (true) {
        case !req.body.name:
          return res.status(400).send("Please supply artwork's name!");
        case !req.body.img:
          return res.status(400).send("Please supply artwork's photo!");
        case !req.body.price:
          return res.status(400).send("Please supply artwork's price!");
        case !req.body.ship_country:
          return res.status(400).send("Please supply country of shipping!");
        default:
          const newArtwork = await Artwork.create(req.body);
          return res.json(newArtwork);
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
