const mongoose = require("mongoose");


// create schema

const BookSchema = mongoose.Schema(
{
    image:String,
    name :String,
    books:String,
    
    }
);

const MovieModel = mongoose.model("Movies", BookSchema);
module.exports = MovieModel;





