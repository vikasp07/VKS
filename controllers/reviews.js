const Item = require("../models/item");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  let item = await Item.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;

  item.reviews.push(newReview);

  await newReview.save();
  await item.save();
  req.flash("success", "New Review Created");
  res.redirect(`/items/${item._id}`);
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;

  await Item.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted");
  res.redirect(`/items/${id}`);
};
