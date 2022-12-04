const router = require('express').Router();
const routerMaterii = require("./materii");
const routerUtilizatori = require("./utilizatori");
const routerInregistrari = require("./inregistrari");
const routerFeedback = require("./feedback");
const routerActivitate = require("./activitati");

router.use("/materii", routerMaterii);
router.use("/utilizatori", routerUtilizatori);
router.use("/inregistrari", routerInregistrari);
router.use("/feedback", routerFeedback);
router.use("/activitati", routerActivitate);

module.exports = router;