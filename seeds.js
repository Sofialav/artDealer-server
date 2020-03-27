const Artwork = require("./artwork/model");

async function seedDB() {
  console.log("RUNNING!!!");
  const aw1 = await Artwork.create({
    name: "Painting7",
    img: "fakeurl",
    price: 500,
    ship_country: "Germany",
    artistId: 2
  });
  const aw2 = await Artwork.create({
    name: "Painting8",
    img: "fakeurl2",
    price: 350,
    ship_country: "Italy",
    artistId: 1
  });
}

// seedDB();
