const sequelize = require("./database");
const Inregistrare = require("./inregistrari");
const Materie = require("./materii");
const Utilizator = require("./utilizatori");

Materie.hasMany(Inregistrare);
Inregistrare.belongsTo(Materie);
Utilizator.hasMany(Inregistrare);
Inregistrare.belongsTo(Utilizator);

module.exports = {
  sequelize,
  Materie,
  Utilizator,
  Inregistrare
};