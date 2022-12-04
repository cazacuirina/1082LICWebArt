const sequelize = require("./database");
const Inregistrare = require("./inregistrari");
const Materie = require("./materii");
const Utilizator = require("./utilizatori");
const Activitate = require("./activitati");
const Feedback = require("./feedback");

//VEZI DELETE SI DACA AI NEVOIE DE LEG PE AMBELE SENSURI

// Utilizator.hasMany(Inregistrare,{ onDelete: 'cascade' });
// Inregistrare.belongsTo(Utilizator,{ onDelete: 'cascade' });

//Utilizator.belongsToMany(Activitate, {through: Inregistrare, foreignKey: 'id', as:'idActivitate', onDelete: 'cascade'});
//Activitate.belongsToMany(Utilizator, {through: Inregistrare, foreignKey: 'id', as:'idUtilizator', onDelete: 'cascade'});
Utilizator.belongsToMany(Activitate, { through: Inregistrare });
Activitate.belongsToMany(Utilizator, { through: Inregistrare });

Feedback.belongsTo(Activitate,{ onDelete: 'cascade' });

module.exports = {
  sequelize,
  Materie,
  Utilizator,
  Inregistrare,
  Activitate, 
  Feedback
};