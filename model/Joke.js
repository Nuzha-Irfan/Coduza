const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const JokeSchema = new mongoose.Schema({
   
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
   
    type: {
      type : String
    },

    type1 :{
      type : String
    } 

      
});

module.exports = Post = mongoose.model("joke", JokeSchema); 
