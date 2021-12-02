const mongoose = require("mongoose");


const sportSchema = new mongoose.Schema({
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

const Sport = new mongoose.model("Sport", sportSchema);


module.exports = Sport;