module.exports = (sequelize, Sequelize) => {
    const Pet_health = sequelize.define("Pets_health", {
        check_date: {
            type: Sequelize.STRING
        },
        anamnesis: {
            type: Sequelize.STRING
        },
        pet_num: {
            type: Sequelize.INTEGER
        }
    });

    return Pet_health;
};