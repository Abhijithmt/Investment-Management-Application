const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const port = 5000
const dotenv=require('dotenv')
dotenv.config()

app.use(express.json())

//imporing router
const userrouter=require('./router/user')
const adminrouter=require("./router/admin")
const superadminrouter=require('./router/superadmin')



app.use('/api/auth',userrouter)
app.use('/api/admin',adminrouter)
app.use('/superadminlogin',superadminrouter)





app.get("/",(req,res)=>{
    res.send("Investment Management Application")
})
app.listen(port,()=>{
    console.log(`This server server is  runnning in${port}`);
    
})

mongoose.connect("mongodb://127.0.0.1:27017/investment")
.then(()=>console.log("mongodb conneced successfully"))
.catch((error)=>console.log("mongod connection error",error));



