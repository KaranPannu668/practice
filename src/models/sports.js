const mongoose = require("mongoose");


const sportsSchema = new mongoose.Schema({
    title : {
        type:String
    },
    link : {
        type:String
    },
    content : {
        type: String
    },
    image : {
        type: String
    }
})

const sport = new mongoose.Model("Sport", sportsSchema);


module.exports = sport;