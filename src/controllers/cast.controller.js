import { Router } from "express";
import castService from "../services/cast.service";

const castController = Router();

castController.get("/create", (req, res) => {
    res.render("casts/create", { pageTitle: "Create cast" });
});

castController.post("/create", async (req, res) => {
    const data = req.body;
    await castService.createCast(data);
    res.end();
});

export default castController;