import mongoose, {Schema, Types, model} from "mongoose";

const movieSchema = new Schema({
    title: { type: String, require: true }
    , category: { type: String, require: true }
    , genre: { type: String, require: true }
    , director: { type: String, require: true }
    , year: { type: Number, require: true, min: 1900, max: 2025 }
    , rating: { type: Number, require: true, min: 1, max: 10 }
    , description: { type: String, require: true, max: 255 }
    , imgUrl: { type: String, require: true }
    , casts: [{
        type: Types.ObjectId
        , ref: "Cast"
    }]
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;