const sequelize = require("./database");
const {DataTypes} = require("sequelize");


const Feedback =  sequelize.define("feedback", {
    dataOra:{
        type: DataTypes.DATE, 
		allowNull: false,
        defaultValue: DataTypes.NOW
    },
    reactie:{
        type: DataTypes.INTEGER,
		allowNull: false,
        validate:{isIn: [[1,2,3,4]]}
    },
})

module.exports = Feedback;