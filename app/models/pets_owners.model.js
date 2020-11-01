module.exports = (sequelize, Sequelize) => {
    const Pet_owners = sequelize.define("Pets_owners", {
        legal_entity: {
            type: Sequelize.STRING,
            allowNull: true
        },
        guardian: {
            type: Sequelize.STRING,
            allowNull: true
        },
        individual: {
            type: Sequelize.STRING,
            allowNull: true
        },
        pet_num: {
            type: Sequelize.INTEGER
        }
    });

    return Pet_owners;
};