const mongoose = require("mongoose")
const { applyTimestamps } = require("./user")
const opportunity=new mongoose.Schema({
    companyname:{
        type:String,
        required:[true,"Name of the company offering the investment"]
    },
    equitydetails:{
        type:String,
        required:[true]
    },
    targetprice:{
        type:Number,
        required:[true]
    },
    returnpercentage:{
        type:Number,
        required:[true]
    },
    mininvestment:{
        type:Number,
        required:[true]
    },
    postedby:{
        type:String,
        required:[true]
    },
    status:{
        type:String,
        required:[true]
    },
    createAt:{
        type:Date,
    }


})

