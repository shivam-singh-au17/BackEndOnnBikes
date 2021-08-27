
const express = require("express");
const router = express.Router();

const User = require("../models/addUser.models");

router.get("/", async (req, res) => {
    try {
        return res.render("home")
    } catch (err) {
        return res.status(400).send(err.message)
    }
});

router.get("/safety", async (req, res) => {
    try {
        return res.render("safety")
    } catch (err) {
        return res.status(400).send(err.message)
    }
});

router.get("/faq1", async (req, res) => {
    try {
        return res.render("faq1")
    } catch (err) {
        return res.status(400).send(err.message)
    }
});

router.get("/safety/blog", async (req, res) => {
    try {
        return res.render("BLOGpage")
    } catch (err) {
        return res.status(400).send(err.message)
    }
});

router.get("/safety/offers", async (req, res) => {
    try {
        return res.render("offers")
    } catch (err) {
        return res.status(400).send(err.message)
    }
});

router.get("/safety/faq1", async (req, res) => {
    try {
        return res.render("faq1")
    } catch (err) {
        return res.status(400).send(err.message)
    }
});

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        return res.send(user);
    }
    catch (err) {
        return res.status(400).send(err);
    }
})


router.get("/login", async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.find().lean().exec();
        return res.send(user);
    }
    catch (err) {
        return res.status(400).send(err);
    }
})
module.exports = router

