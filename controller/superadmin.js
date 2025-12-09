const User=require('../model/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


exports.superadminlogin=async (req,res)=>{
    try {
        const{email,password}=req.body

        if(!email || !password){
            return res.status(400).json({message:"All field required"})
        }


        const superadmin=await User.findOne({email:email})

        if(!superadmin){
            return res.status(400).json({message:'superadmin not exist'})
        }
        //role checking

        if(superadmin.role !== "superadmin"){
            return res.status(400).json({messege:"Not a superadmin "})
        }

        //checking password

        const ismatch= await bcrypt.compare(password,superadmin.password)
        if(!ismatch){
            return res.status(400).json({messsege:'invailid password'})
        }


        const token = jwt.sign(
            {id:superadmin._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )

        res.status(200).json({messege:'superadmin login succesfully',
             token,
      user: {
        id: superadmin._id,
        name: superadmin.name,
        email: superadmin.email,
        role: superadmin.role,
      }
        })

    } catch (error) {
         res.status(500).json({ messege: error.message  });
    }
}