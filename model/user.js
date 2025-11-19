const mongoose = require('mongoose')

const userschema= new mongoose.Schema({
    name:{
        type:String,
        required:[true]
    },
    email:{
        type:String,
        required:[true],
        unique:[true,],
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
        // role:["super admin","admin","investor"],
        // default:"admin"
    },
    phone:{
        type:Number,
        minlength:[10,"Must need 10 numbers"]
    },
    createAt:{
        type:Date,
        default:Date.now
    }

})
module.exports=mongoose.model("User",userschema)