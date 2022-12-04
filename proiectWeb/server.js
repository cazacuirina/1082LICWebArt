const express = require('express')
const app = express();
const indexRouter = require("./routes/index");
const sequelize = require("./models/index").sequelize;

let port = 3000;
app.use(express.json());
app.use("/api", indexRouter)

app.listen( port, async () => {
	console.log(`Server started on http://localhost:${port}`);
	try{
		await sequelize.authenticate();
	}
	catch(err){
		console.error("Unable to connect ", err)
	}

});

