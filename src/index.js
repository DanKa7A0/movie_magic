import express from "express";
import handlebars from "express-handlebars";

const app = express();
const PORT = 5000;

// setup handlebars
app.engine(("hbs"), handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("view", "src/views");

app.use(express.static, "src/public");

app.get("/", (req, res) => {
    res.write("Test");
    res.end();
});

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));