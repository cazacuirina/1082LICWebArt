const Activitate = require("../models/activitati");
const Utilizatori = require("../models/utilizatori");
const Participant = require("../models/participanti");
const { Op } = require("sequelize");

const getAllActivitatiParticipant = async (req,res) => {
	try{
		const activitati = await Participant.findAll({attributes: ['activitatiId'],
		raw : true, where:{utilizatoriId:req.params.studId}});
		if(activitati){
			const ids = activitati.map(activ => activ.activitatiId);
			const activitatiPartic = await Activitate.findAll({where:{id:{[Op.in]: ids}}});
			if(activitatiPartic)
				res.status(200).json(activitatiPartic);
			else
				res.status(404).json({message:"Nu exista activitati ale participantului"});
		}
		else
			res.status(404).send({ message: "Activitatile nu au fost gasite" });
	}
	catch(err){
		res.status(500).json(err);
	}
}

module.exports = {
	getAllActivitatiParticipant
};