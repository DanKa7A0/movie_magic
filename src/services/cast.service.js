import Cast from "../models/Cast.js";

async function createCast(data){
    return await Cast.create(data);
}

async function readCasts(){
    return await Cast.find();
}

export default { createCast, readCasts }