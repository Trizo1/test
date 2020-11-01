module.exports = (sequelize, Sequelize) => {
    const Pet_responsible = sequelize.define("Pets_responsible", {
        person: {
            type: Sequelize.STRING,
        },
        pet_num: {
            type: Sequelize.INTEGER
        }
    });

    return Pet_responsible;
};