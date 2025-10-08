import { Schema, model } from "mongoose"

const authSchema = new Schema({
    email: String
    , pass: String
});

const User = model("User", authSchema);
export default User;
