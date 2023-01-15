const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Utilizator =  sequelize.define("utilizatori", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nume: {
		type: DataTypes.STRING,
		allowNull: false,
	},
    tip: {
        type: DataTypes.VIRTUAL,
        get() {
            if(this.email.search("@ie.ase.ro")!=-1)
                return true
            if(this.email.search("@stud.ase.ro")!=-1)
                return false
        }
	},
    email: {
		type: DataTypes.STRING,
		allowNull: false,
        unique: true,
        validate: {
            isEmail:true,
            checkEmail(value) {
                if (value.search('@stud.ase.ro')==-1 && value.search('@ie.ase.ro')==-1) {
                  throw new Error("Nu e mailul institutional!");
                }}
        }
	},
    parola: {
		type: DataTypes.STRING,
		allowNull: false,
        validate:{
            checkPassword(value){
                if(value.length<8){
                    throw new Error("Parola nesigura!");
                  }
            }
        }
	}
})

module.exports = Utilizator;