
const path = require("path");
const express = require("express");

const connect = require("./configs/db");
const filterprodController = require("./controllers/filterProduct.controllers");

const app = express();
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "public/")));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.use("/filterProducts", filterprodController);

app.listen(3007, async () => {
    await connect();
    console.log("Listening on port 3007");
})
