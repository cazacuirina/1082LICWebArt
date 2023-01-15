const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Activitate =  sequelize.define("activitati", {
	denumire:{
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},

	descriere:{
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
	data:{
		type: DataTypes.DATE,
		allowNull: false

	},
	durata:{
		type: DataTypes.INTEGER,
		allowNull: false
	},
	codAcces:{
		type:DataTypes.STRING,
		unique: true,
		validate:{
            checkCod(value){
                if(value.length<8){
                    throw new Error("Cod nesigur!");
                  }
            }
        }
	}
})

module.exports = Activitate;