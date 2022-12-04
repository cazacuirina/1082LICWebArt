const Utilizator = require("../models/utilizatori");
const bcrypt = require('bcrypt');

const getUtilizator = async (req, res) => {
	const idUtiliz = req.params.id;
	console.log(idUtiliz)
	try {
	  const utilizator = await Utilizator.findOne({ where: { id: idUtiliz } }); //findByPk(req.params.id)
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

//CRIPTARE SI SIGN UP

const postUtilizatorLogin = async (req, res) => {
	const email = req.body.email;
	const parola = req.body.parola;
	try {
		const utilizator = await Utilizator.findOne({ where: { email: email}})
		if(utilizator){
			const validare= await bcrypt.compare(req.body.parola, utilizator.parola)
			if(validare){
				res.status(200).send({ message: "Buna, "+utilizator.nume });
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



module.exports = {
	getUtilizator,
	createUtilizator,
	getAllUtilizatori,
	postUtilizatorLogin,
	updateUtilizator,
	deleteUtilizator
};