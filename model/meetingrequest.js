const mongoose=require("mongoose")
// const { schema } = require("./user")
// const opportunity = require("./opportunity")

const meeting=new mongoose.Schema({
    investerId:{
        type:schema.types.objectId,
        ref:"user",
        required:[true]
    },
    opportunityId:{
        type:schema.types.objectId,
        required:[true],
        ref:"investmentoppo"
    },
    prefferedDate:{
        type:Date,

    },
    message:{
        type:String,
        required:[true]
    },
    status:{
        type:String,
        required:[true],
        default:"pending"
    },
    ScheduledDate:{
        type:Date,
        required:[true],

    }
},{timestamps: true})


module.exports=mongoose.model("meetingreq",meeting)

