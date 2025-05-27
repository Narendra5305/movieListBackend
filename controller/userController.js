const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {UserModel} = require("../models/userModel")


const Register =async (req,res) =>{
    const { name, email , password } = req.body;
    
    try {
        bcrypt.hash(password , 8 , async( err ,hash)=>{
            if (err){
                res.status(401).json({"there has been an error" : err})
            }else{
                try {
                    await UserModel.create({
                        name,
                        email,
                        password:hash ,   
                    })
                    res.status(201).json({"msg" : "sign up successfull"})
                } catch (error) {
                    res.status(500).json({ message: 'Server error' } , error);
                }
            }
            
        });
    } catch (error) {
         res.status(500).json({ message: 'Server error' } , error);
    }
}



const LoginUser =async (req,res) =>{
    const {email , password} = req.body ;
    const user = await UserModel.findOne({email})
    // if (user){
    //     try {
            bcrypt.compare(password, user.password, (err, result) =>{
            if (err){
                    res.status(500).json({"msg":"there has been an error" ,err})
            }else{
                const token = jwt.sign({ emailID: email }, process.env.SEC_KEY);
                res.status(200).json({"token":token})
            }
            });
    //     } catch (error) {
    //         res.status(500).json({ message: 'there has been an error at login user' } , error);
    //     }
    // }else{
    //     res.status(500).json({"msg":"credential not found"})
    // }
}




module.exports ={Register ,LoginUser}


