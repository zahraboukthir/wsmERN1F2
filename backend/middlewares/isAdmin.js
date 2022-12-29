const isAdmin=(req,res,next)=>{
    if (req.user.role!= "admin") {
        return res.status(400).send({msg:"you are not admin !!!"})
    }
    next();
}
module.exports=isAdmin