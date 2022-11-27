const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Materie =  sequelize.define("materii", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	denumire: {
		type: DataTypes.STRING,
		allowNull: false,
	}
})

module.exports = Materie;