module.exports = (sequelize, Sequelize) => {
    const Pet_main = sequelize.define("Pets_main", {
        card_num: {
            type: Sequelize.STRING
        },
        species: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.STRING
        },
        weight: {
            type: Sequelize.DECIMAL(5, 1)
        },
        name: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        breed: {
            type: Sequelize.STRING
        },
        hair_color: {
            type: Sequelize.STRING
        },
        hair_type: {
            type: Sequelize.STRING
        },
        ears_type: {
            type: Sequelize.STRING
        },
        tail_type: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.STRING
        },
        special: {
            type: Sequelize.STRING,
            allowNull: true
        },
        enclosure: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        shelter_id: {
            type: Sequelize.INTEGER,
        }
    });

    return Pet_main;
};