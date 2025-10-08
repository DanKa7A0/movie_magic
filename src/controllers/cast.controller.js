import { Router } from "express";
import castService from "../services/cast.service.js";
import movieService from "../services/movie.service.js";
import { isAuth } from "../middlewares/auth.middlewares.js";

const castController = Router();

castController.get("/create", isAuth, (req, res) => {
    res.render("casts/create", { pageTitle: "Create cast" });
});

castController.post("/create", async (req, res) => {
    const data = req.body;
    await castService.createCast(data);
    res.redirect("/");
});

castController.get("/attach/:id", isAuth, async (req, res) => {
    const casts = await castService.readCasts();
    const movie = await movieService.getOne(req.params.id);
    
    res.render("casts/attach", { pageTitle: "Attach page", casts, movie });
});

export default castController;