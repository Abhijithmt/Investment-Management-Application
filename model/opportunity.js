const mongoose = require("mongoose")
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
        
    }

})