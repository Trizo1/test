const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    define: {
        freezeTableName: true,
        timestamps: false
    },
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pets_main = require("./pets_main.model.js")(sequelize, Sequelize);
db.shelters = require("./shelters.model.js")(sequelize, Sequelize);
db.dictionary = require("./dictionary.model.js")(sequelize, Sequelize);
db.pets_additional = require("./pets_additional.model.js")(sequelize, Sequelize);
db.pets_catch_info = require("./pets_catch_info.model.js")(sequelize, Sequelize);
db.pets_health = require("./pets_health.model.js")(sequelize, Sequelize);
db.pets_images = require("./pets_images.model.js")(sequelize, Sequelize);
db.pets_move = require("./pets_move.model.js")(sequelize, Sequelize);
db.pets_owners = require("./pets_owners.model.js")(sequelize, Sequelize);
db.pets_responsible = require("./pets_responsible.model.js")(sequelize, Sequelize);
db.pets_sanitation = require("./pets_sanitation.model.js")(sequelize, Sequelize);
db.pets_vaccination = require("./pets_vaccination.model.js")(sequelize, Sequelize);


module.exports = db;