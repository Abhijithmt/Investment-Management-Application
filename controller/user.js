const User=require("../model/user")

exports.register=async(req,res)=>{
    
    const{name,email,password,role,phone,createAt}=req.body

    const useralreadyexist=await User.findOne({email:email})

    if(useralreadyexist){
        res.status(400).json({messege:"This user already exist"})
    }

    const newuser = new User({
        name,
        email,
        password,
        role,
        phone,
        createAt

    })

    await User.save()
    res.status(200).json({messege:"user created successfully"})
}