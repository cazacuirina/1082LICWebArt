const controllerInregistrare = require("../controllers/inregistrari");
const router = require('express').Router();

router.get("/:id", controllerInregistrare.getInregistrare);
router.get("/:materiiId", controllerInregistrare.getAllParticipantiMaterie);
router.get("/:utilizatoriId", controllerInregistrare.getAllMateriiParticipant);
router.get("/", controllerInregistrare.getAllInregistrari);
router.post("/", controllerInregistrare.createInregistrare);
//router.put("/:id", controllerInregistrare.updateInregistrare);
router.put("/:materiiId", controllerInregistrare.updateInregistrare);
//router.delete("/:id", controllerInregistrare.deleteInregistrare);
router.delete("/:utilizatoriId", controllerInregistrare.deleteInregistrare);

module.exports = router;