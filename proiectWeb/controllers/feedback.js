const Feedback = require("../models/feedback");
const  Sequelize  = require("sequelize");
//Dupa ora USELESS :) 
// const getFeedback = async (req, res) => {
// 	const idFeedback = req.params.id;
// 	try {
// 	  const feedbackk = await Feedback.findOne({ where: { id: idFeedback } }); //findByPk(req.params.id)
// 	  if(feedbackk)
// 	  	res.status(200).send(feedbackk);
// 	  else
// 	    res.status(404).send({ message: "Feedbackul nu a fost gasit" });
// 	} catch (e) {
// 	  res.status(500).send({ message: "Server error" });
// 	}
//  };

 //get dupa tip si le numaram

 const getAllFeedback = async (req,res) => {
	try{
		const feedbackk = await Feedback.findAll();
		if(feedbackk)
	  		res.status(200).send(feedbackk);
	  	else
	    	res.status(404).send({ message: "Nu s-a gasit niciun feedback" });
	}
	catch(err){
		res.status(500).json(err);
	}
}

const getFeedbackTip = async (req,res) => {
	try{
		const feedbacks = await Feedback.findAll({where:{Reactie:req.params.tip}});
		if(feedbacks)
	  		res.status(200).send(feedbacks);
	  	else
	    	res.status(404).send({ message: "Nu s-a gasit niciun feedback" });
	}
	catch(err){
		res.status(500).json(err);
	}
}

const getFeedbackCountTip = async (req,res) =>{
	return Feedback.findAll({
		attributes: { 
				include: [[Sequelize.fn("COUNT", Sequelize.col("feedback.Reactie")), "reactieCount"]] 
			},
			where: {
				Reactie: '1',
			}})

		// group: [ 'feedback.id' ],
		// attributes: ['id', [Sequelize. fn('count', Sequelize. col('Likes.Reactie')), 'reactiiCount']],
		// include: [{ attributes:sssss [], model: Like }],
		// });
}

/*const getFeedbackCountTip = async (req,res) => {
try{
	
	const fb1 = await Feedback.findAll({
		// attributes: { 
		// 	include: [[Sequelize.fn("COUNT", Sequelize.col("Reactie")), "reactieCount"]] 
		// },
		// where: {
		// 	Reactie: '1',
		// },
		// include: [{
		// 	model: Feedback, attributes: []
		// }]
		attributes: [[Sequelize.fn('COUNT', Sequelize.col('Reactie')), 'tipCount1']],
		where: {
			Reactie: '1',
		},
		raw: true,
	})
	if(fb1)
		res.status(200).send(fb1);
	else
		  res.status(404).send({ message: "Nu s-a gasit niciun feedback" });
}
catch(err){
		res.status(500).json(err);
	}


	// try{
    //     const countHappy = await Feedback.count({
    //         where: { tip: 1 },
    //     });
}*/


//nu sunt cu request
// const countHappy =  Feedback.count({
//     where: { tip: 1 },
// });
// const countFrown =  Feedback.count({
//     where: { tip: 2 },
// });
// const countConfused =  Feedback.count({
//     where: { tip: 3 },
// });
// const countSurprised =  Feedback.count({
//     where: { tip: 4 },
// });

 const createFeedback = async (req,res) => {
	try {
		const feedbackNou = await Feedback.create(req.body);
		return res.status(200).json(feedbackNou);
	}
	catch(err){
		return res.status(500).json(err);
	}
}


module.exports = {
    getAllFeedback,
    getFeedbackTip,
    getFeedbackCountTip,
    createFeedback
    // countHappy,
    // countConfused,
    // countFrown,
    // countSurprised
};