import { Router } from "express";

const castController = Router();

castController.get("/create", (req, res) => {
    res.render("casts/create", { pageTitle: "Create cast" });
});

castController.post("/create", (req, res) => {
    const data = req.body;
    console.log(data);
    res.end();
});

export default castController;