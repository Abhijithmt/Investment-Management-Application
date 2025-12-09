const express = require("express")
const router= express.Router()
const auth=require("../middleware/auth")

const {register, login, forgetpassword}=require('../controller/auth')

router.post("/register-investor",register)
router.post("/login",login)
router.post("/forget-password",forgetpassword)


module.exports=router
