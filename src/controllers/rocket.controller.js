const rocket = require("../models").rocket;

module.exports = {
    // méthodes avec les promesses
    getAllRockets(req, res) {
        const rocketCollection = rocket.findAll({});
        let data = (rocketCollection) => {
            return new Promise((resolve, reject) => {
                if (rocketCollection) {
                    resolve(rocketCollection);
                } else {
                    reject("Pas de donnees");
                }
            });
        };
        data(rocketCollection)
            .then((rocketCollection) => res.status(201).send(rocketCollection))
            .catch((error) => res.status(500).send(error));
    },
    getOneRocketById(req, res) {
        const rocketCollection = rocket.findOne({
            where: { id: req.params.rocketId }
        });
        let data = (rocketCollection) => {
            return new Promise((resolve, reject) => {
                if (rocketCollection) {
                    resolve(rocketCollection);
                } else {
                    reject("rocket inconnue");
                }
            });
        };
        data(rocketCollection)
            .then((rocketCollection) => res.status(201).send(rocketCollection))
            .catch((error) => res.status(400).send(error));

    },
    addNewRocket(req, res) {
        const rocketCreated = rocket.create({
            nom: req.body.nom,
            annee: req.body.annee,
            organisation: req.body.organisation,
            destination: req.body.destination
        });
        let data = (rocketCreated) => {
            return new Promise((resolve, reject) => {
                if (rocketCreated) {
                    resolve(rocketCreated);
                } else {
                    reject("rocket non crée");
                }
            });
        };
        data(rocketCreated)
            .then((rocketCreated) => res.status(201).send(rocketCreated))
            .catch((error) => res.status(400).send(error));
    }
    

    // méthodes avec async await
    // async getAllRockets(req, res) {
    //     try {
    //         const rocketCollection = await rocket.findAll({});
    //         res.status(201).send(rocketCollection);
    //     }
    //     catch (e) {
    //         console.log(e);
    //         res.status(500).send(e);
    //     }

    // },
    // async getOneRocketById(req, res) {
    //     try {
    //         const rocketCollection = await rocket.findOne({
    //             where: { id: req.params.rocketId }
    //         });

    //         res.status(201).send(rocketCollection);
    //     }
    //     catch (e) {
    //         console.log(e);
    //         res.status(400).send(e);
    //     }

    // },
    // async addNewRocket(req, res) {

    //     try {

    //         const rocketCreated = await rocket.create({
    //             nom: req.body.nom,
    //             annee: req.body.annee,
    //             organisation: req.body.organisation,
    //             destination: req.body.destination
    //         });
    //         res.status(201).send(rocketCreated)


    //     }
    //     catch (e) {
    //         console.log(e);
    //         res.status(400).send(e);
    //     }
    // },

    // async updateRocketById(req, res) {
    //     try {
    //         const rocketCollection = await rocket.findOne({
    //             id: req.params.rocketId
    //         })

    //         if (rocketCollection) {
    //             const updatedRocket = await rocketCollection.update({
    //                 nom: req.body.nom,
    //                 annee: req.body.annee,
    //                 organisation: req.body.organisation,
    //                 destination: req.body.destination
    //             })

    //             res.status(201).send(updatedRocket);
    //         }
    //         else {
    //             res.status(404).send("Rocket Not Found");
    //         }

    //     }
    //     catch (e) {
    //         console.log(e);
    //         res.status(400).send(e);
    //     }
    // },

    // async deleteRocketById(req, res) {
    //     try {
    //         const deletedRocket = await rocket.findOne({
    //             id: req.params.rocketId
    //         });

    //         if (deletedRocket) {
    //             deletedRocket.destroy();
    //             res.status(201).send("Deleted");
    //         }
    //         else {
    //             res.status(404).send("Rocket Not Found");
    //         }

    //     }
    //     catch (e) {
    //         console.log(e);
    //         res.status(400).send(e);
    //     }

    // }
};
