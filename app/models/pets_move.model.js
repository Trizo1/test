module.exports = (sequelize, Sequelize) => {
    const Pet_move = sequelize.define("Pets_move", {
        date_in: {
            type: Sequelize.STRING
        },
        act: {
            type: Sequelize.STRING
        },
        date_out: {
            type: Sequelize.STRING,
            allowNull: true
        },
        reason: {
            type: Sequelize.STRING,
            allowNull: true
        },
        order: {
            type: Sequelize.STRING,
            allowNull: true
        },
        pet_num: {
            type: Sequelize.INTEGER
        }
    });

    return Pet_move;
};