const controllerFeedback = require("../controllers/feedback");
const permisiuni = require("../middleware/middleware");
const router = require('express').Router();

//PERMISIUNI STUD VS PROF?
router.post("/activ/:activId/stud/:studId",  controllerFeedback.createFeedback);
router.get("/activ/:activId/count", controllerFeedback.getFeedbackCountTipProf);
router.get("/activ/:activId/stud/:studId/count", controllerFeedback.getFeedbackCountTipStud);

module.exports = router;