const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/firstpost",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    autoIndex: false,
    connectTimeoutMS: 0,
    socketTimeoutMS: 0,
    family: 4
    }).then(()=>{
        console.log("Connection successful");
    }).catch((e)=>{
        console.log("Connection unsuccessful"+e);
    })






    