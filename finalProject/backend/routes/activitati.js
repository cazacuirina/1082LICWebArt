const controllerActivitate = require("../controllers/activitati");
const permisiuni = require("../middleware/middleware");
const router = require('express').Router();

//CU PERMISIUNI? permisiuni.profPermission permisiuni.studPermission
router.post("/creare/prof/:profId", controllerActivitate.addActivitate);
router.post("/inrolare/stud/:studId/codActivitate/:codAcces",  controllerActivitate.enrollActivitate);
router.get("/:id", controllerActivitate.getActivitate);

module.exports = router;