import Cast from "../models/Cast.js";

async function createCast(data){
    return await Cast.create(data);
}

export default { createCast }