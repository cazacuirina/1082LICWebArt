const controllerMaterie = require("../controllers/materii");
const router = require('express').Router();

router.get("/:id", controllerMaterie.getMaterie);
router.get("/", controllerMaterie.getAllMaterii);
router.post("/", controllerMaterie.createMaterie);
router.put("/:id", controllerMaterie.updateMaterie);
router.delete("/:id", controllerMaterie.deleteMaterie);

module.exports = router;