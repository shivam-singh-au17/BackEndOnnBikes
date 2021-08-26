
const express = require("express");
const router = express.Router();

const Filterprod = require("../models/filterProduct.model");
const crudController = require("./crudFilter.controllers");

router.post("/", crudController(Filterprod).post);

router.get("/", crudController(Filterprod).getsafety);
router.get("/offers", crudController(Filterprod).getoffers);
router.get("/blog", crudController(Filterprod).getblog);
router.get("/filterPro", crudController(Filterprod).get);

router.get("/:id", crudController(Filterprod).getOne);
router.patch("/:id", crudController(Filterprod).patchOne);
router.delete("/:id", crudController(Filterprod, "filterProduct").deleteOne);

module.exports = router

