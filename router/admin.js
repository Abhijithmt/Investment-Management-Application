const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth')

const { createadmin}=require("../controller/admin")



router.post('/create-admin',createadmin)
module.exports=router


