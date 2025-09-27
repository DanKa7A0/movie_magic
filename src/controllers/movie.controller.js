import { Router } from "express";
import movieService from "../services/movie.service.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
    res.render("create", {pageTitle: "Create page"});
});

movieController.post("/create", async (req, res) => {
    const data = req.body;
    await movieService.createMovie(data);
    res.redirect("/");
});

movieController.get("/details/:id", async (req, res) => {
    const id = req.params.id;
    const movie = await movieService.getOne(id);

    res.render("details", { movie, pageTitle: "Details page" });
});

movieController.get("/search", async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    
    res.render("search", { movies, filter, pageTitle: "Search page" });
});

export default movieController;