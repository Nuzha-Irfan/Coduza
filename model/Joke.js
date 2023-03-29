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
   
    type: [
        {
          type1: {
            type: String,
            
          },
          type2 :{
            type:String
          }
        }
      ],

      
});

module.exports = Post = mongoose.model("joke", JokeSchema); 
