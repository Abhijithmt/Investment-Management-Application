const express=require('express')
const router=express.Router()

const{ superadminlogin }=require('../controller/superadmin')


router.post('/superadmin',superadminlogin)


module.exports=router