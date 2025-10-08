import { Schema, model } from "mongoose"
import bcrypt from "bcrypt"

const authSchema = new Schema({
    email: String
    , pass: String
});

authSchema.pre("save", async function () {
    this.pass = await bcrypt.hash(this.pass, 11);
});

const User = model("User", authSchema);
export default User;
