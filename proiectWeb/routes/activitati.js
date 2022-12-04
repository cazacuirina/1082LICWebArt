const controllerActivitate = require("../controllers/activitati");
const router = require('express').Router();

router.get("/:id", controllerActivitate.getActivitate);
router.get("/", controllerActivitate.getAllActivitati);
router.post("/", controllerActivitate.createActivitate);
router.post("/:profId", controllerActivitate.addActivitate);
router.post("/:studId/:codAcces", controllerActivitate.enrollActivitate);
router.put("/:codAcces", controllerActivitate.updateActivitate);
router.delete("/:codAcces", controllerActivitate.deleteActivitate);

module.exports = router;