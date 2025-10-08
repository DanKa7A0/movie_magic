import { Router } from "express";

const userController = Router();

userController.get("/register", (req, res) => {
    res.write("Text");
    res.end();
});

export default userController;