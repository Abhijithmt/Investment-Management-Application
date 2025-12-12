const express=require('express')
const router=express.Router()



//middleware
const { auth, onlysuperadmin }=require('../middleware/auth')
const{ superadminlogin }=require('../controller/superadmin')
const{ createadmin }=require('../controller/admin')


router.post('/superadmin',superadminlogin)
router.post('/create-admin',auth,onlysuperadmin,createadmin)


module.exports=router