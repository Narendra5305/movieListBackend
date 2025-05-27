const express = require("express")
const cors = require("cors");

require("dotenv").config();

const {MovieRouter} = require("./routes/movieRoute")
const {UserRouter} = require("./routes/userRoute")

const {toConnectDB} = require("./config")



const app = express();


app.use(cors({
    origin:"*",
    methods:["GET" , "POST" , "PATCH"  ,"PUT" , "DELETE"]
}))

app.use(express.json())


// routes
app.use("/User" , UserRouter)
app.use("/Movie" , MovieRouter)


app.get("/" ,(req,res) =>{
    res.send("this is movie list api")
})


app.listen(8080 ,() =>{
    console.log("server is running at http://localhost:8080/")
    toConnectDB()
})