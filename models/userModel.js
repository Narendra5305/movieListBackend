const mongoose = require("mongoose");


const UserSchema =new mongoose.Schema({
    name:{type:String},
    email:{type:String ,unique:true , require:true},
    password:{type:String ,require:true}
});


const UserModel = mongoose.model( "Users" , UserSchema );

module.exports ={UserModel};

