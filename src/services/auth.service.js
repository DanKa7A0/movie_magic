import bcrypt from "bcrypt"
import User from "../models/Auth.js";
import { GenAccessToken } from "../utils/token.utils.js";

export async function Register(userData){
    return await User.create(userData);
}

export async function Login(email, pass){
    const user = await User.findOne({ email });    
    if (!user){
        throw new Error("Invalid user or password");
    }

    const passCheck = await bcrypt.compare(pass, user.pass);
    if (!passCheck){
        throw new Error("Invalid user or password");
    }
}