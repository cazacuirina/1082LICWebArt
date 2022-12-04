const controllerFeedback = require("../controllers/feedback");
const router = require('express').Router();

router.get("/", controllerFeedback.getAllFeedback);
router.get("/count", controllerFeedback.getFeedbackCountTip);
router.get("/:tip", controllerFeedback.getFeedbackTip);
router.post("/", controllerFeedback.createFeedback);

module.exports = router;