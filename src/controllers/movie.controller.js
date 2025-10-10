import { Router } from "express";
import movieService from "../services/movie.service.js";
import castService from "../services/cast.service.js";
import { isAuth } from "../middlewares/auth.middlewares.js";

const movieController = Router();

movieController.get("/create", isAuth, (req, res) => {
    res.render("movies/create", {pageTitle: "Create page"});
});

movieController.post("/create", isAuth, async (req, res) => {
    const data = req.body;
    const user_ID = req.user.id;
    await movieService.createMovie(data, user_ID);
    res.redirect("/");
});

movieController.get("/details/:id", async (req, res) => {
    const id = req.params.id;
    const movie = await movieService.getOne(id);

    res.render("movies/details", { pageTitle: "Details page", movie });
});

movieController.get("/search", async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    
    res.render("movies/search", { movies, filter, pageTitle: "Search page" });
});

movieController.post("/attach/:id", async (req, res) => {
    const cast_ID = req.body.cast; 
    const movie_ID = req.params.id;
    await movieService.attachCast(cast_ID, movie_ID);

    res.redirect(`/movies/details/${movie_ID}`);
});

export default movieController;