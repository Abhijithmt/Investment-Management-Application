const User=require("../model/user");
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendmail");




exports.register = async(req,res)=>{
    try {
        const{name,email,password,phone}=req.body
        
        const hashpassword=await bcrypt.hash(password,10)


         if(!name || !email || !password ||!phone){
            return res.status(400).json({messege:"All feilds requireds"})
         }
         const useralreadyexist= await User.findOne({email:email});
         
         if(useralreadyexist){
             return res.status(400).json({messege:"this user already exist"})
            
         }
         const newuser = new User({
            name,
            email,
            password:hashpassword,
            phone,
            role:"user"
         })
         await newuser.save()
         res.status(200).json({messege:"user created successfully"})

    } catch (error) {
        res.status(500).json({messege:error.message})
    }
}










//everyone login
exports.login=async(req,res)=>{
   
   try {
      const {email,password}=req.body
      
      const loginuser= await User.findOne({email:email})
      if(!loginuser){
        return res.status(401).json({messege:"user not found"})
      }
      
      const match=await bcrypt.compare(password,loginuser.password)
      if(!match){
        return res.status(400).json({messege:"incorrect password"})
      }

         const token = jwt.sign(
            {userid:loginuser._id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES}
         )

      return res.status(200).json({messege:"user found successfully",token: token})
   
   } catch (error) {
      console.log(error);

      return res.status(500).json({messege:'internel server error'})
   }
}











//forget password function
exports.forgetpassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ messege: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresat = Date.now() + 5 * 60 * 1000;

    user.sendotp = otp;
    user.resetotptime = expiresat;
    await user.save();

    //  Correct sendEmail format
    await sendEmail({
      to: email,
      subject: "Password Reset OTP",
      message: `Your OTP for password reset is ${otp}. It will expire in 5 minutes.`
    });

    res.status(200).json({ messege: "OTP is sent to email" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ messege: error.message });
  }
};

