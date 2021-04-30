const controller = require("../controllers/rocket.controller");

module.exports = function (app) {
     app.get("/api/rockets", controller.getAllRockets);
     app.get("/api/rockets/:rocketId", controller.getOneRocketById);
     app.post("/api/rockets", controller.addNewRocket);
    //  app.put("/api/rockets/:rocketId", controller.updateRocketById);
    //  app.delete("/api/rockets/:rocketId", controller.deleteRocketById);
 }