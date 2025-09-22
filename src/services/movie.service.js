import Movie from "../models/movie.model.js";

function getAll(filter){
    let movies = Movie.findAll();

    if (filter.title) movies = movies.filter(movie => movie.title.toLowerCase().includes(filter.title.toLowerCase()));
    if (filter.genre) movies = movies.filter(movie => movie.genre.toLowerCase().includes(filter.genre.toLowerCase()));
    if (filter.year) movies = movies.filter(movie => movie.year === filter.year);
    return movies;
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