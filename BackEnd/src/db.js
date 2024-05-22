require("dotenv").config();
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_DEPLOY } = process.env;

const sequelizeBookStore = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false,
        native: false,
    }
);

const basename = path.basename(__filename);
const modelDefiners = [];

const defineModels = (sequelize, modelDefiners, modelsPath) => {
    fs.readdirSync(modelsPath)
        .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
        .forEach((file) => { modelDefiners.push(require(path.join(modelsPath, file))) });

    modelDefiners.forEach(model => model(sequelize));

    let entries = Object.entries(sequelize.models);
    let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
    sequelize.models = Object.fromEntries(capsEntries);
};

defineModels(sequelizeBookStore, modelDefiners, path.join(__dirname, '/models'));

module.exports = {
    sequelizeBookStore,
    ...sequelizeBookStore.models,
    connStore: sequelizeBookStore
};
