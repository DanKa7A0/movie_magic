import Movie from "../models/movie.model.js";

function getAll(){
    return Movie.findAll();
}

function getOne(){

}

export default {getAll, getOne};