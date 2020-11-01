const db = require("../models");
const Shelter = db.shelters;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");


exports.getShelters = (req, res) => {
    Shelter.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

exports.getShelter = (req, res) => {
    let shelter_id = req.params.id
    Shelter.findOne({
        where: {
            id: shelter_id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}