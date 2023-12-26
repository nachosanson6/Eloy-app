const mongoose = require("mongoose");


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb+srv://sanson6:Sansonite6@cluster0.bj5ctu6.mongodb.net/";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
