const {  mongoose } = require("mongoose")

const toConnectDB =async () =>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("DB is connected")
    } catch (error) {
        console.log("There has been error on connecting db" , error)
    }
}

module.exports ={toConnectDB} ;