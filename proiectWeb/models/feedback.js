const sequelize = require("./database");
const {DataTypes} = require("sequelize");


const Feedback =  sequelize.define("feedback", {
    dataOra:{
        type: DataTypes.NOW,
		allowNull: false
    },
    Reactie:{
        type: DataTypes.INTEGER,
		allowNull: false,
        validate:{isIn: [[1,2,3,4]]}
    },
    
})

module.exports = Feedback;