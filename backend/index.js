import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import PaymentsDAO from "./dao/paymentsDAO.js";
import BucketsDAO from "./dao/bucketsDAO.js";
import UsersDAO from "./dao/usersDAO.js";

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.BUCKETBANK_DB_URI, {
  poolSize: 50,
  wtimeout: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.log("Error connecting: " + err.message);
    reject(err.message);
  })
  .then(async (database) => {
    await PaymentsDAO.injectDB(database);
    await BucketsDAO.injectDB(database);
    await UsersDAO.injectDB(database);

    app.listen(port, () => {
      console.log("listening on port" + port);
    });
  });
