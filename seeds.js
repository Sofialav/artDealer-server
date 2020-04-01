const Artwork = require("./artwork/model");
const ArtForm = require("./artForm/model");

// ARTFORMS (REQUIRED!)
async function seedArtForm() {
  console.log("RUNNING!!!");
  const painting = await ArtForm.create({
    id: 1,
    name: "Painting"
  });
  const drawing = await ArtForm.create({
    id: 2,
    name: "Drawing"
  });
  const sculpture = await ArtForm.create({
    id: 3,
    name: "Sculpture"
  });
}
// ARTWORKS for TESTING
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
seedArtForm();
