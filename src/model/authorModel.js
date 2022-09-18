const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
     fname:{
        type : String ,
        required : true
     },
      lname: {
        type : String ,
        required : true
      }, 
      title: {
        type : String ,
        enum : ["Mr", "Mrs", "Miss"],
        trim : true,
        required : true
      }, 
      email: {
        type : String,
        unique: true,
        required: true
      }, 
        password: {
            type : String,
            required : true
        }

} , {timestamps: true} )

module.exports = mongoose.model('author' , authorSchema)





// { fname: { mandatory}, lname: {mandatory}, title: {mandatory, enum[Mr, Mrs, Miss]}, email: {mandatory, valid email, unique}, password: {mandatory} }
