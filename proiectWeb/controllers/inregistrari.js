const Inregistrare = require("../models/inregistrari");

const getInregistrare = async (req, res) => {
	const idInreg = req.params.id;
	try {
	  const inregistrare = await Inregistrare.findOne({ where: { id: idInreg } }); //findByPk(req.params.id)
	  if(inregistrare)
	  	res.status(200).send(inregistrare);
	  else
	    res.status(404).send({ message: "Inregistrarea nu a fost gasita" });
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

 const getAllInregistrari = async (req,res) => {
	try{
		const inregistrari = await Inregistrare.findAll();
		if(inregistrari)
			res.status(200).json(inregistrari);
		else
			res.status(404).send({ message: "Inregistrarile nu au fost gasite" });
	}
	catch(err){
		res.status(500).json(err);
	}
}

const getAllParticipantiMaterie = async (req,res) => {
	try{
		const inregistrari = await Inregistrare.findAll({where:{materiiId:req.params.materiiId}});
		if(inregistrari)
			res.status(200).json(inregistrari);
		else
			res.status(404).send({ message: "Inregistrarile nu au fost gasite" });
	}
	catch(err){
		res.status(500).json(err);
	}
}

 const createInregistrare = async (req,res) => {
	try {
		const inregistrareNoua = await Inregistrare.create(req.body);
		return res.status(200).json(inregistrareNoua);
	}
	catch(err){
		return res.status(500).json(err);
	}
};



//CUM FACI UPDATE, PE CE CAMPURI????
const updateInregistrare=async(req,res)=>{
	try {
		//const inregistrare = await Inregistrare.findByPk(req.params.id) 
		const inregistrare = await Inregistrare.findOne({where:{materiiId:req.params.materiiId}})
		if(inregistrare){
			await inregistrare.update(req.body,{fields:['denumire']})
			res.status(200).send(inregistrare);
		}else
			res.status(404).send({ message: "Inregistrarea nu a fost gasita" });
	} catch (e) {
		res.status(500).send({ message: "Server error" });
	}
};

const deleteInregistrare=async(req,res)=>{
	try {
        //VERIFICA DACA MERGE DELET CASCADE
		//const inregistrare = await Inregistrare.findByPk(req.params.id) 
		const inregistrare = await Inregistrare.findOne({ where: { utilizatoriId: req.params.utilizatoriId}})
		if(inregistrare){
			await inregistrare.destroy()
			res.status(200).send({ message: "Inregistrarea a fost eliminata cu succes" });
		}else
			res.status(404).send({ message: "Inregistrarea nu a fost gasita" });
	} catch (e) {
		res.status(500).send({ message: "Server error" });
	}
};

module.exports = {
	getInregistrare,
	createInregistrare,
	getAllInregistrari,
	updateInregistrare,
	deleteInregistrare,
	getAllParticipantiMaterie,
	//getAllMateriiParticipant
};