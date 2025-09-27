import mongoose, {Schema, model} from "mongoose";

const movieSchema = new Schema({
    title: { type: String, require: true }
    , category: { type: String, require: true }
    , genre: { type: String, require: true }
    , director: { type: String, require: true }
    , year: { type: Number, require: true, min: 0, max: 120 }
    , rating: { type: Number, require: true, min: 1, max: 10 }
    , description: { type: String, require: true, max: 255 }
    , imgUrl: { type: String, require: true }
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;