
const model = require("mongoose");


const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body)
        return res.status(201).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const get = (model) => async (req, res) => {
    try {
        const item = await model.find().lean().exec();
        return res.render("allFilterData", {
            item: item
        })
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const getsafety = (model) => async (req, res) => {
    try {
        return res.render("safety")
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


const getoffers = (model) => async (req, res) => {
    try {
        return res.render("offers")
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const getblog = (model) => async (req, res) => {
    try {
        return res.render("BLOGpage")
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


const getOne = (model) => async (req, res) => {
    try {
        const item = await model.findById(req.params.id).lean().exec();
        return res.status(200).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


const patchOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(item)
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


const deleteOne = (model, itemName) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id)
        return res.status(205).json({ [itemName]: item });
    } catch (err) {
        return res.status(400).send(err.message)
    }
}


module.exports = (model, itemName) => ({
    post: post(model),
    get: get(model),
    getsafety: getsafety(model),
    getoffers: getoffers(model),
    getblog: getblog(model),
    getOne: getOne(model),
    patchOne: patchOne(model),
    deleteOne: deleteOne(model, itemName)
})

