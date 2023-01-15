const controllerInregistrare = require("../controllers/participanti");
const permisiuni = require("../middleware/middleware");
const router = require('express').Router();

//permisiuni.studPermission - prima /:activitatiId
router.get("/activitati/stud/:studId", controllerInregistrare.getAllActivitatiParticipant);

module.exports = router;