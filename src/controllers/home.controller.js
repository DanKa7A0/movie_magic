import { Router } from "express";
import movieService from "../services/movie.service.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
    const movies = await movieService.getAll();
    res.render("home", { movies, pageTitle: "Catalog page" });
});

homeController.get("/about", (req, res) => {
    res.render("about", { pageTitle: "About page" });
});

export default homeController;