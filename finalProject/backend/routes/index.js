const router = require('express').Router();
const routerUtilizator = require("./utilizatori");
const routerParticipant = require("./participanti");
const routerFeedback = require("./feedback");
const routerActivitate = require("./activitati");

router.use("/utilizatori", routerUtilizator);
router.use("/participanti", routerParticipant);
router.use("/feedback", routerFeedback);
router.use("/activitati", routerActivitate);

module.exports = router;