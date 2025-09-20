import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.write("Test");
    res.end();
});

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));