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

userController.get("/login", (req, res) => {
    res.render("auth/login");
});

export default userController;