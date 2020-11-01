const db = require("../models");
const Pet_main = db.pets_main;
const Pet_additional = db.pets_additional;
const Pet_catch_info = db.pets_catch_info;
const Pet_health = db.pets_health;
const Pet_images = db.pets_images;
const Pet_move = db.pets_move;
const Pet_responsible = db.pets_responsible;
const Pet_sanitation = db.pets_sanitation;
const Pet_vaccination = db.pets_vaccination;
const Pet_owners = db.pets_owners;
const Shelter = db.shelters;

const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");

Pet_main.hasOne(Pet_additional, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_catch_info, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_health, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_images, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_move, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_responsible, { foreignKey: 'pet_num' });
Pet_main.hasMany(Pet_sanitation, { foreignKey: 'pet_num' });
Pet_main.hasMany(Pet_vaccination, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_owners, { foreignKey: 'pet_num' });
Shelter.hasMany(Pet_main, { foreignKey: 'shelter_id' });

Pet_additional.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_catch_info.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_health.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_images.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_move.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_responsible.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_sanitation.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_vaccination.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_owners.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_main.belongsTo(Shelter, { foreignKey: 'shelter_id' });

var Docxtemplater = require('docxtemplater');
var fs = require('fs');
var path = require('path');
var PizZip = require('pizzip');

function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function(error, key) {
            error[key] = value[key];
            return error;
        }, {});
    }
    return value;
}

function errorHandler(error) {
    console.log(JSON.stringify({ error: error }, replaceErrors));

    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function(error) {
            return error.properties.explanation;
        }).join("\n");
        console.log('errorMessages', errorMessages);
    }
    throw error;
}



//Load the docx file as a binary
var content = fs
    .readFileSync(path.resolve('./assets/card.docx'), 'binary');
var zip = new PizZip(content);
var doc;
try {
    doc = new Docxtemplater(zip);
} catch (error) {
    errorHandler(error);
}

exports.genDocx = (req, res) => {
    let pet_id = req.params.id;

    Pet_main.findOne({
        where: {
            id: pet_id
        },
        include: [{
                model: Pet_additional
            },
            {
                model: Pet_catch_info
            },
            {
                model: Pet_move
            },
            {
                model: Pet_responsible
            },
            {
                model: Pet_sanitation
            },
            {
                model: Pet_vaccination
            },
            {
                model: Pet_health
            },
            {
                model: Pet_owners
            },
            {
                model: Shelter
            }
        ]
    }).then(data => {
        doc.setData({
            card_num: ' ' + data.card_num,
            shelter_address: ' ' + data.Shelter.address,
            organisation: ' ' + data.Shelter.responsible,
            enclosure: ' ' + data.enclosure,
            gender: ' ' + data.gender,
            age: ' ' + data.age,
            weight: ' ' + data.weight,
            name: ' ' + data.name,
            breed: ' ' + data.breed,
            hair_color: ' ' + data.hair_color,
            hair_type: ' ' + data.hair_type,
            ears_type: ' ' + data.ears_type,
            tail_type: ' ' + data.tail_type,
            size: ' ' + data.size,
            special: ' ' + data.special,
            id_tag: ' ' + data.Pets_additional.id_tag,
            ster_date: ' ' + data.Pets_additional.ster_date,
            doctor: ' ' + data.Pets_additional.doctor,
            socialised: ' ' + data.Pets_additional.socialised,
            catch_order: ' ' + data.Pets_catch_info.order_num,
            catch_date: data.Pets_additional.order_date ? data.Pets_additional.order_date : "________________",
            act_catch: data.Pets_additional.catch_report ? data.Pets_additional.catch_report : "________________",
            catch_address: data.Pets_additional.catch_address ? data.Pets_additional.catch_report : "________________",
            legal_entity: data.Pets_additional.legal_entity ? data.Pets_additional.legal_entity : "__________________________",
            guardian: data.Pets_additional.guardian ? data.Pets_additional.guardian : "__________________________",
            individual: data.Pets_additional.individual ? data.Pets_additional.individual : "__________________________",
            date_in: ' ' + data.Pets_move.date_in,
            act_in: ' ' + data.Pets_move.act,
            date_out: data.Pets_move.date_out ? data.Pets_move.date_out : "_____________",
            act_out: data.Pets_move.order ? data.Pets_move.order : "_____________",
            reason: data.Pets_move.reason ? data.Pets_move.reason : "_____________"

        });

        try {
            doc.render()
        } catch (error) {
            errorHandler(error);
        }
        var buf = doc.getZip()
            .generate({ type: 'nodebuffer' });

        let dir = `./assets/КАРТОЧКА УЧЕТА ЖИВОТНОГО № ${data.card_num}`;
        fs.writeFileSync(path.resolve(dir), buf);

        res.download(dir, `КАРТОЧКА УЧЕТА ЖИВОТНОГО № ${data.card_num}.docx`, function(err) {
            if (err) {
                throw err;
            }
        });
    })
}