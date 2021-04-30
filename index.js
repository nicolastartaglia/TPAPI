const express = require("express");

const cors = require("cors");


const app = express();
const db = require("./src/models");
const rocket = db.rocket;
db.sequelize.sync();

// création de valeurs dans mysql
// db.sequelize.sync({force: true}).then(() => {
//     console.log("Drop and resync db");
//     initial();
// });


app.use(cors());


app.use(express.json());


app.use(express.urlencoded());



require('./src/routes/rocket.routes')(app);

app.get("/", (req, res) => {
    res.json({message: "Welcome to our application."});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}.`); });


