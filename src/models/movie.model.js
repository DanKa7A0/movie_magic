import fs from "fs/promises";
import { json } from "stream/consumers";

const dbSerialize = await fs.readFile("./src/db.json", { encoding: "utf-8" });
const db = JSON.parse(dbSerialize);

export default class Movie {
    constructor(data){
        Object.assign(this, data);
    }

    static findAll(){
        return db.movies.map(movie => ({
            id: movie.id
            , title: movie.title
            , imgUrl: movie.imgUrl
            , genre: movie.genre
            , description: movie.description
        }));
    }

    async save(){
        db.movies.push(this);
        const dbSerialize = JSON.stringify(db, null , 2);
        return await fs.writeFile("./src/db.json", dbSerialize);
    }
}