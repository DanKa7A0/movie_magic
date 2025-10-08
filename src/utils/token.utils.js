import jwt from "jsonwebtoken";

const JWT_SECRET = "b5c07682902cce2eab70366ecaaf7426";

export function GenAccessToken(userData){
    const payload = {
        id: userData.id
        , email: userData.email
    }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    return token;
}