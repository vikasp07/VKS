if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const initdata = require("./data.js");
const Item = require("../models/item.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  // await mongoose.connect(MONGO_URL);
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Item.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "667064f6874dfceb0dbfb163",
  }));
  await Item.insertMany(initdata.data);
  console.log("Data was initialized");
};

initDB();
