import Movie from "../models/movie.model.js";

function getAll(){
    return Movie.findAll();
}

function getOne(id){
    return Movie.findOne(id);
}

async function createMovie(data){
    const movie = new Movie(data);
    return await movie.save();
}

export default {getAll, getOne, createMovie};