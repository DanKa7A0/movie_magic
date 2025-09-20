import express from "express";
import handlebars from "express-handlebars";

const app = express();
const PORT = 5000;

// setup handlebars
app.engine(("hbs"), handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

// setup static files
app.use(express.static('src/public'));

// routing
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

// start
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));