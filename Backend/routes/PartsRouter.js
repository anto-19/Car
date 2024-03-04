const { Router } = require("express");

const {
  getParts,
  saveParts,
  deleteParts,
  updateParts,
} = require("../controllers/PartsController");

const router = Router();

router.get("/getparts", getParts);
router.post("/saveparts", saveParts);
router.put("/updateparts/:id", updateParts);
router.delete("/deleteparts/:id", deleteParts);

module.exports = router;
