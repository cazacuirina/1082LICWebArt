const Utilizator = require("../models/utilizatori");

const getUtilizator = async (req, res) => {
	const idUtiliz = req.params.id;
	try {
	  const utilizator = await Utilizator.findOne({ where: { id: utilizator } }); //findByPk(req.params.id)
	  if(utilizator)
	 	 res.status(200).send(utilizator);
	  else
	     res.status(404).send({ message: "Utilizatorul nu a fost gasit" });
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

 const getAllUtilizatori = async (req,res) => {
	try{
		const utilizatori = await Utilizator.findAll();
		if(utilizatori)
	 	 	res.status(200).send(utilizatori);
	  	else
	     	res.status(404).send({ message: "Utilizatorii nu au fost gasiti" });
	}
	catch(err){
		res.status(500).json(err);
	}
}

 const createUtilizator = async (req,res) => {
	try {
		const utilizatorNou = await Utilizator.create(req.body);
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

const updateUtilizator=async(req,res)=>{
	try {
		const utilizator = await Utilizator.findByPk(req.params.id)
		if(utilizator){
			await utilizator.update(req.body,{fields:['nume','email','parola']})
			if(utilizator.tip==true)
				console.log("PROFESOR");
			else
				if(utilizator.tip==false)
					console.log("STUDENT");
			res.status(200).send(utilizator);
		}
	  	else
	    	res.status(404).send({ message: "Utilizatorul nu a fost gasit" }); 
	} catch (e) {
		res.status(500).send({ message: "Server error" });
	}
};

const deleteUtilizator=async(req,res)=>{
	try {
		const utilizator = await Utilizator.findByPk(req.params.id) 
		if(utilizator){
			await utilizator.destroy()
			res.status(200).send({ message: "Utilizatorul a fost eliminat cu succes" });
		}
	} catch (e) {
		res.status(500).send({ message: "Server error" });
	}
};

const postUtilizatorLogin = async (req, res) => {
	const email = req.body.email;
	const parola = req.body.parola;
	try {
	  const utilizator = await Utilizator.findOne({ where: { email: email, parola:parola } }); //findByPk(req.params.id)
	  if(utilizator){
		res.status(200).json({success:true});
	  }
	  else{
		res.status(402).json({success:false});
	  }
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

module.exports = {
	getUtilizator,
	createUtilizator,
	getAllUtilizatori,
	postUtilizatorLogin,
	updateUtilizator,
	deleteUtilizator
};