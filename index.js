const express=require("express");
const app = express();

app.use(express.json());

//connect to mongodb
 require('./database/connect');
 const rishi = require("./services/dataservices");

 //initialize routes
var crud = require("./routes/crud");

app.use(crud);

app.listen(4000,()=>{
    console.log("Server running successfully at 4000");
});


