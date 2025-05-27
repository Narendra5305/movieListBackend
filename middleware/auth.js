const jwt = require('jsonwebtoken');


const Auth =async(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    
    try {
        const decoded =await jwt.verify(token, process.env.SEC_KEY);
        if (decoded){
            const {emailID} = decoded;
            req.id = emailID;
            next()
        }else{
            res.status(400).json({"msg":"login please"})
        }
    
    } catch (error) {
        res.status(500).json({"msg":"user not found" ,error})
    }


}


module.exports={Auth}