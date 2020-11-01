module.exports = (sequelize, Sequelize) => {
    const Pet_sanitation = sequelize.define("Pets_sanitation", {
        order: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.STRING
        },
        medicine: {
            type: Sequelize.STRING
        },
        dose: {
            type: Sequelize.STRING
        },
        pet_num: {
            type: Sequelize.INTEGER
        }
    });

    return Pet_sanitation;
};