const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Participant =  sequelize.define("participanti",
{
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	}
})

module.exports = Participant;