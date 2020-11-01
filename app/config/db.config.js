module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "F4dS12x87",
    DB: "FindYourAnimal",
    dialect: "postgres",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};