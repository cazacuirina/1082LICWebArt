const Activitate = require("../models/activitati");
const Utilizator = require("../models/utilizatori");
const Inregistrare = require("../models/inregistrari");

const getActivitate = async (req, res) => {
	try {
	  const activitate = await Activitate.findOne({ where: { id: req.params.id } }); //findByPk(req.params.id)
	  if(activitate)
	  	res.status(200).send(activitate);
	  else
	    res.status(404).send({ message: "Activitatea nu a fost gasita" });
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

 const getAllActivitati = async (req,res) => {
	try{
		const activitati = await Activitate.findAll();
		if(activitati)
	  		res.status(200).send(activitati);
	  	else
	    	res.status(404).send({ message: "Activitatile nu au fost gasite" });
	}
	catch(err){
		res.status(500).json(err);
	}
}

const createActivitate = async (req,res) => {
	try {
		const activitateNoua = await Activitate.create(req.body);
		return res.status(200).json(activitateNoua);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const addActivitate = async (req,res) => {
	try {
		const utilizator = await Utilizator.findByPk(req.params.id)
		if(utilizator.tip==true){
			console.log("PROF")
			try {
				const activitateNoua = await Activitate.create(req.body);

				const inregistrareNoua = await Inregistrare.create({activitatiId:activitateNoua.id, utilizatoriId:utilizator.id});
				console.log(inregistrareNoua.activitatiId, inregistrareNoua.utilizatoriId);
				return res.status(200).json(activitateNoua);
			}
			catch(err){
				return res.status(404).json("Nu exista profesorul");
			}
		}
		else{
			return res.status(403).json("Accesul nu e permis studentilor");
		}
	}
	catch(err){
		return res.status(500).json(err);
	}
}

const enrollActivitate = async (req,res) => {
	try {
		const utilizator = await Utilizator.findByPk(req.params.studId)
		
		if(utilizator.tip==false){
			console.log("STUD")
			try {
				const activitate = await Activitate.findOne({where: {codAcces: req.params.codAcces}})
				if(activitate)
				{
					const inregistrareNoua = await Inregistrare.create({activitatiId:activitate.id, utilizatoriId:utilizator.id});
					return res.status(200).json(inregistrareNoua);
				}
				else{
					return res.status(404).json({message:"Cod Activitate incorect"});
				}
			}
			catch(err){
				return res.status(404).json({message:"Nu exista studentul"});
			}
		}
		else{
			return res.status(403).json("Accesul nu e permis profesorilor");
		}
	}
	catch(err){
		return res.status(500).json(err);
	}
}

const updateActivitate=async(req,res)=>{
	try {
		const activitate = await Activitate.findOne({where: {codAcces: req.params.codAcces}})
		if(activitate){
			await activitate.update(req.body);
			res.status(200).send(activitate);
		}
	  	else
	    	res.status(404).send({ message: "Activitatea nu a fost gasita" });
		
	} catch (e) {
		res.status(500).send({ message: "Server error" });
	}
}

const deleteActivitate=async(req,res)=>{
	try {
		const activitate = await Activitate.findOne({where: {codAcces: req.params.codAcces}})
		if(activitate){
			await activitate.destroy()
			res.status(200).send({ message: "Activitatea a fost eliminata cu succes" });
		}
	  	else
	    	res.status(404).send({ message: "Activitatea nu a fost gasita" });
	} catch (e) {
		res.status(500).send({ message: "Server error" });
	}
}

module.exports = {
	getActivitate,
	getAllActivitati,
	createActivitate,
	addActivitate,
	enrollActivitate, 
	updateActivitate,
	deleteActivitate
};