const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  info: String,
  // image: {
  //   url: String,
  //   filename: String,
  // },
  price: Number,
  oldPrice: Number,
  // location: String,
  // country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  type: {
    type: String,
    enum: [
      "Rooms",
      "Iconic cities",
      "Mountains",
      "Castles",
      "Amazing pools",
      "Camping",
      "Farms",
      "Arctic",
      "Domes",
      "Boats",
    ],
    required: true,
  },
});

itemSchema.post("findOneAndDelete", async (item) => {
  if (item) {
    await Review.deleteMany({ _id: { $in: item.reviews } });
  }
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
