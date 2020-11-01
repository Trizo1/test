module.exports = app => {
    const pets = require("../controllers/pets.controller.js");

    var router = require("express").Router();

    router.post('/main', pets.createPet_main);
    router.post('/additional/:id', pets.createPet_additional);
    router.post('/catch/:id', pets.createPet_catch_info);
    router.post('/move/:id', pets.createPet_move);
    router.post('/responsible/:id', pets.createPet_responsible);
    router.post('/owner/:id', pets.makePet_owner);


    router.post('/vactination/:id', pets.makeVaccination);
    router.post('/sanitation/:id', pets.makeSanitation);
    router.post('/health/:id', pets.makeHealth);


    router.get("/health/:id", pets.getHealth);
    router.get("/vaccination/:id", pets.getVaccination);
    router.get("/sanitation/:id", pets.getSanitation);
    router.get("/", pets.getAllPets);
    router.get("/:id", pets.getOnePet);
    router.get("/owner/:id", pets.getPet_owner);

    router.put('/main/:id', pets.updatePet_main);
    router.put('/additional/:id', pets.updatePet_additional);
    router.put('/catch/:id', pets.updatePet_catch_info);
    router.put('/move/:id', pets.updatePet_move);
    router.put('/responsible/:id', pets.updatePet_responsible);

    router.get("/shelterwithpets/:id", pets.getShelterPets);
    router.get("/ready/all", pets.getAllReadyPets);

    app.use('/api/pets', router);
};