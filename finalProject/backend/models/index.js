const sequelize = require("./database");
const Utilizator = require("./utilizatori");
const Activitate = require("./activitati");
const Feedback = require("./feedback");
const Participant = require("./participanti");

Utilizator.belongsToMany(Activitate, { through: Participant });
Activitate.belongsToMany(Utilizator, { through: Participant });

Activitate.belongsTo(Utilizator, {foreignKey: 'profesorId' , onDelete: 'cascade'}); 
Feedback.belongsTo(Participant,{ foreignKey: 'participantId' ,  onDelete: 'cascade' });
module.exports = {
  sequelize,
  Utilizator,
  Participant,
  Activitate, 
  Feedback
};