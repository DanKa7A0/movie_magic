import { Schema, model } from "mongoose"
import bcrypt from "bcrypt"

const authSchema = new Schema({
    email: {
        type: String
        , require: [true, "Email is required"]
        , unique: true
        , minLength: [10, "Email should be at least 10 symbols long"]
        , match: [/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+$/, "Email doesn't match"]
    }
    , pass: {
        type: String
        , require: [true, "Pass is required"]
        , minLength: [6, "Pass should be at least 6 symbols long"]
        , match: [/^[a-zA-Z0-9]+$/, "Pass should consist only of English letters and digits"]
    }
});

authSchema.pre("save", async function () {
    this.pass = await bcrypt.hash(this.pass, 11);
});

const User = model("User", authSchema);
export default User;
