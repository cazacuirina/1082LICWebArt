const  Sequelize  = require("sequelize");

const sequelize= new Sequelize({
    dialect:'sqlite',
    storage:'dbNou.db',
    define:{
        timestamps:false
    }
    })

sequelize.sync({
	//force:true
}).then( () => {
	console.log("Models in sync")
})

module.exports = sequelize;