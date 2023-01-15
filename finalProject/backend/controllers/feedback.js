const Feedback = require("../models/feedback");
const Participant = require("../models/participanti");
const Utilizator = require("../models/utilizatori");
const Activitate = require("../models/activitati");
const { Sequelize, Op } = require("sequelize");
const moment=require("moment-timezone")

//agregare feedback pe momente de timp pentru o activitate
const getFeedbackCountTipProf = async (req,res) =>{
	try{
		const studenti = await Participant.findAll({attributes: ['id'],
		raw : true, where:{activitatiId:req.params.activId}});
		if(studenti){
			const ids = studenti.map(partic => partic.id);
			console.log(ids)

			const c1 = await Feedback.count({
				where: {
					  participantId: {[Op.in]: ids},
					  reactie:1
					},
			attributes:['dataOra'],
			group: 'dataOra'
			//order: [['dataOra', 'DESC']]
		})
			const c2 = await Feedback.count({
			where: {
					participantId: {[Op.in]: ids},
					reactie:2
				},
			attributes:['dataOra'],
			group: 'dataOra'
		})
			const c3 = await Feedback.count({
			where: {
					participantId: {[Op.in]: ids},
					reactie:3
				},
			attributes:['dataOra'],
			group: 'dataOra'
		})
			const c4 = await Feedback.count({
			where: {
					participantId: {[Op.in]: ids},
					reactie:4
				},
			attributes:['dataOra'],
			group: 'dataOra'
		})
				
				res.status(200).send({
					"happy":c1,
					"surprised":c2,
					"confused":c3,
					"frowny":c4,
				  });
		}
	}
					catch(err){
						res.status(500).json(err);
					}
				}

//postarea de feedback de catre un student + verificare stadiu activitate
const createFeedback = async (req,res) => {
	try {
		const participant = await Participant.findOne({where:{
			utilizatoriId:req.params.studId,
			activitatiId:req.params.activId
		}})
		if(participant){
			const stud = await Utilizator.findByPk(participant.utilizatoriId)
			if(stud){
				if(stud.tip==false){
			console.log(participant.activitatiId)
			const activitate = await Activitate.findByPk(participant.activitatiId);
			if(activitate){
			let d1=moment().add(2, 'hours').toDate()
			let d2=activitate.data
			let d3=moment(activitate.data).add(activitate.durata, 'minutes').toDate()
			console.log(d2,d1,d3)
			if(d1>d2 && d1<d3){
				let data=moment().add(2, 'hours').seconds(00).milliseconds(000).toDate()
				const feedbackNou = await Feedback.create({
					reactie:req.body.reactie,
					participantId:participant.id,
					dataOra: data
				});
				console.log(feedbackNou.dataOra)
				res.status(200).send(feedbackNou)
			}else{
				res.status(401).send({ message: "Activitatea nu este in curs de desfasurare!" });
			}
		}else{
				res.status(404).send({ message: "Activitatea nu a fost gasita!" });
			}
		}else{
			res.status(401).send({ message: "Acces interzis profesorilor" });
		}
		}
			else{
				res.status(404).send({ message: "Nu exista participantul!" });
		}
	}
	}catch(err){
		return res.status(500).json(err);
	}
}

//agregare feedback al unui student la o activitate
const getFeedbackCountTipStud = async (req,res) =>{
	try{
		const studenti = await Participant.findAll({attributes: ['id'],
		raw : true, where:{utilizatoriId:req.params.studId, activitatiId:req.params.activId}});
		if(studenti){
			const ids = studenti.map(partic => partic.id);
			console.log(ids)

			const c1 = await Feedback.count({
				where: {
					  participantId: {[Op.in]: ids},
					  reactie:1
				  }
			  })
			  const c2 = await Feedback.count({
				where: {
					  participantId: {[Op.in]: ids},
					  reactie:2
				  }
			  })
			  const c3 = await Feedback.count({
				where: {
					  participantId: {[Op.in]: ids},
					  reactie:3
				  }
			  })
			  const c4 = await Feedback.count({
				where: {
					  participantId: {[Op.in]: ids},
					  reactie:4
				  }
			  })
			  res.status(200).send({
					"happy":c1,
					"surprised":c2,
					"confused":c3,
					"frowny":c4,
				  });
		}
	}
	catch(err){
		res.status(500).json(err);
	}
}

module.exports = {
    getFeedbackCountTipProf,
	getFeedbackCountTipStud,
    createFeedback
};
