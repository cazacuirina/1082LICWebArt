const express = require('express')
//var session = require('express-session');
const app = express();
const indexRouter = require("./routes/index");
const sequelize = require("./models/index").sequelize;
const cors = require('cors');

app.use(cors());
let port = 3000;
app.use(express.json());
//app.use(session({secret: 'super secret'}));

// app.get('/logout',(req,res) => {
//     req.session.destroy();
//     res.redirect('/');
// });

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

