const errorRoute =(req,res)=>{
return res.status(404).json(
   {
     message:"router not found"
   }
)
}

module.exports=errorRoute;