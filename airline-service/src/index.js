const express = require("express");
const {serverConfig , logger } = require("./config");
const apiRoutes = require("./routes"); 
const app = express();

const startServer = () =>{
    app.use(express.json());
    app.use(express.urlencoded({extended : true}))
    app.use("/api",apiRoutes);
    app.listen(serverConfig.PORT,()=>console.log("Started Server Sucessfully on PORT",serverConfig.PORT));
    // logger.info("Port Connected","root",{})
}



startServer();