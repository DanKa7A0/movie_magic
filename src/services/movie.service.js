import Movie from "../models/Movie.js";

async function getAll(filter = {}){
    const query = { title: 1, genre: 1, description: 1, imgUrl: 1 };
    let movies = await Movie.find({}, query);

    if (filter.title) movies = movies.filter(movie => movie.title.toLowerCase().includes(filter.title.toLowerCase()));
    if (filter.genre) movies = movies.filter(movie => movie.genre.toLowerCase().includes(filter.genre.toLowerCase()));
    if (filter.year) movies = movies.filter(movie => movie.year === Number(filter.year));

    return movies;
}

async function getOne(id){
    // movie
    const movie = await Movie.findById(id).populate("casts");
    movie.ratingStars = "&#x2605;".repeat(movie.rating);

    console.log(movie);

    return movie;
}

async function createMovie(data){
    // const movie = new Movie(data);
    // return await movie.save();
    return await Movie.create(data);
}


async function attachCast(cast_ID, movie_ID){
    return await Movie.findByIdAndUpdate(movie_ID, {$push: {casts: cast_ID}});
}

export default {getAll, getOne, createMovie, attachCast};