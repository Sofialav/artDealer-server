const express = require("express");
const cors = require("cors");
const artist = require("./artist/model");
const artwork = require("./artwork/model");
const material = require("./material/model");
const genre = require("./genre/model");
const artForm = require("./artForm/model");

const port = process.env.PORT || 4000;
const app = express();
const corsMW = cors();
const parserMW = express.json();

app.use(corsMW);
app.use(parserMW);

app.listen(port, () => console.log(`Listening on port ${port}`));
