const mongoose = require('mongoose')

const userschema= new mongoose.Schema({
    name:{
        type:String,
        required:[true]
    },
    email:{
        type:String,
        required:[true],
        unique:[true],
        match:[/^\S+@\S+\.\S+$/],
        trim:[true]
    },
    password:{
        type:String,
        required:[true],
        minlength:[8]
        
    },
    role:{
        type:String,
        required:[true],
        enum:["super admin","admin","user"],
        default:"user"
    },
    phone:{
        type:Number,
        minlength:[10,"Must need 10 numbers"]
    },
},{timestamps: true})
module.exports=mongoose.model("User",userschema)