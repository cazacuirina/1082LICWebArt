const controllerUtilizator = require("../controllers/utilizatori");
const router = require('express').Router();

router.get("/:id", controllerUtilizator.getUtilizator);
router.get("/", controllerUtilizator.getAllUtilizatori);
router.post("/login", controllerUtilizator.postUtilizatorLogin);
router.post("/", controllerUtilizator.createUtilizator);
router.put("/:id", controllerUtilizator.updateUtilizator);
router.delete("/:id", controllerUtilizator.deleteUtilizator);

module.exports = router;