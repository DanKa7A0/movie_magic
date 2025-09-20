import Movie from "../models/movie.model.js";

function readAll(){
    return Movie.findAll();
}

function readOne(){

}

export default {readAll, readOne};