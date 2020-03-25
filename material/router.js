const { Router } = require("express");
const router = new Router();
const Material = require("./model");

// add material
router.post("/materials", async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).send("Please supply material name!");
    } else {
      const newMaterial = await Material.create({ name: req.body.name });
      return res.json(newMaterial);
    }
  } catch (error) {
    next(error);
  }
});
// get all materials
router.get("/materials", async (req, res, next) => {
  try {
    const materials = await Material.findAll();
    const cleanMaterials = materials.map(
      material => (material = { id: material.id, name: material.name })
    );
    res.status(201).json(cleanMaterials);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
