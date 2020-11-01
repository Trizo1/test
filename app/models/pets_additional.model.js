module.exports = (sequelize, Sequelize) => {
    const Pet_additional = sequelize.define("Pets_additional", {
        id_tag: {
            type: Sequelize.BIGINT
        },
        ster_date: {
            type: Sequelize.STRING
        },
        doctor: {
            type: Sequelize.STRING
        },
        socialised: {
            type: Sequelize.STRING
        },
        pet_num: {
            type: Sequelize.INTEGER
        }
    });

    return Pet_additional;
};