import User from "../models/Auth.js";

export async function Register(user){
    return await User.create(user);
}