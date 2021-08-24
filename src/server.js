
const path = require("path");
const express = require("express");

const connect = require("./configs/db");
const filterprodController = require("./controllers/filterProduct.controllers");

const app = express();
app.use(express.json());


app.use("/filterProducts", filterprodController);

app.listen(3007, async () => {
    await connect();
    console.log("Listening on port 3007");
})
