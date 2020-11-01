module.exports = app => {
    const doc = require("../controllers/docx.controller.js");

    var router = require("express").Router();

    router.get("/:id", doc.genDocx);

    app.use('/api/doc', router);
};