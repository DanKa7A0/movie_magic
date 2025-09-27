import mongoose, { Schema, model } from "mongoose"

const castSchema = new Schema({
    name: { type: String, require: true }
    , age: { type: Number, require: true, min: 0, max: 120 }
    , born: { type: String, require: true }
    , imgUrl: { type: String, require: true }
});

const Cast = mongoose.model("Cast", castSchema);

export default Cast;