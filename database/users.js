const mongoose = require("mongoose");


// create schema

const UserSchema = mongoose.Schema(
{
    username:String,
    email:String,
    password :String,
    
    
    }
);

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;





