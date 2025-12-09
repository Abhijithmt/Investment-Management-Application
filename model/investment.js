const { schema } = require("./user")

const mongoose=required('mongoose')

const investment=new mongoose.Schema({
    investorId:{
        type:schema.types.objectId,
        required:[true]

    },
    opportunityId:{
        type:schema.types.objectId,
        required:[true]
    },
    amount:{
        type:Number,
        required:[true]
    },
    sharesorunits:{
        type:Number,
        required:[true]
    },
    transactionDate:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        required:[true]
    }
},{timestamps: true})


module.exports=mongoose.model("investmentoption",investment)