module.exports = app => {
    const dictionary = require("../controllers/dictionary.controller.js");

    var router = require("express").Router();

    router.get("/", dictionary.getList);

    app.use('/api/dictionary', router);
};