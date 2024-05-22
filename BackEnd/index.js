const app = require ("./src/app");
const { sequelizeBookStore } = require ("./src/db");
const dotenv = require ("dotenv");

dotenv.config();

const PORT = process.env.PORT;

sequelizeBookStore.sync({ force: false })
  .then(() => {
    console.log("Database synchronized successfully");

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error synchronizing the database:", err);
  });
