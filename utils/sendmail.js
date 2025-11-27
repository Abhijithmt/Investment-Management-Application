const nodemailer=require("nodemailer")
require("dotenv").config()

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    }
})

const sendMail=async (to,subject,messege)=>{
    await transporter.sendMail({
        from:process.env.EMAIL_USER,
        to,
        subject,
        text: messege,
    })
}

module.exports=sendMail