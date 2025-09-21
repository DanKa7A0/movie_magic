import fs from "fs/promises";

const dbSerialize = await fs.readFile("./src/db.json", { encoding: "utf-8" });
const db = JSON.parse(dbSerialize);

export default class Movie {
    static findAll(){
        return db.movies.map(movie => ({
            id: movie.id
            , title: movie.title
            , imageURL: movie.imageURL
            , genre: movie.genre
            , description: movie.description
        }));
    }
}