const User=require("../model/user")

exports.register = async(req,res)=>{
    try {
        const{name,email,password,phone}=req.body

         if(!name || !email || !password ||!phone){
            return res.status(400).json({messege:"All feilds requireds"})
         }
         const useralreadyexist= await User.findOne({email:email})
         if(useralreadyexist){
             return res.status(400).json({messege:"this user already exist"})
            
         }
         const newuser = new User({
            name,
            email,
            password,
            phone,
            role:"user"
         })
         await newuser.save()
         res.status(200).json({messege:"user created successfully"})

    } catch (error) {
        res.status(500).json({messege:"erro",error})
    }
}
exports.login=async(req,res)=>{
   try {
      const {name,password}=req.body
      const loginuser= await User.findOne({password:password})
      if(!loginuser){
        return res.status(401).json({messege:"user not found"})
      }
      res.status(200).json({messege:"user found successfully"})
   
   } catch (error) {
      
   }
}
exports.forgetpassword=async(req,res)=>{
   try {
      const{email}=req.body
      

   } catch (error) {
      
   }
}