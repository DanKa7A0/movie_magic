import { Router } from "express";
import movieService from "../services/movie.service.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
    res.render("create");
});

movieController.post("/create", async (req, res) => {
    const data = req.body;
    await movieService.createMovie(data);
    res.redirect("/");
});

export default movieController;