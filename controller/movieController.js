const {MovieModel} = require("../models/movieModel");



const GetMovie =async(req,res) =>{
    try {
        const data = await MovieModel.find();
        res.status(200).json({"msg":"Movie data" ,data})
    } catch (error) {
        res.status(400).json({"msg":"there has been an error on fetching movie" ,error})
    }
}


const GetMovieDetail =async(req,res) =>{
    const id = req.params.id;
    try {
        const data  =await MovieModel.findById({_id:id})
        res.status(200).json({"msg":"Movie Detail",data})
    } catch (error) {
        res.status(400).json({"msgs":"there has been an error" ,error})
    }
    
}

const AddMovie =async(req,res) =>{
    try {
        const newMovie = MovieModel(req.body);
        await newMovie.save();
        res.status(200).json({"msg":"movie is added"})
    } catch (error) {
        res.status(400).json({"msg":"there has been an error" ,error})
    }
}



const UpdateMovie =async (req , res)=>{
    const id = req.params.id;
    try {
        await MovieModel.findByIdAndUpdate({_id:id} ,req.body)
        res.status(200).json({"msg":"Movie is updated"})
    } catch (error) {
        res.status(400).json({"msgs":"there has been an error" ,error})
    }
}

const DeleteMovie =async (req , res)=>{
    const id = req.params.id;
    try {
        await MovieModel.findByIdAndDelete({_id:id})
        res.status(200).json({"msg":"movie is deleted"})
    } catch (error) {
        res.status(400).json({"msgs":"there has been an error" ,error})
    }
}



module.exports ={GetMovie ,GetMovieDetail , AddMovie , UpdateMovie , DeleteMovie}
