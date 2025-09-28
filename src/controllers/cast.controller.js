import { Router } from "express";
import castService from "../services/cast.service.js";

const castController = Router();

castController.get("/create", (req, res) => {
    res.render("casts/create", { pageTitle: "Create cast" });
});

castController.post("/create", async (req, res) => {
    const data = req.body;
    await castService.createCast(data);
    res.redirect("/");
});

castController.get("/attach/:id", (req, res) => {
    res.render("casts/attach", { pageTitle: "Attach page" });
});

export default castController;