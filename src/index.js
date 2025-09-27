import express from "express";
import handlebars from "express-handlebars";
import routes from "./routes.js";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
const db = "mongodb://localhost:27017/";

// connect to db
try {
    await mongoose.connect(db, { dbName: "MovieMagic" });
    console.log("Successfully connected to db");
} catch(err){
    console.error("Can not connect to db", err);
}

// setup handlebars
app.engine(("hbs"), handlebars.engine({ 
    extname: "hbs"
    , runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    }
}));
app.set("view engine", "hbs");
app.set("views", "src/views");

// setup
app.use(express.static('src/public'));
app.use(express.urlencoded());

// routing
app.use(routes);

// start
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));