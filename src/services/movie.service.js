import Movie from "../models/movie.model.js";

function getAll(){
    return Movie.findAll();
}

function getOne(id){
    const movie = Movie.findOne(id);
    movie.ratingStars = "&#x2605;".repeat(movie.rating);
    return movie;
}

async function createMovie(data){
    const movie = new Movie(data);
    return await movie.save();
}

export default {getAll, getOne, createMovie};