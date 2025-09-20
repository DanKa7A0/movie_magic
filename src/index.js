import express from "express";
import handlebars from "express-handlebars";
import routes from "./routes.js";

const app = express();
const PORT = 5000;

// setup handlebars
app.engine(("hbs"), handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

// setup static files
app.use(express.static('src/public'));

// routing
app.use(routes);

// start
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));