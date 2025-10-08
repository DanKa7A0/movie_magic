import { Router } from "express";
import { Login, Register } from "../services/auth.service.js";

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

userController.post("/login", async (req, res) => {
    const token = await Login(req.body.email, req.body.pass);
    res.cookie("auth", token).redirect("/");
});

userController.get("/logout", (req, res) => {
    res.clearCookie("auth").redirect("/");
});

export default userController;