const dbConfig = require("./../config/db.config");

const Sequelize = require("sequelize");

// Sequelize est un ORM pour node.js compatible avec différents moteurs de base de données comme Mysql, Sqlite…etc.
// ORM => Object Relational Mapping
// Technique de programmation faisant le lien entre le monde de la base de données (MYSQL) et le monde de la programmation 
// objet.(Node js)
// Elle permet de transformer un objet en une table facilement manipulable via ses attributs.

// Initialisation d'une nouvelle instance de connexion à mysql avec les parametres recuperes du module db.config.js
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

// Mise en place de la connexion
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import des entités à mapper (création table user avec ses proprietes dans db) dans la db formation_db
db.rocket = require('../models/rocket.model')(sequelize, Sequelize);


module.exports = db;