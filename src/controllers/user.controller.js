import { Router } from "express";
import { Register } from "../services/auth.service.js";

const userController = Router();

userController.get("/register", (req, res) => {
    res.render("auth/register");
});

userController.post("/register", async (req, res) => {
    await Register(req.body);
    res.redirect("/login");
});

export default userController;