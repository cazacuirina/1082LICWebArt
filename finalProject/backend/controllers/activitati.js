const Activitate = require("../models/activitati");
const Utilizator = require("../models/utilizatori");
const Participant = require("../models/participanti");
const moment=require("moment-timezone")

//selectare activitate dupa denumire + verificare stadiu desfasurare
const getActivitate = async (req, res) => {
	try {
	  const activitate = await Activitate.findByPk(req.params.id)
	  if(activitate)
	  {
		let d1=moment().add(2, 'hours').toDate()
		let d2=activitate.data
		let d3=moment(activitate.data).add(activitate.durata, 'minutes').toDate()
		console.log(d2, d1, d3)
		if(d1<d2)
			mesaj="urmeaza"
			else
			if(d1>d3)
				mesaj="finalizata"
				else
					mesaj="desfasurare"

	  	res.status(200).send({data:activitate,message:mesaj});
	  }
	  else
	    res.status(404).send({ message: "Activitatea nu a fost gasita" });
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

 //creare activitate de catre profesor
 const addActivitate = async (req,res) => {
	try {
		const prof = await Utilizator.findOne({ where: { id: req.params.profId } });
		if(prof)
			{
				 if(prof.tip==true)
				 {
					const activitateNoua = await Activitate.create({
					denumire: req.body.denumire ,
					data: moment(req.body.data).add(2, 'hours').toDate() ,  //.tz("Etc/GMT+2")   .tz("Europe/Bucharest")
					durata: req.body.durata ,
					descriere: req.body.descriere ,
					codAcces: req.body.codAcces ,
					profesorId: req.params.profId
					});
					console.log("OWNER "+activitateNoua.profesorId);
					return res.status(200).json(activitateNoua);
				 }else{
				 	res.status(401).send({ message: "Acces interzis studentilor" });
				 }
		}
		else{
			res.status(404).send({ message: "Profesorul nu a fost gasit" });
		}	
	}
	catch(err){
		return res.status(500).json(err);
	}
}

//inrolarea studentilor la o activitate in perioada in care aceasta este deschisa
const enrollActivitate = async (req,res) => {
	try {
		const stud = await Utilizator.findByPk(req.params.studId)
		if(stud)
			{
				if(stud.tip==false)
				{
				const activitate = await Activitate.findOne({where: {codAcces: req.params.codAcces}})
				if(activitate)
				{
					let d1=moment().add(2, 'hours').toDate()
					let d2=activitate.data
					let d3=moment(activitate.data).add(activitate.durata, 'minutes').toDate()
					console.log(d2, d1, d3)
					if(d1>d2 && d1<d3){
						const inregistrareNoua = await Participant.create({activitatiId:activitate.id, utilizatoriId:req.params.studId});
						return res.status(200).json(inregistrareNoua);
					}else{
						res.status(401).send({ message: "Activitatea nu este deschisa!" });
					}
				}else{
					return res.status(404).json({message:"Cod Activitate incorect"});
				}
				}else{
					res.status(401).send({ message: "Acces interzis profesorilor" });
				}
			}else{
				res.status(404).send({ message: "Studentul nu a fost gasit" });
			}
	}
	catch(err){
		return res.status(500).json(err);
	}
}


module.exports = {
	getActivitate,
	addActivitate,
	enrollActivitate
};