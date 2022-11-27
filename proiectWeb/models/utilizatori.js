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
		/*type: DataTypes.BOOLEAN,
        set(value){
            if(this.email.search('@stud.ase.ro')!=-1){
                this.setDataValue('tip',false)
            }else
                if(this.email.search('@ie.ase.ro')!=-1){
                    this.setDataValue('tip',true)
                }
        }*/
        type: DataTypes.VIRTUAL,
        get() {
            if(this.email.search("@ie.ase.ro")!=-1)
                return true
        }
	},
    email: {
		type: DataTypes.STRING,
		allowNull: false,
        unique: true,
        validate: {
            isEmail:true,
            checkEmail(value) {
                //value.search('@stud.ase.ro')==-1 || value.search('@ie.ase.ro')==-1
                if (value.search('a')==-1) {
                  throw new Error("Nu e mailul institutional!");
                }}
            //contains: '@stud.ase.ro' or '@ie.ase.ro'
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