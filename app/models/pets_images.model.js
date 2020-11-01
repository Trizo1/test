module.exports = (sequelize, Sequelize) => {
    const Pet_image = sequelize.define("Pets_images", {
        image_src: {
            type: Sequelize.STRING
        },
        pet_num: {
            type: Sequelize.INTEGER
        }
    });

    return Pet_image;
};