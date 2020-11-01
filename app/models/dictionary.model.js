module.exports = (sequelize, Sequelize) => {
    const Dictionary = sequelize.define("Dictionary", {
        list: {
            type: Sequelize.STRING
        },
        value: {
            type: Sequelize.STRING,
        }
    });

    return Dictionary;
};