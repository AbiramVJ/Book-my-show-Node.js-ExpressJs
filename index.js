//main back end code


const MovieModel = require("./database/movies");
const UserModel = require("./database/users");



/* using express====================================================================================*/

const express = require("express");
const { request } = require("express");
const app = express();
app.use(express.json()); //it passesd incoming request from the payload
/* core import======================================================================================*/
var cors = require('cors');
app.use(cors());
app.use = express.json();



/*mongoDB connection================================================================================*/

var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://abiram:9ms0jjYTJGbLX8WY@cluster0.ff9hx.mongodb.net/book-my-show?retryWrites=true&w=majority";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("CONNECTED SUCCESFULLY"));


/*
GET API
====================================================================================================================
  METHOD        GET
  route         localhost:30001/allmovies  
  Description   get all the movies
*/

app.get("/allmovies", async (req, res) => {
  const getAllmovies = await MovieModel.find();
  return res.json(getAllmovies);
});



/*METHOD        GET
  route         localhost:30001/allmovie/singlemovie/:id
  Description   get all the Movie accoreding the id*/

  app.get("/allmovies/singlemovie/:id", async (req, res) => {
    const {id} = req.params; // PARAMS IS REQUEST PARAMETER
    console.log(id);
    const getSpecificmovie = await MovieModel.findOne({ _id: id });
    
    return res.json(getSpecificmovie);
    
  });

  /*post API
=========================================================================================
  METHOD        POST
  route         http://localhost:3001/user-register
  Description   Add the new user
*/

app.post("/user-register", async (request, respons) => {
  const addNewUser = await UserModel.create(request.body);
  return respons.json({userAdded: addNewUser,message: "User was added"});
});


/*METHOD        POST
  route         localhost:3000/addauthor
  Description   add authors*/


// app.post("/addauthor", async (request, respons) => {
//   const Addauthor = await authorsModel.create(request.body);

//   return respons.json({
//     authours: Addauthor,
//     message: "author was added",
//   });
// });



app.listen(3001, () => {
  console.log("MY EXPRESS APP IS RUNNING");
});
