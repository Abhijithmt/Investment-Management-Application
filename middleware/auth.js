const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const header=req.header("authorization")

    if(!header){
       return res.status(400).json({messege:"No token provided"})
    }
    const token=header.split(" ") [1]
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
        

    } catch (error) {
        
        return res.status(401).json({messege:"not valid token"})
    }

}

//checking superadmin is here, for creating the admin account
const onlysuperadmin=(req,res,next)=>{
    if(req.user.role !== "superadmin"){
        return res.status(403).json({message:"Access denied. Only superadmin can do this."})
    }
    next();
}
module.exports={auth,onlysuperadmin}