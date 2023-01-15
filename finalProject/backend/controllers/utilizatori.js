const Utilizator = require("../models/utilizatori");
const Activitate = require("../models/activitati");
const bcrypt = require('bcrypt');

//sign up
const createUtilizator = async (req,res) => {
	try {
		const salt=await bcrypt.genSalt()
		const parolaCriptata=await bcrypt.hash(req.body.parola,salt)
		console.log(salt, parolaCriptata)

		const utilizatorNou = await Utilizator.create({nume:req.body.nume, email:req.body.email, parola:parolaCriptata});
		if(utilizatorNou.tip==true)
			console.log("PROFESOR");
		else
			if(utilizatorNou.tip==false)
				console.log("STUDENT");
		return res.status(200).json(utilizatorNou);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

//sign in
const postUtilizatorLogin = async (req, res) => {
	const email = req.body.email;
	const parola = req.body.parola;
	try {
		const utilizator = await Utilizator.findOne({ where: { email: email}})
		if(utilizator){
			const validare= await bcrypt.compare(parola, utilizator.parola)
			if(validare){
				res.status(200).send(utilizator);
			}else{
				res.status(404).send({ message: "Parola incorecta!" });
			}
		}else{
			res.status(404).send({ message: "Utilizatorul nu a fost gasit" });
		}
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

 //selectare activitati profesor
const getActivitatiProf = async(req,res) =>{
	try{
		const activitati = await Activitate.findAll({where:{profesorId:req.params.profId}});
		if(activitati)
			res.status(200).json(activitati);
		else
			res.status(404).send({ message: "Activitatile nu au fost gasite" });
	}
	catch(err){
		res.status(500).json(err);
	}
}


module.exports = {
	createUtilizator,
	postUtilizatorLogin,
	getActivitatiProf
};