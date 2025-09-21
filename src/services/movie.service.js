import Movie from "../models/movie.model.js";

function getAll(){
    return Movie.findAll();
}

function getOne(){

}

async function createMovie(data){
    const movie = new Movie(data);
    return await movie.save();
}

export default {getAll, getOne, createMovie};