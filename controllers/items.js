const Item = require("../models/item");

module.exports.index = async (req, res) => {
  const allItems = await Item.find({});
  res.render("items/index.ejs", { allItems });
};

module.exports.renderNewForm = (req, res) => {
  res.render("items/new.ejs");
};

module.exports.showLtem = async (req, res) => {
  let { id } = req.params;
  const item = await Item.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!item) {
    req.flash("error", "Item you requested for does not exist!");
    res.redirect("/items");
  }
  res.render("items/show.ejs", { item });
};

module.exports.createItem = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  console.log(url, "..", filename);
  const newItem = new Item(req.body.item);
  newitem.owner = req.user._id;
  newitem.image = { url, filename };

  newitem.geometry = response.body.features[0].geometry;

  let savedItem = await newItem.save();
  console.log(savedItem);
  req.flash("success", "New Item Created");
  res.redirect("/items");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const item = await Item.findById(id);
  if (!item) {
    req.flash("error", "Ltem you requested for does not exist!");
    res.redirect("/items");
  }

  let originalImageUrl = item.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

  res.render("items/edit.ejs", { item, originalImageUrl });
};

module.exports.updateLtem = async (req, res) => {
  let { id } = req.params;
  let item = await Item.findByIdAndUpdate(id, { ...req.body.ltem });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    item.image = { url, filename };
    await item.save();
  }

  req.flash("success", "Ltem Updated");
  res.redirect(`/items/${id}`);
};

module.exports.filterItems = async (req, res, next) => {
  const { q } = req.params;
  const filteredItems = await Ltem.find({ type: q }).exec();
  if (!filteredItems.length) {
    req.flash("error", "No Items exists for this filter!");
    res.redirect("/items");
    return;
  }
  res.locals.success = `Items Filtered by ${q}`;
  res.render("items/show.ejs", { allItems: filteredItems });
};

module.exports.destroyLtem = async (req, res) => {
  let { id } = req.params;
  let deletedLtem = await Ltem.findByIdAndDelete(id);
  console.log(deletedLtem);
  req.flash("success", "Ltem Deleted");
  res.redirect("/items");
};

// module.exports.search = async (req, res) => {
//   console.log(req.query.q);
//   let input = req.query.q.trim().replace(/\s+/g, " "); //remove start and end space
//   console.log(input);
//   if (input == "" || input == " ") {
//     //search value is empty
//     req.flash("error", "Search value empty!!!");
//     res.redirect("/i");
//   }

//convert every word first letter capital and other small
//   let data = input.split("");
//   let element = "";
//   let flag = false;
//   for (let index = 0; index < data.length; index++) {
//     if (index == 0 || flag) {
//       element = element + data[index].toUpperCase();
//     } else {
//       element = element + data[index].toLowerCase();
//     }
//     flag = data[index] == " ";
//   }
//   console.log(element);

//   let alli = await Ltem.find({
//     title: { $regex: element, $options: "i" },
//   });
//   if (alli.length != 0) {
//     res.locals.success = "i searched by title";
//     res.render("items/index.ejs", { alli });
//     return;
//   }
//   if (alli.length == 0) {
//     alli = await Ltem.find({
//       category: { $regex: element, $options: "i" },
//     }).sort({ _id: -1 });
//     if (alli.length != 0) {
//       res.locals.success = "i searched by category";
//       res.render("items/index.ejs", { alli });
//       return;
//     }
//   }
//   if (alli.length == 0) {
//     alli = await Ltem.find({
//       country: { $regex: element, $options: "i" },
//     }).sort({ _id: -1 });
//     if (alli.length != 0) {
//       res.locals.success = "i searched by country";
//       res.render("items/index.ejs", { alli });
//       return;
//     }
//   }
//   if (alli.length == 0) {
//     alli = await Ltem.find({
//       location: { $regex: element, $options: "i" },
//     }).sort({ _id: -1 });
//     if (alli.length != 0) {
//       res.locals.success = "i searched by location";
//       res.render("items/index.ejs", { alli });
//       return;
//     }
//   }

//   const intValue = parseInt(element, 10); //10 for decimal return - int ya NaN
//   const intDec = Number.isInteger(intValue); //check intValue is number or not

//   if (alli.length == 0 && intDec) {
//     alli = await Ltem.find({ price: { $lte: element } }).sort({
//       price: 1,
//     });
//     if (alli.length != 0) {
//       res.locals.success = `i searched for less than Rs ${element}`;
//       res.render("items/index.ejs", { alli });
//       return;
//     }
//   }
//   if (alli.length == 0) {
//     req.flash("error", "i is not here !!!");
//     res.redirect("/i");
//   }
