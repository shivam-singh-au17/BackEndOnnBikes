
const express = require("express");
const router = express.Router();

const Filterprod = require("../models/filterProduct.model");
const crudController = require("./crud.controller");

router.post("/", crudController(Filterprod).post);
router.get("/", crudController(Filterprod).get);
router.get("/:id", crudController(Filterprod).getOne);
router.patch("/:id", crudController(Filterprod).patchOne);
router.delete("/:id", crudController(Filterprod, "filterProduct").deleteOne);

module.exports = router

