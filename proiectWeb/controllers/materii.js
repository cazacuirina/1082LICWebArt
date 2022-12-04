const Materie = require("../models/materii");

const getMaterie = async (req, res) => {
	const idMaterie = req.params.id;
	try {
	  const materie = await Materie.findOne({ where: { id: idMaterie } }); //findByPk(req.params.id)
	  if(materie)
	  	res.status(200).send(materie);
	  else
	    res.status(404).send({ message: "Materia nu a fost gasita" });
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

 const getAllMaterii = async (req,res) => {
	try{
		const materii = await Materie.findAll();
		if(materii)
	  		res.status(200).send(materii);
	  	else
	    	res.status(404).send({ message: "Materiile nu au fost gasite" });
	}
	catch(err){
		res.status(500).json(err);
	}
}

 const createMaterie = async (req,res) => {
	try {
		const materieNoua = await Materie.create(req.body);
		return res.status(200).json(materieNoua);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const updateMaterie=async(req,res)=>{
	try {
		const materie = await Materie.findByPk(req.params.id) 
		if(materie){
			await materie.update(req.body,{fields:['denumire']});
			res.status(200).send(materie);
		}
	  	else
	    	res.status(404).send({ message: "Materia nu a fost gasita" });
		
	} catch (e) {
		res.status(500).send({ message: "Server error" });
	}
};

const deleteMaterie=async(req,res)=>{
	try {
		const materie = await Materie.findByPk(req.params.id) 
		if(materie){
			await materie.destroy()
			res.status(200).send({ message: "Materia a fost eliminata cu succes" });
		}
	  	else
	    	res.status(404).send({ message: "Materia nu a fost gasita" });
	} catch (e) {
		res.status(500).send({ message: "Server error" });
	}
};

module.exports = {
	getMaterie,
	createMaterie,
	getAllMaterii,
	updateMaterie,
	deleteMaterie
};