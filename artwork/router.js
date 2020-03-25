const { Router } = require("express");
const router = new Router();
const Artwork = require("./model");
const auth = require("../authorization/middleware");

// add new artwork
router.post("/artworks", auth, async (req, res, next) => {
  // NEED TO add artFormId validation later
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
          const newArtwork = await Artwork.create({
            ...req.body,
            artistId: req.artist.id
          });
          return res.json(newArtwork);
      }
    }
  } catch (error) {
    next(error);
  }
});
// update artwork
router.put("/artworks/:artworkId", async (req, res, next) => {
  try {
    const artwork = await Artwork.findByPk(req.params.artworkId);
    if (artwork) {
      const updArtwork = await artwork.update(req.body);
      return res.json(updArtwork);
    } else {
      return res.status(404).send("Artwork does not exist");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
