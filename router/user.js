const express = require("express")
const router= express.Router()

const {register, login, forgetpassword}=require('../controller/user')

router.post("/register-investor",register)
router.post("/login",login)
router.post("/forget-password",forgetpassword)

module.exports=router
