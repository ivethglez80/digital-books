require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelizeBookStore = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false,
        native: false,
    }
);

//activa para produccion store
// const sequelizeBookStore = new Sequelize(
//     DB_DEPLOY_STORE,
//     {logging:false}
// );

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(path.join(__dirname, '/models'), file)));
    });

modelDefiners.forEach((model) => model(sequelizeBookStore));

let entries = Object.entries(sequelizeBookStore.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelizeBookStore.models = Object.fromEntries(capsEntries);

Object.keys(sequelizeBookStore.models).forEach((modelName) => {
    if ('associate' in sequelizeBookStore.models[modelName]) {
        sequelizeBookStore.models[modelName].associate(sequelizeBookStore.models);
    }
});

module.exports = {
    sequelizeBookStore,
    ...sequelizeBookStore.models,
    connBook: sequelizeBookStore
};
