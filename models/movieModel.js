const mongoose = require("mongoose");


const MovieSchema =new mongoose.Schema({
    title:{type:String},
    image:{type:String},
    genre:{type:String},
    descriptions:{type:String},
    rating:{type:String}
});


const MovieModel = mongoose.model("Movie" ,MovieSchema );

module.exports ={MovieModel};

