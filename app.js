const express = require("express")
const app = express()
const port = 5000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Investment Management Application")
})
app.listen(port)