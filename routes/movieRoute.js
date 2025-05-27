const express = require("express");
const MovieRouter = express.Router()

const { GetMovie, GetMovieDetail, AddMovie, UpdateMovie, DeleteMovie } = require("../controller/movieController");

const {Auth} = require("../middleware/auth")


// for get all movies
MovieRouter.get("/", Auth ,GetMovie);

// for get movie details
MovieRouter.get("/:id", GetMovieDetail);

// for add a new movie
MovieRouter.post("/", AddMovie);

// for update a movie 
MovieRouter.patch("/:id", UpdateMovie);

// for delete a movie 
MovieRouter.delete("/:id", DeleteMovie);



module.exports = {MovieRouter};