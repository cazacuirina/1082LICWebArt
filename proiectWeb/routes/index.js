const router = require('express').Router();
const routerMaterii = require("./materii");
const routerUtilizatori = require("./utilizatori");
const routerInregistrari = require("./inregistrari");

router.use("/materii", routerMaterii);
router.use("/utilizatori", routerUtilizatori);
router.use("/inregistrari", routerInregistrari);

module.exports = router;