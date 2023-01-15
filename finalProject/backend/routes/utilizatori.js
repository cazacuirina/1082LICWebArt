const controllerUtilizator = require("../controllers/utilizatori");
const permisiuni = require("../middleware/middleware");
const router = require('express').Router();

router.post("/signup", controllerUtilizator.createUtilizator);
router.post("/signin", controllerUtilizator.postUtilizatorLogin);
//permisiuni.profPermission
router.get("/activitati/prof/:profId", controllerUtilizator.getActivitatiProf);


module.exports = router;