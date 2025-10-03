import { Router } from "express";
import movieService from "../services/movie.service.js";
import castService from "../services/cast.service.js";

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

movieController.get("/attach/:id", async (req, res) => {
    const casts = await castService.readCasts();
    const movie = await movieService.getOne(req.params.id);
    
    res.render("casts/attach", { pageTitle: "Attach page", casts, movie });
});

movieController.post("/attach/:id", async (req, res) => {
    const cast_ID = req.body.cast; 
    const movie_ID = req.params.id;
    await movieService.attachCast(cast_ID, movie_ID);

    res.redirect(`/movies/details/${movie_ID}`);
});

export default movieController;