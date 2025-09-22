import fs from "fs/promises";
import { v4 as uuid } from "uuid";

const dbSerialize = await fs.readFile("./src/db.json", { encoding: "utf-8" });
const db = JSON.parse(dbSerialize);

export default class Movie {
    constructor(data){
        this.id = uuid();
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

    static findOne(id){
        return db.movies.find(movie => id === movie.id);
    }

    async save(){
        db.movies.push(this);
        const dbSerialize = JSON.stringify(db, null , 2);
        return await fs.writeFile("./src/db.json", dbSerialize);
    }
}