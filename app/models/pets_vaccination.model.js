module.exports = (sequelize, Sequelize) => {
    const Pet_vaccination = sequelize.define("Pets_vaccination", {
        order: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.STRING
        },
        vaccine: {
            type: Sequelize.STRING
        },
        series: {
            type: Sequelize.STRING,
            allowNull: true
        },
        pet_num: {
            type: Sequelize.INTEGER
        }
    });

    return Pet_vaccination;
};