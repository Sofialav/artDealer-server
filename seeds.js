const Artwork = require("./artwork/model");

async function seedDB() {
  console.log("RUNNING!!!");
  const aw1 = await Artwork.create({
    name: "Painting1",
    img: "fakeurl",
    price: 100,
    ship_country: "Spain"
  });
  const aw2 = await Artwork.create({
    name: "Painting2",
    img: "fakeurl2",
    price: 200,
    ship_country: "Italy"
  });
}

// seedDB();
