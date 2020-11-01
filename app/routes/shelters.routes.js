module.exports = app => {
    const shelters = require("../controllers/shelters.controller.js");

    var router = require("express").Router();

    router.get("/", shelters.getShelters);

    router.get("/:id", shelters.getShelter);

    app.use('/api/shelters', router);
};