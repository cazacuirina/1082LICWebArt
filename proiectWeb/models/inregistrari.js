const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Inregistrare =  sequelize.define("inregistrari", {
	// id: {
	// 	type: DataTypes.INTEGER,
	// 	primaryKey: true,
	// 	autoIncrement: true,
	// }
})

module.exports = Inregistrare;