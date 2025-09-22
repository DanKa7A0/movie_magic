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

movieController.get("/details/:id", (req, res) => {
    const id = req.params.id;
    const movie = movieService.getOne(id);
    console.log(movie);

    res.render("details", { movie, pageTitle: "Details page" });
});

movieController.get("/search", (req, res) => {
    const filter = req.query;
    const movies = movieService.getAll(filter);
    
    res.render("search", { movies, filter, pageTitle: "Search page" });
});

export default movieController;